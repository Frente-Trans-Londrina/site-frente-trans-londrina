// Formas de papel recortado do anúncio. Provisórias: o time de design ainda
// está desenhando as formas orgânicas oficiais, então tudo fica neste arquivo.

const INK = "#14172b";

type ShapeProps = { className?: string; fill?: string };

// Cada forma tem contorno de tinta e sombra dura (drop-shadow sem desfoque),
// o mesmo vocabulário da folha do logo.
const paper = {
  filter: `drop-shadow(8px 8px 0 ${INK})`,
} as const;

const outline = {
  stroke: INK,
  strokeWidth: 3,
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke",
} as const;

// Contorno do município de Londrina (IBGE, malha municipal 4113700).
const LONDRINA =
  "M-512197,-235874l162,-20l58,-80l-47,-115l-120,-4l16,-228l45,-127l-71,-246l-49,-124l41,-122l-102,-151l-86,26l-72,-164l1,-131l271,-191l194,-105l139,19l87,-142l57,-12l167,155l47,-28l71,60l99,33l-8,119l340,39l-16,48l-229,161l-161,-3l-52,80l252,96l134,-91l65,-5l186,-110l105,17l111,-46l107,15l67,-47l-7,-118l85,-25l85,-91l40,33l154,-86l112,87l256,-42l10,127l76,-47l254,-38l65,47l233,-63l84,77l-113,159l-78,12l-22,122l172,144l69,-11l150,66l-25,133l-72,58l-238,6l-105,102l-18,263l-81,117l-32,188l-124,17l-48,205l106,-20l45,31l51,192l-113,190l-112,58l45,208l27,125l-6,145l150,78l34,41l16,174l26,65l-55,93h-53l-122,-107l-180,-26l-13,95l97,112l28,240l-51,47l-122,-79l-77,7l-109,103l-63,135l40,69l-21,95l-109,100l-57,128l91,59l142,-93l58,83l3,82l-84,-39l-220,81l-176,-4l-175,-72l-141,103l-117,-17l-101,83l0,48l-109,296l-17,15l-29,250l-106,284l-156,15l-89,-19l6,166l-387,32l6,242l1,247l-358,1l-23,-89l11,-112l142,-181l-32,-72l108,-236l-73,-26l-161,35l-132,-38l-218,-165l-34,-81l201,-271l161,-120l-189,-184l12,-52l-71,-87l-78,-168l-20,-169l-143,-8l-39,-45l11,-115l-45,-66l-135,78l-84,-18l-18,61l-191,8l-93,-321l30,-143l-46,-32l38,-269l58,-14l23,-100l79,-763l40,-3l75,-159l52,54l60,-55l266,48l75,-55l81,102l136,-40l31,-114l55,-42l-55,-133Z";

export function LondrinaCutout({ className, fill = "#f5a9b8" }: ShapeProps) {
  return (
    <svg
      viewBox="-513211 -237791 4448 6077"
      className={className}
      style={paper}
      aria-hidden
    >
      <path d={LONDRINA} fill={fill} {...outline} />
    </svg>
  );
}

// Manchas orgânicas, como papel rasgado à mão.
const BLOBS = [
  "M104 10C158 8 196 52 186 104C178 152 134 196 84 184C34 172 6 128 16 80C26 36 62 12 104 10Z",
  "M60 14C110 -2 176 22 190 76C202 122 160 150 150 184C140 200 70 200 40 160C12 124 -4 60 60 14Z",
] as const;

export function Blob({
  className,
  fill = "#5bcefa",
  variant = 0,
}: ShapeProps & { variant?: 0 | 1 }) {
  return (
    <svg viewBox="-6 -6 212 212" className={className} style={paper} aria-hidden>
      <path d={BLOBS[variant]} fill={fill} {...outline} />
    </svg>
  );
}
