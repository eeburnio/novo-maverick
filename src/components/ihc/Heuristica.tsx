import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Heuristica() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("h4, p, ul, ol", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>Avaliação Heurística</h3>

      <p style={{ lineHeight: '1.6' }}>
        A Avaliação Heurística é um método de inspeção de usabilidade que ajuda a identificar problemas de usabilidade na interface do usuário. Ela é realizada por avaliadores especialistas que analisam a interface e julgam sua conformidade com princípios de usabilidade reconhecidos (as chamadas "heurísticas").
      </p>

      <h4>Por que realizar a Avaliação Heurística?</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li>Pode ser realizada logo no início do projeto, inclusive com esboços ou protótipos de baixa fidelidade.</li>
        <li>Ajuda a garantir que a interface siga padrões consolidados de design e comportamento esperado do usuário.</li>
        <li>Permite corrigir problemas de usabilidade graves antes de conduzir testes mais caros com usuários reais.</li>
      </ul>

      <h4>As 10 Heurísticas de Usabilidade de Jakob Nielsen</h4>
      <p style={{ lineHeight: '1.6' }}>
        Desenvolvidas por Jakob Nielsen e Rolf Molich, essas 10 diretrizes gerais de design de interface de usuário são amplamente utilizadas para avaliar a qualidade de sistemas interativos:
      </p>

      <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', lineHeight: '1.6', listStyleType: 'decimal' }}>
        <li>
          <strong>Visibilidade do status do sistema:</strong> O sistema deve sempre manter os usuários informados sobre o que está acontecendo por meio de feedback apropriado no tempo certo.
        </li>
        <li>
          <strong>Compatibilidade entre o sistema e o mundo real:</strong> O sistema deve falar a linguagem do usuário, usando palavras, frases e conceitos familiares ao usuário, em vez de jargões técnicos do sistema.
        </li>
        <li>
          <strong>Controle e liberdade do usuário:</strong> Os usuários frequentemente realizam ações por engano. O sistema deve oferecer uma "saída de emergência" clara para retornar ao estado anterior sem complicações (como desfazer e refazer).
        </li>
        <li>
          <strong>Consistência e padrões:</strong> O usuário não deve ter dúvidas se diferentes termos, situações ou ações significam a mesma coisa. O design deve seguir as convenções da plataforma e do próprio sistema.
        </li>
        <li>
          <strong>Prevenção de erros:</strong> Melhor do que projetar ótimas mensagens de erro é evitar que os erros ocorram. Remova opções propensas a erro ou exiba uma confirmação antes de executar ações críticas.
        </li>
        <li>
          <strong>Reconhecimento em vez de memorização:</strong> Reduza a carga cognitiva do usuário tornando objetos, ações e opções visíveis. O usuário não deve precisar lembrar de informações de uma tela para outra.
        </li>
        <li>
          <strong>Flexibilidade e eficiência de uso:</strong> O sistema deve acomodar tanto usuários inexperientes quanto experientes. Atalhos de teclado ou aceleradores (invisíveis aos novatos) tornam a interação de usuários avançados muito mais rápida.
        </li>
        <li>
          <strong>Design estético e minimalista:</strong> Interfaces não devem conter informações irrelevantes ou raramente necessárias. Informação extra concorre com a informação essencial, reduzindo sua visibilidade.
        </li>
        <li>
          <strong>Suporte para diagnóstico e recuperação de erros:</strong> Mensagens de erro devem ser expressas em linguagem clara (sem códigos obscuros), apontar precisamente o problema e sugerir uma solução construtiva.
        </li>
        <li>
          <strong>Ajuda e documentação:</strong> Embora seja melhor que o sistema funcione sem manuais, pode ser necessário fornecer ajuda. Ela deve ser fácil de buscar, focada nas tarefas do usuário e detalhar passos objetivos.
        </li>
      </ol>
    </div>
  );
}

export default Heuristica;