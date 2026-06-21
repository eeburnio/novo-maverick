import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ReactComponent() {
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
      <h3>React JS</h3>
      
      <p style={{ lineHeight: '1.6' }}>
        O <strong>React</strong> é uma biblioteca JavaScript de código aberto, mantida pela Meta (antiga Facebook), 
        utilizada para construir interfaces de usuário (UIs) interativas e de alta performance. 
        A sua principal filosofia é a construção de aplicações baseadas em <strong>componentes</strong> — 
        pedaços isolados e reutilizáveis de código que gerenciam seu próprio estado e apresentação.
      </p>

      <h4>Por que o React revolucionou o desenvolvimento web?</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: '1.6' }}>
        <li>
          <strong>Virtual DOM:</strong> Em vez de atualizar a página inteira a cada mudança, o React cria uma cópia virtual 
          da interface na memória. Ele calcula a diferença entre a versão antiga e a nova e atualiza na tela <em>apenas</em> 
          o que foi alterado, garantindo uma performance excepcional.
        </li>
        <li>
          <strong>JSX:</strong> Uma extensão de sintaxe do JavaScript que permite escrever estruturas muito parecidas com HTML 
          diretamente dentro do código JS. Isso unifica a lógica e a apresentação, tornando o desenvolvimento mais intuitivo.
        </li>
        <li>
          <strong>Hooks:</strong> Funções especiais (como <code>useState</code> e <code>useEffect</code>) que permitem que 
          componentes funcionais guardem informações (estado) e executem lógicas em momentos específicos da vida do componente, 
          deixando o código muito mais limpo.
        </li>
        <li>
          <strong>Ecossistema Gigante:</strong> O React é altamente flexível. Ele se integra facilmente a ferramentas de 
          roteamento (React Router), gerenciadores de estado (Zustand, Redux) e a frameworks robustos de mercado (como o Next.js).
        </li>
      </ul>

      <p style={{ lineHeight: '1.6' }}>
        Dominar o React é hoje uma das habilidades mais valorizadas no mercado de desenvolvimento front-end. Saiba mais na{' '}
        <a 
          href="https://react.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          documentação oficial
        </a>.
      </p>
    </div>
  );
}

export default ReactComponent;