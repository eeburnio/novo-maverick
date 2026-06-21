import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Tailwind() {
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
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>Tailwind CSS</h3>
      <p>
        O <strong>Tailwind CSS</strong> é um framework CSS utilitário (utility-first) que permite
        estilizar elementos diretamente no HTML através de classes pré-definidas
        de baixo nível.
        Diferente do Bootstrap, ele não oferece componentes prontos, mas sim utilitários
        granulares para construir interfaces totalmente personalizadas de forma rápida e flexível.
      </p>
      <p>
        Ele é amplamente utilizado no mercado por startups, empresas de tecnologia e
        desenvolvedores freelancers para criar desde landing pages e portfólios até
        dashboards administrativos, e-commerces e aplicações web complexas. Sua popularidade
        cresceu especialmente em projetos que utilizam frameworks como <strong>React</strong>,{' '}
        <strong>Next.js</strong> e <strong>Vue</strong>, pois se integra facilmente ao fluxo
        de desenvolvimento moderno. O Tailwind é ideal para quem busca agilidade na
        estilização sem abrir mão do controle total sobre o design da interface. Saiba mais no{' '}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          site oficial
        </a>.
      </p>
    </div>
  );
}

export default Tailwind;