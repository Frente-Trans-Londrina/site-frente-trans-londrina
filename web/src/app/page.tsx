import { FlagCanvas } from "@/components/flag-canvas";

export default function Home() {
  return (
    // O degradê em CSS é o fundo de reserva: aparece no primeiro paint e sem WebGL.
    <main className="relative min-h-svh overflow-hidden bg-[linear-gradient(#5bcefa_0_20%,#f5a9b8_20%_40%,#fff_40%_60%,#f5a9b8_60%_80%,#5bcefa_80%_100%)] text-[#14172b]">
      <FlagCanvas className="absolute inset-0 h-full w-full" />

      <div className="relative z-10 flex min-h-svh flex-col justify-between gap-10 p-6 sm:p-12">
        <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.25em] sm:text-base">
          Frente Trans Londrina
        </p>

        <div className="flex flex-col gap-6">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(4.5rem,19vw,16rem)] font-extrabold leading-[0.82] tracking-tighter">
            Em
            <br />
            breve.
          </h1>
          <p className="max-w-xl font-[family-name:var(--font-body)] text-xl font-semibold leading-snug sm:text-2xl">
            Um espaço nosso, com notícias, guias e histórias da comunidade trans
            de Londrina.
          </p>
        </div>
      </div>
    </main>
  );
}
