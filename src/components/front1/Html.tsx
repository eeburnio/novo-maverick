import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Html() {
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
      <h3>HTML</h3>
      <p>
        O HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para 
        estruturar e apresentar conteúdos na web. Em sua versão mais atual, o <strong>HTML5</strong>, 
        ele permite a integração nativa de multimídia (como áudio e vídeo), além de fornecer 
        elementos semânticos que melhoram a acessibilidade e o ranqueamento (SEO) de 
        sites e aplicações web. Saiba mais na{' '}
        <a 
          href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          documentação oficial da MDN
        </a>.
      </p>
    </div>
  );
}

export default Html;