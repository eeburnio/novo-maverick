import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Ihc() {
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
      <h3>Interface Humano Computador</h3>

      <h4>Ementa</h4>
      <p>
        Design centrado no usuário. Estilos de interface. Projeto e prototipação de interface e interação para múltiplos dispositivos.
        Definição e métodos para avaliação de usabilidade e acessibilidade.
      </p>
      
      <h4>Duração</h4>
      <p>30h</p>

      <h4>Objetivos de Aprendizagem</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li>Compreender a teoria inicial de Interação Humano-Computador para facilitar a comunicação entre o homem e a máquina.</li>
        <li>Dominar a fundamentação teórica e os diferentes estilos de interface para meios digitais.</li>
        <li>Desenvolver projetos e protótipos de interfaces gráficas e de interação com foco em múltiplos dispositivos.</li>
        <li>Aplicar cuidados e técnicas específicas para adaptar o design a variados formatos de tela.</li>
        <li>Avaliar a usabilidade e a acessibilidade de interfaces por meio do planejamento e da aplicação prática de testes.</li>
      </ul>

      <h4>Conteúdos:</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li>
          <strong>Design Centrado no Usuário e Estilos:</strong> Teoria inicial de Interação Humano-Computador e
          fundamentação dos estilos de interface.
        </li>
        <li>
          <strong>Projeto e Prototipação:</strong> Criação de design de interface utilizando ferramenta digital e
          estudo de cuidados e técnicas para adaptação a múltiplos dispositivos.
        </li>
        <li>
          <strong>Avaliação de Interfaces:</strong> Teoria inicial, conceitos, definições e tipos de testes de usabilidade e acessibilidade.
          Metodologia de preparação e aplicação prática dos testes de interface.
        </li>
      </ul>

      <h4>Ferramentas e Tecnologias</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li><strong>Métodos de Teste e Avaliação</strong>: Técnicas estruturadas para conduzir avaliações e coletar métricas de usabilidade e acessibilidade com usuários.</li>
      </ul>
    </div>
  );
}

export default Ihc;