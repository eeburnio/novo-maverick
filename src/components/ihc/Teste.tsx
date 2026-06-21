import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Teste() {
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
      <h3>Teste de Usabilidade</h3>

      <p style={{ lineHeight: '1.6' }}>
        O Teste de Usabilidade é um método empírico de avaliação de interfaces que envolve observar usuários reais interagindo com um produto ou sistema. O objetivo principal é medir e avaliar a facilidade de uso do sistema a partir do comportamento, dos erros e das dificuldades enfrentadas pelos próprios usuários finais durante a realização de tarefas reais.
      </p>

      <h4>Por que realizar Testes de Usabilidade?</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li>Permite ver exatamente onde os usuários encontram dificuldades, dúvidas ou falhas no fluxo planejado.</li>
        <li>Coleta feedback direto e observável de quem realmente utilizará a ferramenta no dia a dia.</li>
        <li>Avalia dados como tempo para conclusão de tarefas, taxa de sucesso, taxa de erros e satisfação subjetiva.</li>
      </ul>

      <h4>Etapas de um Teste de Usabilidade</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li><strong>1. Planejamento:</strong> Definição de objetivos, perfil dos participantes, cenários e formulação de tarefas claras para o teste.</li>
        <li><strong>2. Preparação:</strong> Configuração do ambiente de testes, ferramentas de gravação, roteiros de introdução e termos de consentimento livre e esclarecido.</li>
        <li><strong>3. Execução:</strong> O facilitador guia a sessão orientando o participante a realizar as tarefas e incentiva a técnica de "pensar em voz alta" (think-aloud protocol), registrando o comportamento e os comentários do usuário sem interferir.</li>
        <li><strong>4. Análise e Consolidação:</strong> Compilação dos problemas observados e priorização das melhorias que serão feitas no design da interface.</li>
      </ul>
    </div>
  );
}

export default Teste;