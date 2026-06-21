import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Design() {
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

    tl.from("h4, p", {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: "power1.out",
    }, "-=0.4");

  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <h3>Design Gráfico</h3>
      <br />
      <img src="/img/Gimp.png" style={{ width: '450px', maxWidth: '100%' }} alt="Interface do GIMP" />
      
      <h4>Ementa</h4>
      <p>
        Princípios da comunicação visual aplicados ao meio digital. Tipografia. Cor. 
        Imagem digital: dimensão, resolução e formatos. Construção de imagens e composições. 
        Uso de software para design gráfico e edição de imagens digitais.
      </p>
      
      <h4>Duração</h4>
      <p>30h</p>
    </div>
  );
}

export default Design;