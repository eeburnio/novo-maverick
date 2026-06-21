import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Bootstrap() {
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
      <h3>Bootstrap</h3>
      <p>
        O Bootstrap é um dos frameworks front-end mais populares do mundo, utilizado 
        para o desenvolvimento rápido de interfaces web responsivas e focadas em 
        dispositivos móveis (mobile-first). Em sua versão mais recente, o <strong>Bootstrap 5</strong>, 
        ele oferece um poderoso sistema de grid e uma vasta biblioteca de componentes 
        pré-estilizados prontas para uso (como botões, barras de navegação e modais), 
        agora utilizando JavaScript puro sem a dependência do jQuery. Saiba mais no{' '}
        <a 
          href="https://getbootstrap.com/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          site oficial
        </a>.
      </p>
    </div>
  );
}

export default Bootstrap;