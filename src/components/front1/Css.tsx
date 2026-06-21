import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Css() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("p", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>CSS</h3>
      <p>
        O CSS (Cascading Style Sheets) é a linguagem de folhas de estilo usada para 
        descrever a apresentação e o design visual de páginas web estruturadas em HTML. 
        Em sua evolução atual, conhecida como <strong>CSS3</strong>, ele permite criar layouts complexos, 
        animações interativas e designs responsivos que se adaptam perfeitamente a 
        diferentes tamanhos de tela (computadores, tablets e celulares). Saiba mais na{' '}
        <a 
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          documentação oficial da MDN
        </a>.
      </p>
    </div>
  );
}

export default Css;