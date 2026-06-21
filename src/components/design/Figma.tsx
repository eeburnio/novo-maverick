import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Figma() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("img", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.3");

    tl.from("a, h4, p", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', gap: '1rem' }}>
      <h3>Figma</h3>
      <img src="/img/Figma.jpg" alt="Figma Layout" style={{ width: '300px', maxWidth: '100%' }} />
      <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
        Figma
      </a>

      <h4>Figma</h4>
      <p>
        O Figma é uma plataforma colaborativa baseada em nuvem usada para design de interfaces (UI) e experiência do usuário (UX). Ele permite criar protótipos interativos, wireframes e designs gráficos para sites e aplicativos, além de contar com o FigJam para brainstorming e organização.
      </p>
    </div>
  );
}
// Animações: Luis Moura  
// Autor: Everson Mayer (https://github.com/everctba)
// Data: 2026-05-29

export default Figma;