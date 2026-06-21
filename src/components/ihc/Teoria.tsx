import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Teoria() {
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
      <h3>Teoria de IHC</h3>

      <p style={{ lineHeight: '1.6' }}>
        A Interação Humano-Computador (IHC) é uma área de estudo que busca
        compreender como as pessoas interagem com sistemas computacionais,
        visando desenvolver interfaces mais eficientes, acessíveis e fáceis
        de usar.
      </p>

      <h4>Objetivos da IHC</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li>Melhorar a experiência do usuário.</li>
        <li>Facilitar a realização de tarefas.</li>
        <li>Reduzir erros durante a utilização do sistema.</li>
        <li>Aumentar a satisfação e a produtividade dos usuários.</li>
      </ul>

      <h4>Princípios Fundamentais</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li><strong>Usabilidade:</strong> facilidade de aprendizado e uso.</li>
        <li><strong>Acessibilidade:</strong> inclusão de usuários com diferentes necessidades.</li>
        <li><strong>Feedback:</strong> o sistema deve informar o resultado das ações do usuário.</li>
        <li><strong>Consistência:</strong> elementos semelhantes devem funcionar da mesma forma.</li>
      </ul>

      <h4>Importância</h4>
      <p style={{ lineHeight: '1.6' }}>
        A IHC é fundamental para o desenvolvimento de softwares de qualidade,
        pois considera as características, necessidades e limitações dos
        usuários durante o processo de criação das interfaces.
      </p>
    </div>
  );
}

export default Teoria;