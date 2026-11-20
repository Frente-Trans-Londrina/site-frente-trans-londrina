"use client";

import { useEffect, useRef } from "react";

const VERT = `#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`;

// Bandeira trans ondulando como tecido: duas ondas somadas deslocam as faixas,
// e a derivada do deslocamento escurece/clareia as dobras.
const FRAG = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uT;
out vec4 o;

float hash(vec2 s) { return fract(sin(dot(s, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float x = uv.x * (uRes.x / uRes.y);

  float a = x * 2.2 + uT * 0.9;
  float b = x * 5.0 - uT * 1.3 + uv.y * 2.0;
  float y = uv.y + 0.045 * sin(a) + 0.018 * sin(b);
  float slope = 0.045 * 2.2 * cos(a) + 0.018 * 5.0 * cos(b);
  float shade = clamp(1.0 - 1.1 * slope, 0.78, 1.12);

  vec3 blue = vec3(0.357, 0.808, 0.980);
  vec3 pink = vec3(0.961, 0.663, 0.722);
  vec3 white = vec3(1.0);

  float f = y * 5.0;
  vec3 c = blue;
  c = mix(c, pink, smoothstep(0.985, 1.015, f));
  c = mix(c, white, smoothstep(1.985, 2.015, f));
  c = mix(c, pink, smoothstep(2.985, 3.015, f));
  c = mix(c, blue, smoothstep(3.985, 4.015, f));

  c *= shade;
  c += (hash(gl_FragCoord.xy + uT) - 0.5) * 0.025;
  o = vec4(c, 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return s;
}

export function FlagCanvas({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const gl = canvas?.getContext("webgl2");
    if (!canvas || !gl) return; // sem WebGL: fica o fundo em CSS da página

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    // um triângulo que cobre a tela inteira
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "uRes");
    const uT = gl.getUniformLocation(prog, "uT");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;

    const draw = (t: number) => {
      gl.uniform1f(uT, t);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // poupa o celular
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      if (reduce.matches) draw(2.0);
    };

    const loop = (now: number) => {
      draw(now / 1000);
      raf = requestAnimationFrame(loop);
    };

    const sync = () => {
      cancelAnimationFrame(raf);
      if (reduce.matches) draw(2.0);
      else raf = requestAnimationFrame(loop);
    };

    resize();
    sync();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    reduce.addEventListener("change", sync);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      reduce.removeEventListener("change", sync);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
