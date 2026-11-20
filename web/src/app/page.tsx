import Image from "next/image";
import { FlagCanvas } from "@/components/flag-canvas";
import { Blob, LondrinaCutout } from "@/components/paper-shapes";

const INK = "bg-[#14172b] text-white";

// Faixas de papel recortado, coladas meio tortas, como em cartaz de lambe-lambe.
const STRIPS = [
  { text: "Um espaço nosso", look: INK, tilt: "-rotate-2" },
  { text: "Notícias, guias e histórias", look: "bg-white text-[#14172b]", tilt: "rotate-1" },
  { text: "da comunidade trans de Londrina", look: INK, tilt: "-rotate-1" },
];

export default function Home() {
  return (
    // O degradê em CSS é o fundo de reserva: aparece no primeiro paint e sem WebGL.
    <main className="relative min-h-svh overflow-hidden bg-[linear-gradient(#5bcefa_0_20%,#f5a9b8_20%_40%,#fff_40%_60%,#f5a9b8_60%_80%,#5bcefa_80%_100%)] text-[#14172b]">
      <FlagCanvas className="absolute inset-0 h-full w-full" />

      {/* Colagem: o mapa de Londrina como papel recortado, com duas manchas orgânicas. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
        <LondrinaCutout className="absolute left-1/2 top-[54%] w-[92vw] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[6deg] lg:left-[24%] lg:top-1/2 lg:w-[44vw]" />
        <Blob className="absolute -right-10 -top-8 w-32 rotate-12 lg:-top-16 lg:right-[4%] lg:w-72" />
        <Blob variant={1} fill="#ffffff" className="absolute -bottom-12 -right-12 w-40 -rotate-12 lg:-bottom-20 lg:right-[2%] lg:w-96" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col items-center justify-center gap-10 px-6 py-12 lg:flex-row lg:gap-20 lg:px-12">
        {/* O logo como folha xerocada colada com fita. */}
        <div className="relative w-[74vw] max-w-sm -rotate-3 lg:w-[38vw] lg:max-w-lg">
          <span aria-hidden className="absolute -top-3 left-4 z-10 h-7 w-20 -rotate-6 bg-[#f5a9b8]/80" />
          <span aria-hidden className="absolute -top-3 right-4 z-10 h-7 w-20 rotate-6 bg-[#5bcefa]/80" />
          <div className="border-[3px] border-[#14172b] bg-white p-4 shadow-[10px_10px_0_#14172b]">
            <Image
              src="/logo-frente-trans.png"
              alt="Logo da Frente Trans Londrina: símbolo trans com um punho fechado ao centro"
              width={500}
              height={391}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 lg:items-start">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,26vw,8rem)] font-normal leading-[0.95] [text-shadow:5px_5px_0_#fff] lg:text-[clamp(6.5rem,11vw,12rem)]">
            Em
            <br />
            breve.
          </h1>

          <div className="flex flex-col items-center gap-2 lg:items-start">
            {STRIPS.map((s) => (
              <p
                key={s.text}
                className={`${s.look} ${s.tilt} px-3 py-1.5 font-[family-name:var(--font-body)] text-[13px] font-semibold uppercase tracking-[0.07em] shadow-[4px_4px_0_rgba(20,23,43,0.35)] sm:text-base sm:tracking-[0.12em]`}
              >
                {s.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
