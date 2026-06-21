import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Front2() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("h4, p, ul", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>
        Desenvolvimento <i>Web Front-End</i> 2
      </h3>

      <h4>Ementa</h4>
      <p>
        Desenvolvimento de interfaces de usuário para aplicativos web e móveis. Utilização de frameworks e bibliotecas para otimizar a experiência do usuário.
      </p>
      
      <h4>Duração</h4>
      <p>60h</p>

      <h4>Objetivos de Aprendizagem</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li>Compreender os fundamentos da linguagem JavaScript e sua aplicação no desenvolvimento web.</li>
        <li>Manipular o DOM para criar páginas dinâmicas e interativas.</li>
        <li>Desenvolver interfaces componentizadas utilizando o framework React.</li>
        <li>Criar animações e transições de alta performance com a biblioteca GSAP.</li>
        <li>Aplicar boas práticas de organização de código e padrões de projeto no front-end.</li>
      </ul>

      <h4>Conteúdos:</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li>
          <strong>JavaScript:</strong> Variáveis, tipos de dados, operadores,
          estruturas de controle, funções, arrays, objetos, manipulação do DOM,
          eventos e programação assíncrona.
        </li>
        <li>
          <strong>React:</strong> Componentes funcionais, JSX, props, state,
          hooks (useState, useEffect, useRef), roteamento com React Router,
          gerenciamento de estado e ciclo de vida de componentes.
        </li>
        <li>
          <strong>GSAP:</strong> Tweens, timelines, easing, animações de
          propriedades CSS/SVG, ScrollTrigger e integração com React.
        </li>
      </ul>

      <h4>Ferramentas e Tecnologias</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><strong>JavaScript</strong>: Linguagem base para interatividade no navegador.</li>
        <li><strong>React</strong>: Biblioteca para construção de interfaces componentizadas.</li>
        <li><strong>GSAP</strong>: Plataforma de animações de alta performance.</li>
        <li><strong>Node.js / npm</strong>: Ambiente e gerenciador de pacotes para o ecossistema JavaScript.</li>
      </ul>
    </div>
  );
}

export default Front2;