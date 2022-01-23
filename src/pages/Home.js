import React from "react";
import MiImagen from "../assets/foto-home-phone.png";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div>
      <div className="home">
        <div className="contenido">
    <div class="tabla-contenido">
	<div>
	   <table>
	     
	      <tr>
	         <td><Link to="/About"><p></p></Link></td>
	      </tr>
          <tr>
	         <td><Link to="/Portfolio"><div></div></Link></td>
	      </tr>
          <tr>
	         <td><Link to="/Contact"><span></span></Link></td>
	      </tr>
	   </table>
	</div>
    </div>
        </div>

        <div className="containerFoto">
          <img height="700" className="miFoto" src={MiImagen} alt="Esteban Maldonado dentro de una pantalla celular" />
        </div>
    </div>
    </div>
    );
  }
}