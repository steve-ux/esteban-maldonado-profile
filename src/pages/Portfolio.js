import LogoLuxury from "../assets/luxuriuslogo.png";
import LogoZipriano from "../assets/DonZLogo.png";
import LogoMyTinerary from "../assets/Mytinerary.svg";
import LogoPetShop from "../assets/logo-petshop.jpg";
import LogoSenate from "../assets/logo-senate.png";
import LogoHockey from "../assets/Logo_Mighty_ducks-01.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Portfolio() {
    return (
      <div>
        <Link to="/"><h2 className="btnBack">Atrás.</h2></Link>
          <h1 className="titleAbout">Mi portafolio</h1>
          <section className="bajadaPortfolio">
            <p className="bajada">Los invito a un recorrido resumido de los proyectos realizados tanto por mí, como en equipos de trabajo. Los proyectos son <span className="resaltados">100% código</span> y de alguien junior, no incluí mis sitios web creados con Wordpress. Para ver el repositorio de cada proyecto, pueden visitar mi perfil de <a href="https://github.com/steve-ux" target="_blank">GitHub.</a></p>
          </section>
         <div className="containerNosotros">
        <div class="container">
          <div class="cardNosotros">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">1</h4>
             <img className="yearCardNosotros" width="100" src={LogoLuxury} alt="Logo Luxury Drinks" />
              </div>
             
              <div class="content">
                <img src={LogoLuxury} alt="Logo Luxury Drinks" />
                <h3>Luxury Drinks</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                  El proyecto final del bootcamp que contó con un trabajo en equipo y todas las herramientas aprendidas. Fue de libre elección y como equipo nos gustó la idea de elegir un distribuidor de bebidas Beefeater. Contó con un carrito de compras, panel de administración y de usuarios.
                </p>
              </div>
            </div>
          </div>
          <div class="cardNosotros">
            <div class="face face1">
            <div className="containerYearCard">
            <h4 className="yearCardNosotros">2</h4>
            <img className="yearCardNosotros" width="70" src={LogoZipriano} alt="Logo Don Zipriano"/>
            </div>
              <div class="content">
                <img src={LogoZipriano} alt="Logo Don Zipriano"/>
                <h3>Don Zipriano</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Fue un proyecto grupal, de temática libre, en el que escogimos un restaurante italiano. Tuvimos que aplicar todos los conocimientos aprendidos al momento, como las funcionalidades de gestión, en el que el usuario puede loguearse, comentar y likear publicaciones y un administrador editar, agregar y borrar contenido de la página.
                </p>
              </div>
            </div>
          </div>
          <div class="cardNosotros">
            <div class="face face1">
            <div className="containerYearCard">
            <h4 className="yearCardNosotros">3</h4>
            <img className="yearCardNosotros" width="70" src={LogoMyTinerary} alt="Logo MyTinerary"/>
            </div>
              <div class="content">
                <img src={LogoMyTinerary} alt="Logo MyTinerary"/>
                <h3>My Tinerary</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Fue un proyecto individual, de una agencia de viajes, en el que tuvimos que aplicar lo que se iba aprendiendo consecutivamente cada semana, como las funcionalidades de una red social, en el que el usuario puede loguearse, comentar y likear publicaciones. Implementamos Mongo DB por primera vez.
                </p>
              </div>
            </div>
          </div>
          <div class="cardNosotros">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">4</h4>
             <img className="yearCardNosotros" width="70" src={LogoPetShop} alt="Logo Petshop"/>
              </div>
             
              <div class="content">
                <img src={LogoPetShop} alt="Logo Petshop"/>
                <h3>Pet Shop Franco</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Fue el primer proyecto grupal con la temática de una tienda de mascotas, primera vez trabajando como equipo y en github. El sitio fue creado con HTML y JavaScript. 
                </p>
              </div>
            </div>
          </div>
          <div class="cardNosotros">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">5</h4>
             <img className="yearCardNosotros" width="80" src={LogoSenate} alt="Logo senate"/>
              </div>
             
              <div class="content">
                <img src={LogoSenate} alt="Logo senate"/>
                <h3>Web del Senado</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Proyecto individual donde se trabajó por primera vez con una API de datos, externa, y se aplicó un filtro a un sitio web. 
                </p>
              </div>
            </div>
          </div>
          <div class="cardNosotros">
            <div class="face face1">
              <div className="containerYearCard">
              <h4 className="yearCardNosotros">6</h4>
             <img className="yearCardNosotros" width="80" src={LogoHockey} alt="Logo Hockey"/>
              </div>
             
              <div class="content">
                <img src={LogoHockey} alt="Logo Hockey"/>
                <h3>Mighty Ducks</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <p>
                Primer el proyecto del bootcamp, simulando que nuestro cliente era un equipo de Hockey de Chicago. Aplicamos las herramientas de HTML y CSS, todavía no se tocaba JS. La web se realizó desde cero y con cero conocimientos previos y fue vital para el ingreso al bootcamp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="footerPortfolio">
      <hr></hr>
      <Footer/>
      </div>
      
      </div>
    
    );
  }
  
  export default Portfolio;