import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Gsap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("h4, p, ul, pre, .demo-area", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.3");

  }, { scope: containerRef });

  const handleAnimate = contextSafe(() => {
    gsap.fromTo(".box", 
      { x: 0, rotation: 0 }, 
      { x: 200, duration: 2, rotation: 360, ease: "power2.inOut" }
    );
  });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', width: '100%' }}>
      <h3>GSAP JS</h3>
      <p>
        GSAP (GreenSock Animation Platform) é uma biblioteca JavaScript
        utilizada para criar animações de alta performance em elementos HTML,
        SVG e Canvas.
      </p>

      <h4>Principais recursos</h4>
      <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <li>Animações suaves e otimizadas.</li>
        <li>Controle avançado de timelines.</li>
        <li>Compatível com React, Vue e outros frameworks.</li>
        <li>Suporte a scroll animations com ScrollTrigger.</li>
        <li>Grande flexibilidade para efeitos visuais.</li>
      </ul>

      <h4>Exemplo básico</h4>
      <pre style={{ maxWidth: '100%', overflowX: 'auto' }}>
        <code>
          {`gsap.to(".box", {
  x: 200,
  duration: 2,
  rotation: 360
});`}
        </code>
      </pre>

      <div className="demo-area" style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #444', borderRadius: '8px', width: '100%', maxWidth: '400px', overflow: 'hidden' }}>
        <button 
          onClick={handleAnimate} 
          style={{ marginBottom: '1.5rem', padding: '0.5rem 1rem', cursor: 'pointer', borderRadius: '4px', border: 'none', backgroundColor: '#0ae448', color: '#000', fontWeight: 'bold' }}
        >
          Testar Animação
        </button>
        <div className="box" style={{ width: '50px', height: '50px', backgroundColor: '#0ae448', borderRadius: '8px' }}></div>
      </div>
    </div>
  );
}

export default Gsap;