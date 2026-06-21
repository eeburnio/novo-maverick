import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Img() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("h3", {
      y: -20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from("img", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.3");

    tl.from("p", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      ease: "power1.out",
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
      <h3>Edição de Imagens</h3>
      <img src="../../public/img/Gimp2.png" style={{ width: '300px', maxWidth: '100%' }} alt="GIMP Interface" />
      <p>
        A edição de imagens é o processo de modificar, otimizar e transformar fotografias e gráficos 
        digitais. No contexto do desenvolvimento web e de interfaces, ela é fundamental para ajustar 
        resoluções, tratar imagens e criar ativos gráficos que compõem o design visual de uma aplicação. 
        Para essa finalidade, utilizamos o <strong>GIMP (GNU Image Manipulation Program)</strong>, um 
        editor de gráficos rasterizados gratuito e de código aberto (<strong>open-source</strong>). Ele é 
        amplamente utilizado para retoque de fotos, composição de imagens e criação de texturas, 
        destacando-se na comunidade acadêmica e profissional como uma das principais e mais robustas 
        alternativas ao Adobe Photoshop. Saiba mais no{' '}
        <a 
          href="https://www.gimp.org/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          site oficial do GIMP
        </a>.
      </p>
    </div>
  );
}

export default Img;