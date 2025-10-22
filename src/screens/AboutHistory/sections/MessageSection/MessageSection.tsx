export const MessageSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full  overflow-hidden bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_43%)]  "
      aria-labelledby="message-heading"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-0 transform sm:translate-y-2 max-w-7xl mx-auto">
        <div className="flex-shrink-0 w-full md:w-auto py-[-32px] h-full min-h-[400px]">
          <img
            className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[669px] h-full min-h-[400px] object-cover object-center shadow-lg"
            alt="Portrait de Mr M. Emmanuel Noël Bissai, Directeur Général de RENAPROV"
            src="/frame-2087326088-removebg-preview.png"
          />
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[500px] xl:max-w-[600px] flex-1 text-center md:text-left">
          <h2
            id="message-heading"
            className="font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-[120%]"
          >
            <span className="block">Mr M. Emmanuel</span>
            <span className="block">Noël Bissai</span>
          </h2>

          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed w-full">
            Depuis près de trois décennies, Renaprov s&apos;engage à rester
            proche de ses clients et à leur proposer des solutions financières
            solidaires. Notre ambition est de consolider cette proximité en
            développant des services modernes, adaptés aux besoins des familles,
            des entreprises et des collectivités. Ensemble, bâtissons une
            finance inclusive et durable pour le Cameroun.
          </p>

          <img
            className="absolute bottom-0 right-2 sm:right-4 md:right-6 lg:right-8 xl:right-12 w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] xl:w-[120px] opacity-50 hover:opacity-70 transition-opacity duration-300 z-10"
            alt="Décoration graphique RENAPROV"
            src="/capa-1.svg"
          />
        </div>
      </div>
    </section>
  );
};
