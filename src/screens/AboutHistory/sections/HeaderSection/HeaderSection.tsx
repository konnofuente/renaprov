import { Button } from "../../../../components/ui/button";
import { useNavigation } from "../../../../contexts/NavigationContext";

const navigationItems = [
  { label: "Accueil", page: "accueil" as const },
  { label: "A propos", page: "about" as const },
  { label: "Notre mission", href: "#mission" },
  { label: "Produits", href: "#produits" },
  { label: "MASO", href: "#maso" },
  { label: "Notre réseau", href: "#reseau" },
];

export const HeaderSection = (): JSX.Element => {
  const { setCurrentPage } = useNavigation();

  const handlePageNavigation = (page: "accueil" | "about") => {
    setCurrentPage(page);
  };

  const handleNavClick = (href: string) => {
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full items-center justify-center bg-white border-b border-black sticky top-0 z-50">
      <header className="flex h-[72px] items-center justify-around px-[60px] py-0 w-full bg-transparent">
        <div className="flex items-center justify-between flex-1">
          <div className="inline-flex items-center gap-[150px]">
            <img
              className="w-[96.94px] h-[52.98px]"
              alt="Image removebg"
              src="/image-removebg-preview-1.png"
            />

            <nav className="inline-flex items-center gap-[25px]">
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if ('page' in item && item.page) {
                      handlePageNavigation(item.page);
                    } else if ('href' in item && item.href) {
                      handleNavClick(item.href);
                    }
                  }}
                  className="[font-family:'Karla',Helvetica] font-medium text-black text-lg tracking-[0] leading-[27px] whitespace-nowrap hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-start">
            <Button className="h-auto bg-foundation-bluenormal hover:bg-foundation-bluedark-hover rounded-[35px] px-0 py-4 w-44">
              <span className="[font-family:'Karla',Helvetica] font-semibold text-light-text text-xl text-center tracking-[0.20px] leading-5">
                Postuler ici !
              </span>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};
