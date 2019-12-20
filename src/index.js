import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    const markup = `
                    <nav class="grey darken-4 " role="navigation">
                    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo orange-text accent-2">1A</a>
                    <ul class="right hide-on-med-and-down">
                        <li ><a class="orange-text accent-2" href="#">Whiskey</a></li>
                        <li><a class="orange-text accent-2" href="#">Aguardiente</a></li>
                        <li><a class="orange-text accent-2" href="#">Ron</a></li>
                    </ul>
                    <ul id="nav-mobile" class="sidenav grey darken-4">
                        <br>
                        <li><a class="orange-text accent-2" href="#">Whiskey</a></li>
                        <li><a class="orange-text accent-2" href="#">Aguardiente</a></li>
                        <li><a class="orange-text accent-2" href="#">Ron</a></li>          </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger orange-text accent-2"><i class="material-icons">menu</i></a>
                    </div>
                </nav>
                <div class="section no-pad-bot" id="index-banner">
                    <div class="container ">
                    <br><br>
                    <h1 class="header center orange-text accent-4 text-lighten-3">Servicio a Domicilo de Licores al por Mayor</h1>
                    <div class="row center">
                        <br>
                        <h5 class="header col s12 orange-text accent-4 text-lighten-4">Damos los mejores precios del mercado con su documentación legal en la comodidad de tu negocio .</h5>
                    </div>
                    <div class="row center">
                        <br><br>
                        <a href="https://github.com/AlejoCode"  class="btn-large waves-effect waves-light orange accent-3  orange-text accent-4 text-lighten-4">Comprar</a>
                    </div>

                    </div>
                </div>


                <div class="container">
                    <!-- <div class="section"> -->

                    <!--   Icon Section   -->
                    <div class="row">
                        <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center orange-text accent-3"><i class="material-icons">flash_on</i></h2>
                            <h5 class="center orange-text accent-4 text-lighten-3">Incrementa tus ventas</h5>
                            <br>
                            <p class="center orange-text accent-4 text-lighten-4">Al tener el precio mas competitivo del mercado podemos surtir tu negocio de manera diligente para que puedas sacar el mayor provecho de tu negocio.</p>
                        </div>
                        </div>
                        <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center orange-text accent-3"><i class="material-icons">group</i></h2>
                            <h5 class="center orange-text accent-4 text-lighten-3">Fideliza tus clientes</h5>
                            <br>
                            <p class="center orange-text accent-4 text-lighten-4">Con un servicio al cliente y provedores de alto nivel operamos utilizando la vestimenta corporativa para dar el mayor comfort y bienestar a tus clientes.</p>
                        </div>
                        </div>
                        <div class="col s12 m4">
                        <div class="icon-block">
                            <h2 class="center orange-text accent-3"><i class="material-icons">settings</i></h2>
                            <h5 class="center orange-text accent-4 text-lighten-3">¿ Listo para empezar ?</h5>
                            <br>
                            <p class="center orange-text accent-4 text-lighten-4">Tenemos todos los canales de comunicación para que te contactes con uno de nuestros asesores. Estamos listos para ser tu distribuidor de confianza de licores al por mayor !</p>
                        </div>
                        </div>
                    </div>

                    <!-- </div> -->
                    <br><br>
                </div>

                <footer class="page-footer grey darken-4">
                    <div class="container">
                    <div class="row">
                        <div class="col l6 s12">
                        <h5 class="orange-text accent-2 center">Nuestra Meta</h5>
                        <br>
                        <br>
                        <p class="orange-text accent-2 text-lighten-4">&nbsp;Ayudarte a brindar la mejor experiencia en todos tus eventos, brindandote el mejor precio y atención en el mercado. 
                            <br>
                            <br>
                            &nbsp;Dandote todas las herramientas para que triuenfes en tu negocio.
                        </p>
                        </div>
                        <div class="col l6 s12 center">
                        <h5 class="orange-text accent-2">Contactanos</h5>
                        <ul>
                            <br>
                            <li>
                                <a class="orange-text accent-2" href="https://github.com/AlejoCode">
                                    <img class="my-color" height="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/instagram.svg" />                        
                                </a>
                            </li>
                            <br>
                            <li>
                                <a class="orange-text accent-2" href="https://github.com/AlejoCode">                        
                                    <img class="my-color" height="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/facebook.svg" />                
                                </a>
                            </li>
                            <br>
                            <li>
                                <a class="orange-text accent-2" href="https://github.com/AlejoCode">
                                    <img class="my-color" height="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/whatsapp.svg" />
                                </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div class="footer-copyright center">
                    <div class="container orange-text accent-2">
                        Made by <a class="orange-text accent-2 text-lighten-3" href="https://github.com/AlejoCode">@AlejoCode</a>
                    </div>
                    </div>
                </footer>
    `;
    element.innerHTML = markup;
  
    return element;
  
}
  
  document.body.appendChild(component());