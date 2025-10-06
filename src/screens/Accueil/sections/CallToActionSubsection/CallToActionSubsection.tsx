import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const CallToActionSubsection = (): JSX.Element => {
  return (
    <section
      className="relative flex flex-col items-center justify-center gap-8 px-4 py-20 w-full min-h-[500px]"
      style={{
        backgroundImage: "url('/public/call to action.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay avec couleur spécifiée */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(5, 91, 124, 0.2)" }}
      ></div>

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl w-full">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
          Abonnez vous à la newsletter
        </h2>

        <p className="text-white text-lg text-center">
          Recevez des recettes saines directement dans votre boîte mail.
        </p>

        <div className="flex gap-3 items-center">
          <Input
            type="email"
            placeholder="Entrez votre email"
            className="w-64 h-12 bg-transparent  text-white placeholder:text-white  px-4"
          />

          <Button className="h-12 px-6 bg-transparent border-white  border-[1px]  text-white hover:bg-white/10 ">
            S'abonner
          </Button>
        </div>
      </div>
    </section>
  );
};
