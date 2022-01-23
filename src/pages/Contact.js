import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Notebook from "../assets/foto-notebook.jpg";

function Contact() {
  return (
    <div>
      <Link to="/">
        <h2 className="btnBack">Atrás.</h2>
      </Link>
      <h1 className="titleContact">¡Diseñemos algo genial!</h1>
      <h2 className="subtitleContact">Contacto</h2>
      <section className="textContact">
        <p>
          Si llegaste hasta acá te agradezco que hayas visitado mi perfil,
          espero que algunos de mis diseños de novato te haya convencido. Si es
          así, y estás buscando un servicio de programación web, te dejo formas
          de comunicarte conmigo.
        </p>
      <img src={Notebook} width="500" className="notebook" alt="Foto de Junior Teixeira en Pexels"/>
        <p>
          Busco oportunidades para <span className="resaltados">colaborar</span>{" "}
          con empresas, agencias o trabajos freelance, y no solo trabajar para
          ellos. Quiero poner mi experiencia de diseño y programación sobre la
          mesa donde podamos trabajar juntos y resolver problemas comerciales
          reales, de manera de optimizar toda nuestra experiencia y
          conocimientos respectivos.
        </p>
        <p>
          No dudes en comunicarte conmigo, estoy para ayudar y despejarte cualquier
          inquietud:
        </p>
      </section>
      <section className="textContact2">
        <p><a href="mailto:exe.universal@gmail.com">exe.universal@gmail.com</a></p>
        <p><a href="https://api.whatsapp.com/send?phone=2612121844&text=Me%20interesa%20contactarme" target="_blank">WhatsApp</a></p>
      </section>
      <div className="footerPortfolio">
      <hr></hr>
      <Footer/>
      </div>
    </div>
  );
}

export default Contact;