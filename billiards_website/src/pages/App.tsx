//import { useState } from 'react'
import '../styles/App.css'
import Navigationbar from "./components/Navbar"
function App() {

  return (
    <> 
    <Navigationbar/>   
    
        <div className="background-image"> </div>
   

    <div className="introduction-container">
        <div className="introduction-content">
            <h1> Saludos a todos! </h1>
            <p> Bienvenidos a la pagina oficial de Billares Sol y Luna! Un establecimiento de juego y bebida para
                disfrutar con toda la
                familia! </p>
            <a href="#promociones"> <button className="nav-buttons"> Descubrir mas! ↓ </button> </a>
        </div>
        <div className="billiards-picture">
            

            <img src="assets/billiards-inside-1.jpeg" alt="Picture of the inside of the billiards" />
        </div>
    </div>


    <div className="section">
        <div className="row">
            <div className="col"> 
              <div className="section-description">
                <div className="section-title" id="promociones">
                    Promociones!
                </div>
                <p> En billares sol y luna, tenemos promociones para las bebidas mas frias que les gustan!</p>
              </div>
                
            </div>
            <div className="col">

            </div>
        </div>
        
    </div>
    <div className="section">
        <div className="section-title">
            Nuestra Seleccion
        </div>
    </div>
    <div className="section">
        <div className="row">
            <div className="col-sm">
                <div className="section-title">
                    Todos los canales!
                </div>
                <p> Disfrute de todos los canales incluyendo GolTV, </p>
            </div>
        </div>
        
    </div>

    <div className="section">
        <div className="section-title">
            Estas cumpliendo anos?
        </div>
    </div>

    <footer>
        <div className="footer">


            <div className="footer-sections">

                <div className="contacts-sections">
                    <div className="footer-title">
                        <h1 id="contacts-anchor"> Contactos </h1>
                    </div>

                    <div className="contact-info">
                        <img src="assets/gmail_icon.svg" className="contact-logo" alt="gmail logo" /> : <div
                            className="contact">
                            <p> (gmail goes here.) </p>
                        </div>
                    </div>
                    <div className="contact-info">
                        <img src="assets/phone_icon.svg" className="contact-logo" alt="phone logo" /> : <div
                            className="contact">
                            <p> (phone number goes here.) </p>
                        </div>

                    </div>
                    <div className="contact-info">
                        <img src="assets/Instagram_logo_2016.svg" className="contact-logo" alt="instagram logo" /> : <div
                            className="contact">
                            <p> billaressolyluna </p>
                        </div>
                    </div>
                </div>
                <div className="directions-section">
                    <div className="footer-title">
                        <h1 id="directions-anchor"> Direcciones </h1>
                    </div>
                    <div className="directions">
                        <p> 102-02 43rd ave, Corona NY</p> <img src="Assets/billiards-directions.png"
                            alt="directions to billiards" />
                    </div>
                </div>
                <div className="hours-section">
                    <h1> Horas </h1>
                    <table className="table table-dark table-bordered">
                        <th scope="row">
                            <tr className="schedule-headers">
                                <td scope="col"> <h2> Dia </h2></td>
                                <td scope="col"> <h2> Horas</h2>  </td>
                            </tr>
                        </th>
                        <tbody id="hourly-schedule">
                            
                        </tbody>
                    </table>
                </div>



            </div>

            <p > Billiards Sol y Luna 2024</p>
        </div>
    </footer>
    </>
  )
}

export default App
