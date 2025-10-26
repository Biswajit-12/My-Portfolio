// import { ArrowDown } from "lucide-react";
// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4">
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Biswajit
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Mohapatra
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I create stellar web experiences with modern technologies.
//             Specializing in front-end development, I build interfaces that are
//             both beautiful and functional.
//           </p>
//           <div className="opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>
//  {/* --- Circular Image Section --- */}
//       <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
//         <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg animate-fade-in-delay-1">
//           <img
//             src="/path-to-your-image.jpg"
//             alt="Biswajit Mohapatra"
//             className="w-full h-full object-cover"/>
//         </div>
//       </div>
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//       <span className="text-sm text-muted-foreground mb-2">Scroll</span>
//       <ArrowDown className="h-5 w-5 text-primary"/>
//       </div>
//     </section>
//   );
// };
// export default HeroSection;

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 pt-24 md:pt-32"
    >
      {/* --- Left Side (Text Content) --- */}
      <div className="md:flex-[0.65] text-center md:text-left space-y-6 z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="opacity-0 animate-fade-in">Hi, I'm</span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            {" "}
            Biswajit
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
            {" "}
            Mohapatra
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
          I create stellar web experiences with modern technologies.
          Specializing in front-end development, I build interfaces that are
          both beautiful and functional.
        </p>

        <div className="opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>

      {/* --- Right Side (Circular Image) --- */}
      <div className="md:flex-[0.35] flex justify-center md:justify-end mt-12 md:mt-0">
        <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl opacity-0 animate-fade-in-delay-3">
          <img
            src="/biswa.jpeg"
            alt="Biswajit Mohapatra"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
