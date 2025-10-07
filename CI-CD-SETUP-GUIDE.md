# 🚀 CI/CD Setup Guide for RENAPROV Website with Hostinger (FTP)

This guide will walk you through setting up a complete CI/CD pipeline for your RENAPROV website using GitHub Actions and Hostinger hosting via FTP.

## 📋 Prerequisites

Before starting, ensure you have:

- ✅ A GitHub repository for your RENAPROV website
- ✅ A Hostinger hosting account with FTP access
- ✅ Your website code pushed to GitHub
- ✅ Node.js and npm installed locally (for testing)

## 🔧 Step 1: Hostinger FTP Setup

### 1.1 Get FTP Credentials

1. Log into your **Hostinger Control Panel**
2. Go to **Files** → **File Manager** or **FTP Accounts**
3. Note down your FTP credentials:
   - **FTP Host** (e.g., `ftp.your-domain.com` or `files.000webhost.com`)
   - **FTP Username** (usually your cPanel username or custom FTP user)
   - **FTP Password** (your FTP password)
   - **FTP Port** (usually `21`)
   - **FTP Path** (usually `/public_html`)

### 1.2 Create FTP Account (if needed)

If you don't have FTP credentials:

1. In Hostinger Control Panel, go to **FTP Accounts**
2. Click **Create FTP Account**
3. Set:
   - **Username**: Choose a username
   - **Password**: Create a strong password
   - **Directory**: `/public_html` (or your website root)
4. Save the credentials

### 1.3 Test FTP Connection

You can test your FTP connection using any FTP client:

**Using FileZilla (GUI):**
1. Download FileZilla
2. Enter your FTP credentials
3. Connect and verify you can see your files

**Using command line (if available):**
```bash
# Test FTP connection (if ftp command is available)
ftp your-ftp-host.com
# Enter username and password when prompted
```

## 🔐 Step 2: GitHub Secrets Configuration

### 2.1 Add Repository Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:

| Secret Name | Value | Description |
|-------------|-------|-------------|
| `HOSTINGER_FTP_HOST` | `ftp.your-domain.com` | Your FTP hostname |
| `HOSTINGER_FTP_USERNAME` | `your-ftp-username` | Your FTP username |
| `HOSTINGER_FTP_PASSWORD` | `your-ftp-password` | Your FTP password |
| `HOSTINGER_FTP_PORT` | `21` | FTP port (usually 21) |
| `HOSTINGER_FTP_PATH` | `/public_html` | Path where files should be deployed |
| `HOSTINGER_DOMAIN` | `https://your-domain.com` | Your website URL |

### 2.2 Security Best Practices

- ✅ Use a dedicated FTP account for deployments (not your main hosting account)
- ✅ Use a strong, unique password for the FTP account
- ✅ Never share your FTP credentials publicly
- ✅ Consider changing FTP password regularly

## 📁 Step 3: Project Structure

Your project should now have this structure:

```
renaprov/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── src/                        # Your React source code
├── dist/                       # Build output (auto-generated)
├── deploy.sh                   # Manual deployment script
├── env.example                 # Environment variables template
├── package.json
└── CI-CD-SETUP-GUIDE.md        # This guide
```

## 🚀 Step 4: Workflow Configuration

The GitHub Actions workflow (`.github/workflows/deploy.yml`) is already configured to:

1. **Trigger on push** to `main` or `dev` branches
2. **Build** your React application
3. **Deploy** to Hostinger automatically
4. **Set proper permissions** on uploaded files

### 4.1 Workflow Triggers

