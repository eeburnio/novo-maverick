import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Pencil() {
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
      <h3>Pencil</h3>

      <img src="/img/Pencil.png" alt="Pencil Layout" style={{ width: '300px', maxWidth: '100%' }} />
      <a href="http://pencil.dev" target="_blank" rel="noopener noreferrer">pencil.dev</a>

      <h4>Sobre o Pencil</h4>
      <p>
        O Pencil Project é uma ferramenta de prototipagem de interface gráfica (GUI) de código aberto e gratuita. Ele foi desenvolvido para criar rapidamente wireframes, mockups e protótipos interativos para páginas web e aplicativos desktop ou mobile, contando com uma vasta coleção de stencils e formas integradas.
      </p>
    </div>
  );
}

export default Pencil;