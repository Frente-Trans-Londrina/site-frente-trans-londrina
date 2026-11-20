import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-zinc-950 px-6 py-16 text-center text-white">
      <Image
        src="/bandeira-trans.png"
        alt="Bandeira trans: faixas azul-claro, rosa e branca"
        width={960}
        height={576}
        priority
        className="w-72 -rotate-3 rounded-2xl shadow-[0_20px_60px_-15px_rgba(91,206,250,0.45)] sm:w-96"
      />

      <div className="flex flex-col items-center gap-4 font-[family-name:var(--font-display)]">
        <p className="text-lg font-medium tracking-wide text-[#5bcefa]">
          Frente Trans Londrina
        </p>
        <h1 className="bg-gradient-to-r from-[#5bcefa] via-[#f5a9b8] to-[#5bcefa] bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-8xl">
          Em breve
        </h1>
        <p className="max-w-md text-xl text-zinc-300">
          Estamos construindo um espaço nosso, com notícias, guias e histórias
          da nossa comunidade.
        </p>
      </div>
    </main>
  );
}
