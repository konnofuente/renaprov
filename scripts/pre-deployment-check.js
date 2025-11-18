#!/usr/bin/env node

/**
 * Script de vérification pré-déploiement pour RENAPROV
 * Exécuter avec: node scripts/pre-deployment-check.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

let errors = [];
let warnings = [];
let success = [];

function checkFileExists(filePath, description) {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    success.push(`✅ ${description}: ${filePath}`);
    return true;
  } else {
    errors.push(`❌ ${description} manquant: ${filePath}`);
    return false;
  }
}

function checkConsoleLogs() {
  const srcDir = path.join(process.cwd(), 'src');
  const files = getAllFiles(srcDir);
  let foundLogs = false;

  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        if (line.includes('console.log') && !line.includes('//') && !line.trim().startsWith('//')) {
          warnings.push(`⚠️  console.log trouvé dans ${path.relative(process.cwd(), file)}:${index + 1}`);
          foundLogs = true;
        }
      });
    }
  });

  if (!foundLogs) {
    success.push('✅ Aucun console.log trouvé dans le code');
  }
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.git')) {
        getAllFiles(filePath, fileList);
      }
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function checkEnvFiles() {
  const envLocal = path.join(process.cwd(), '.env.local');
  const envExample = path.join(process.cwd(), 'env.example');
  
  if (fs.existsSync(envLocal)) {
    warnings.push('⚠️  .env.local existe - vérifier qu\'il n\'est pas commité');
  }
  
  if (fs.existsSync(envExample)) {
    success.push('✅ env.example existe');
  } else {
    warnings.push('⚠️  env.example manquant (optionnel)');
  }
}

function checkBuild() {
  const distDir = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distDir)) {
    success.push('✅ Dossier dist/ existe');
    
    const indexHtml = path.join(distDir, 'index.html');
    if (fs.existsSync(indexHtml)) {
      success.push('✅ index.html dans dist/');
    } else {
      errors.push('❌ index.html manquant dans dist/');
    }
  } else {
    warnings.push('⚠️  Dossier dist/ n\'existe pas - exécuter npm run build');
  }
}

function checkPublicFiles() {
  const publicDir = path.join(process.cwd(), 'public');
  
  const requiredFiles = [
    { file: 'robots.txt', desc: 'robots.txt' },
    { file: 'sitemap.xml', desc: 'sitemap.xml' },
  ];
  
  const optionalFiles = [
    { file: 'og-image.jpg', desc: 'og-image.jpg (recommandé pour SEO)' },
    { file: '.htaccess', desc: '.htaccess (optionnel pour Apache)' },
  ];
  
  requiredFiles.forEach(({ file, desc }) => {
    checkFileExists(`public/${file}`, desc);
  });
  
  optionalFiles.forEach(({ file, desc }) => {
    const fullPath = path.join(publicDir, file);
    if (fs.existsSync(fullPath)) {
      success.push(`✅ ${desc}`);
    } else {
      warnings.push(`⚠️  ${desc} manquant`);
    }
  });
}

function checkPackageJson() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    if (packageJson.scripts && packageJson.scripts.build) {
      success.push('✅ Script build trouvé dans package.json');
    } else {
      errors.push('❌ Script build manquant dans package.json');
    }
  }
}

function checkGitIgnore() {
  const gitignorePath = path.join(process.cwd(), '.gitignore');
  if (fs.existsSync(gitignorePath)) {
    const content = fs.readFileSync(gitignorePath, 'utf8');
    if (content.includes('.env.local')) {
      success.push('✅ .env.local est dans .gitignore');
    } else {
      warnings.push('⚠️  .env.local n\'est pas dans .gitignore');
    }
  }
}

console.log(`${colors.blue}🔍 AUDIT PRÉ-DÉPLOIEMENT RENAPROV${colors.reset}\n`);
console.log('Vérification en cours...\n');

// Exécuter les vérifications
checkFileExists('package.json', 'package.json');
checkFileExists('vite.config.ts', 'vite.config.ts');
checkFileExists('index.html', 'index.html');
checkFileExists('.gitignore', '.gitignore');

checkPublicFiles();
checkEnvFiles();
checkConsoleLogs();
checkBuild();
checkPackageJson();
checkGitIgnore();

// Afficher les résultats
console.log(`\n${colors.green}✅ SUCCÈS (${success.length})${colors.reset}`);
success.forEach(msg => console.log(`  ${msg}`));

if (warnings.length > 0) {
  console.log(`\n${colors.yellow}⚠️  AVERTISSEMENTS (${warnings.length})${colors.reset}`);
  warnings.forEach(msg => console.log(`  ${msg}`));
}

if (errors.length > 0) {
  console.log(`\n${colors.red}❌ ERREURS (${errors.length})${colors.reset}`);
  errors.forEach(msg => console.log(`  ${msg}`));
}

console.log(`\n${colors.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}`);
console.log(`Total: ${success.length} succès, ${warnings.length} avertissements, ${errors.length} erreurs`);

if (errors.length > 0) {
  console.log(`\n${colors.red}❌ Des erreurs critiques doivent être corrigées avant le déploiement${colors.reset}`);
  process.exit(1);
} else if (warnings.length > 0) {
  console.log(`\n${colors.yellow}⚠️  Des avertissements doivent être vérifiés${colors.reset}`);
  process.exit(0);
} else {
  console.log(`\n${colors.green}✅ Toutes les vérifications de base sont passées${colors.reset}`);
  process.exit(0);
}
