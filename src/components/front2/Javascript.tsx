import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Javascript() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("p, h4, ul", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>JavaScript</h3>
      <p style={{ lineHeight: '1.6' }}>
        O <strong>JavaScript</strong> (ou simplesmente JS) é a linguagem de programação que roda no navegador do usuário.
        Ela é responsável por tornar as páginas web dinâmicas e interativas, permitindo responder a cliques, validar formulários,
        carregar dados em segundo plano e criar comportamentos dinâmicos sem a necessidade de recarregar a página.
      </p>

      <h4>Características Principais:</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.8' }}>
        <li><strong>Linguagem Dinâmica:</strong> Os tipos de dados são flexíveis e a linguagem roda diretamente no navegador.</li>
        <li><strong>Manipulação do DOM:</strong> Permite alterar dinamicamente o HTML e o CSS de uma página web.</li>
        <li><strong>Assincronismo:</strong> Permite fazer requisições a servidores (APIs) e carregar dados dinamicamente usando a API Fetch.</li>
      </ul>
    </div>
  );
}

export default Javascript;