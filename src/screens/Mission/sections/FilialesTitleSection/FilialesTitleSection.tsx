
// CSS Classes pour le gradient
/**
  const gradientTextClass =
  "bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]";
 */
export const FilialesTitleSection = (): JSX.Element => {
  return (
      <div className="flex flex-col items-center text-center mb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          <div className="text-black">Nos filiales à (la)</div>
          <div className="bg-[linear-gradient(148deg,rgba(0,172,238,1)_0%,rgba(1,27,38,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
          force d’un réseau intégré
          </div>
        </h2>
      </div>
  );
};
