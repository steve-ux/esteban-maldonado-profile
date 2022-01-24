import { Link } from "react-router-dom";
import FotoAbout from "../assets/Seccion About.png";
import Footer from "../components/Footer";

function About() {
    return (
      <div className="containerAbout">
          <Link to="/"><h2 className="btnBack">Atrás.</h2></Link>
          <h1 className="titleAbout">Diseño y construyo páginas web</h1>
          
          <section className="containerTextAbout">
          <h2 className="subtitleAbout">Sobre Mi</h2>
          <h4 className="bajada">Hola, soy Esteban Maldonado, argentino amante de la tecnología, las criptomonedas y de las personas autodidactas y emprendedoras. Recientemente obtuve el título oficial de programador y eso me pone muy contento. En este espacio te contaré una breve síntesis de mi historia.</h4>
          </section>
          <div className="containerTextAbout2Padre">
          <section className="containerTextAbout2">
              <p>Tengo 28 años de edad y soy de Mendoza, una provincia vitivinícola al oeste de Argentina. Ser programador no fue una elección del principio, soy un ex estudiante de la carrera de Comunicación Social que a mitad de carrera se dio cuenta que no era su pasión. Era el diseño. <span className="resaltados">Mentalizar, diseñar y crear</span> es algo que no dejaría de hacer.</p>
          </section>
          </div>
          <div className="containerTextAbout3Padre">
          <section className="containerTextAbout3">
              <img width="600" src={FotoAbout} className="fotoAbout" alt="Esteban Maldonado ciudad de Mendoza"/>
              <p>A los 25 empecé una agencia de publicidad junto a un amigo de la universidad, sabíamos de diseño y marketing pero faltaba algo más, programación. En sus comienzos usábamos Wordpress, una excelente herramienta pero limitada para las mentes creativas y debía dar un salto.</p>
              
          </section>
          </div>
              <div className="containerTextAbout4Padre">
          <section className="containerTextAbout4">
          <p>
              Hasta entonces todo lo aprendido había sido por mi curiosidad de saber más, a través de Youtube o plataformas de cursos, por ello me caracterizo autodidacta. En el contexto de pandemia y sin trabajo, tenía más tiempo de aprender. Ahí decidí estudiar programación y la manera más rápida de aprender era a través de los bootcamps. Entonces me crucé con MindHub, donde tenían esta modalidad y solo duraba 4 meses.
              </p>
              <p>Con la metodología <span className="resaltados">"learn by doing"</span> (Aprende haciendo) y más de 600 horas de trabajo, di un salto enorme. Pasé de saber cero programación a crear webs completas con <span className="resaltados">JavaScript y React</span> como la que están leyendo. El ambiente del curso, como si fuera el mundo laboral real, me dió la preparación suficiente para arrancar en el mundo IT.</p>
              <p>Hoy puedo decir que soy <span className="resaltados">Full Stack MERN</span> (Mongo DB, Express, React, Node js) gracias al esfuerzo propio y el de amigos, que fui haciendo en el curso, y que sin su ayuda hubiera abandonado a la primera dificultad. Comienza una nueva etapa y estoy más que preparado para afrontarla.</p>
          </section>
          </div>
          <div className="footerPortfolio">
          <hr></hr>
          <Footer />
          </div>
          
      </div>
    
    );
  }
  
  export default About;