- **Automatic deployment**: Pushes to `main` branch
- **Testing**: Pull requests to `main` branch
- **Development**: Pushes to `dev` branch (builds but doesn't deploy)

## 🧪 Step 5: Testing the Setup

### 5.1 Test Locally

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Check if dist/ folder is created
ls -la dist/
```

### 5.2 Test Manual Deployment

```bash
# Set environment variables
export HOSTINGER_FTP_HOST="ftp.your-domain.com"
export HOSTINGER_FTP_USERNAME="your-ftp-username"
export HOSTINGER_FTP_PASSWORD="your-ftp-password"
export HOSTINGER_FTP_PORT="21"
export HOSTINGER_FTP_PATH="/public_html"

# Run manual deployment
./deploy.sh
```

### 5.3 Test GitHub Actions

1. Make a small change to your code
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Test CI/CD deployment"
   git push origin main
   ```
3. Go to your GitHub repository → **Actions** tab
4. Watch the deployment workflow run
5. Check your website after successful deployment

## 🔍 Step 6: Monitoring and Troubleshooting

### 6.1 Check Deployment Status

- **GitHub Actions**: Repository → Actions tab
- **Hostinger Logs**: Control Panel → Advanced → Error Logs
- **Website**: Visit your domain to verify changes

### 6.2 Common Issues and Solutions

| Issue | Solution |
|-------|----------|
| FTP connection failed | Verify FTP credentials and hostname are correct |
| Authentication failed | Check FTP username and password in GitHub secrets |
| Files not uploading | Verify FTP path is correct (usually /public_html) |
| Build failed | Check Node.js version and dependencies in package.json |
| Files not updating | Clear browser cache or check if files were uploaded correctly |
| Permission denied | Check if FTP account has write permissions to target directory |

### 6.3 Debug Commands

```bash
# Test FTP connection manually
ftp your-ftp-host.com
# Enter username and password when prompted

# Check if lftp is installed (recommended for better FTP support)
which lftp

# Install lftp if not available
# macOS: brew install lftp
# Ubuntu: apt-get install lftp

# Test manual deployment with verbose output
HOSTINGER_FTP_HOST="your-host" HOSTINGER_FTP_USERNAME="your-user" HOSTINGER_FTP_PASSWORD="your-pass" ./deploy.sh
```

## 🎯 Step 7: Best Practices

### 7.1 Branch Strategy

- **`main`**: Production branch (auto-deploys to live site)
- **`dev`**: Development branch (builds but doesn't deploy)
- **Feature branches**: For new features (no auto-deployment)

### 7.2 Security

- ✅ Never commit FTP credentials or secrets to your repository
- ✅ Use GitHub Secrets for sensitive information
- ✅ Use a dedicated FTP account for deployments
- ✅ Regularly rotate FTP passwords
- ✅ Monitor deployment logs for suspicious activity

### 7.3 Performance

- ✅ The workflow only deploys on `main` branch pushes
- ✅ Build artifacts are cached for faster subsequent builds
- ✅ Files are uploaded efficiently using rsync/scp

## 📊 Step 8: Advanced Configuration

### 8.1 Custom Build Commands

If you need custom build steps, modify the workflow:

```yaml
- name: Custom build step
  run: |
    npm run build
    # Add any custom post-build commands here
```

### 8.2 Environment-Specific Deployments

To deploy to different environments:

```yaml
- name: Deploy to staging
  if: github.ref == 'refs/heads/dev'
  # ... staging deployment steps

- name: Deploy to production  
  if: github.ref == 'refs/heads/main'
  # ... production deployment steps
```

### 8.3 Notifications

Add Slack/Discord notifications:

```yaml
- name: Notify deployment
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## ✅ Step 9: Verification Checklist

Before going live, verify:

- [ ] FTP credentials are working and accessible
- [ ] All GitHub secrets are set correctly
- [ ] Local build works (`npm run build`)
- [ ] Manual deployment works (`./deploy.sh`)
- [ ] GitHub Actions workflow runs successfully
- [ ] Website loads correctly after deployment
- [ ] All assets (images, CSS, JS) load properly
- [ ] SEO meta tags are working
- [ ] Mobile responsiveness is maintained

## 🆘 Support

If you encounter issues:

1. **Check GitHub Actions logs** for detailed error messages
2. **Verify FTP credentials** are working with a FTP client
3. **Test manual deployment** to isolate the issue
4. **Check FTP account permissions** on Hostinger
5. **Clear browser cache** when testing website changes

## 🎉 Congratulations!

Your RENAPROV website now has a fully automated CI/CD pipeline! Every time you push to the `main` branch, your website will automatically build and deploy to Hostinger.

### Next Steps:

1. **Test the pipeline** with a small change
2. **Set up monitoring** for your website
3. **Configure custom domain** if needed
4. **Add SSL certificate** for HTTPS
5. **Set up backup strategy** for your website

---

**Happy Deploying! 🚀**

*This guide was created specifically for the RENAPROV Finance SA website project.*
