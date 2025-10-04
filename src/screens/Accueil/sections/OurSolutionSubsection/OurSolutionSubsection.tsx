import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const productCards = [
  {
    title: "Compte courant",
    description: "Gérez vos finances en toute simplicité.",
    image: "",
  },
  {
    title: "Compte épargne",
    description: "Épargnez et faites fructifier vos revenus.",
    image: "",
  },
  {
    title: "MASO",
    description: "De locataire à propriétaire, concrétisez votre rêve",
    image: "",
  },
  {
    title: "ORA",
    description: "Objectif Rendement préparez vos projets pas à pas.",
    image: "",
  },
];


export const OurSolutionSubsection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Show exactly 3 cards at once, slide one by one
  const cardsToShow = 3;
  const maxSlide = productCards.length - cardsToShow; // Maximum slide index
  
  const nextSlide = () => {
    console.log('Next slide clicked, current:', currentSlide, 'max:', maxSlide);
    if (currentSlide < maxSlide) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    console.log('Prev slide clicked, current:', currentSlide);
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Check if buttons should be disabled
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= maxSlide;

  return (
    <section className="w-full justify-center gap-8 sm:gap-10 md:gap-[47px] bg-grayswhite flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[60px] py-8 sm:py-10 md:py-12 lg:py-[60px] relative">
      <div className="flex flex-col lg:flex-row w-full max-w-[1194px] items-start justify-between relative gap-8 lg:gap-12">
        <div className="flex-col w-full lg:max-w-[552px] items-start gap-8 sm:gap-12 md:gap-20 flex relative">
          <div className="gap-8 sm:gap-12 md:gap-20 self-stretch flex items-start relative w-full">
            <h2 className="relative w-full [font-family:'Roboto',Helvetica] font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
              Nos solutions financières pour{" "}
              <span className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                particuliers et entreprises
              </span>
            </h2>
          </div>
        </div>
        
        <div className="flex-col w-full lg:max-w-[552px] items-start gap-8 sm:gap-12 md:gap-20 flex relative">
          <div className="gap-8 sm:gap-12 md:gap-20 self-stretch flex items-start relative w-full">
            <p className="relative w-full [font-family:'Karla',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg tracking-[0] leading-relaxed md:leading-[27px]">
              Que vous soyez salarié, entrepreneur, commerçant ou étudiant,
              RENAPROV met à votre disposition une gamme de produits pensés pour
              vos besoins
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1320px] items-center gap-5 relative">
        <div className="relative w-full overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out mb-4" 
               style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}>
            {productCards.map((product, index) => (
              <div key={index} className="w-[33.33%] flex-shrink-0 px-2 flex">
                <Card className="flex flex-col w-full max-w-[401px] mx-auto items-center gap-2 md:gap-3 pt-0 pb-3 md:pb-4 px-0 relative bg-[#ffffff] rounded-[15px] overflow-hidden shadow-[0px_1px_7px_#00000040] border-0 h-full">
                  <img
                    className="relative self-stretch w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover bg-gray-200"
                    alt={`${product.title} - RENAPROV`}
                    src={product.image || "/hero1.png"}
                  />

                  <CardContent className="flex flex-col w-full px-4 sm:px-5 md:px-6 items-start gap-2 md:gap-3 relative flex-1">
                    <div className="gap-1 flex flex-col items-start relative self-stretch w-full flex-1">
                      <h3 className="self-stretch bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Roboto',Helvetica] text-transparent text-2xl sm:text-[28px] md:text-[32px] leading-tight md:leading-[44.8px] relative font-bold tracking-[0]">
                        {product.title}
                      </h3>

                      <p className="relative self-stretch [font-family:'Karla',Helvetica] font-normal text-foundationgreylight-active text-sm sm:text-[15px] md:text-base tracking-[0] leading-relaxed md:leading-6 line-clamp-1 overflow-hidden text-ellipsis">
                        {product.description}
                      </p>
                    </div>

                    <Button
                      variant="link"
                      className="inline-flex items-center justify-center gap-2.5 relative h-auto p-0 rounded-[35px] overflow-hidden"
                    >
                      <span className="relative w-fit bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Karla',Helvetica] font-semibold text-transparent text-xs text-center tracking-[0.20px] leading-[18px] underline whitespace-nowrap">
                        En savoir plus &gt;
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[1253px] h-auto sm:h-[50px] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 mt-4">
          <div className="flex items-center gap-[11px] p-2.5">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-foundation-bluenormal w-8"
                    : "bg-black opacity-20 hover:opacity-40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4 sm:gap-5 md:gap-[25px]">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={isPrevDisabled}
              className={`inline-flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 rounded-[50px] border border-solid transition-all duration-200 ${
                isPrevDisabled 
                  ? "bg-gray-100 border-gray-300 cursor-not-allowed opacity-50" 
                  : "bg-[#ffffff] border-black hover:bg-[#ffffff]/90"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${isPrevDisabled ? "text-gray-400" : "text-black"}`} />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={isNextDisabled}
              className="inline-flex w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 items-center justify-center gap-2 p-2 sm:p-2.5 md:p-3 bg-[#ffffff] rounded-[50px] border border-solid border-black hover:bg-[#ffffff]/90 transition-all duration-200"
              aria-label="Next slide"
            >
              <ChevronRightIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${isNextDisabled ? "text-gray-400" : "text-black"}`} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
