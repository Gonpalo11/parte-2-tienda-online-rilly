
const contenedor = document.querySelector("#pagina");

fetch("/productos")
    .then(respuesta => respuesta.json())
    .then(datos => {

        datos.forEach(producto => {
            contenedor.innerHTML += `
            <div class="openingsales">
        <div class="texto">
            <h1>Opening Sales!</h1>
            <p>Our best offers for our grand opening!</p>
        </div>
        <div class="image-container">
            <div class="img-card">
                <a href="compu1inicio.html"><img src="Multimedia/WhatsApp Image 2026-08-20 at 8.47.19 PM.jpeg" alt="VISION Gamer Pro"></a>
            </div>
            <div class="img-card">
                <a href="compu2inicio.html"><img src="Multimedia/WhatsApp Image 2026-08-20 at 8.48.54 PM.jpeg" alt="VISION Ultra Slim"></a>
            </div>
            <div class="img-card">
                <a href="compu3inicio.html"><img src="Multimedia/WhatsApp Image 2026-08-20 at 8.48.09 PM.jpeg" alt="VISION Classic Dark"></a>
            </div>
        </div>
        <div class="BSeeMore">
            <a href="#carrusel-section" class="SeeMore">See More</a>
        </div>
    </div>



    <section class="computers-section">
        <h1>Gaming Laptops</h1>
        
        <div class="product-grid">
            <div class="img-card">
                <a href="compu1inicio.html">
                    <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.47.19 PM.jpeg" alt="VISION Gamer Pro">
                </a>
            </div>
            <div class="img-card">
                <a href="compu2inicio.html">
                    <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.48.54 PM.jpeg" alt="VISION Ultra Slim">
                </a>
            </div>
            <div class="img-card">
                <a href="compu3inicio.html">
                    <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.48.09 PM.jpeg" alt="VISION Classic Dark">
                </a>
            </div>
        </div>
    </section>

    <section id="carrusel-section" class="carrusel-wrapper">
        <h2 class="carrusel-title">Opening Sales!</h2>

        <div class="carousel-container">
            <button class="btn btn-prev" id="prevBtn">&#10094;</button>

            <div class="carousel-track-container">
                <div class="carousel-track" id="track">
                    
                    <div class="card">
                        <span class="card-info" style="color: #00ff66; font-weight: bold;">OFFER: $1,274.99</span>
                        <a href="compu1carrusel.html" class="card-link">
                            <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.47.19 PM.jpeg" alt="VISION Gamer Pro" class="card-img">
                        </a>
                        <h3 class="card-title">VISION Gamer Pro</h3>
                    </div>

                    <div class="card">
                        <span class="card-info" style="color: #00ff66; font-weight: bold;">OFFER: $1,019.99</span>
                        <a href="compu2carrusel.html" class="card-link">
                            <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.48.54 PM.jpeg" alt="VISION Ultra Slim" class="card-img">
                        </a>
                        <h3 class="card-title">VISION Ultra Slim</h3>
                    </div>

                    <div class="card">
                        <span class="card-info" style="color: #00ff66; font-weight: bold;">OFFER: $764.99</span>
                        <a href="compu3carrusel.html" class="card-link">
                            <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.48.09 PM.jpeg" alt="VISION Classic Dark" class="card-img">
                        </a>
                        <h3 class="card-title">VISION Classic Dark</h3>
                    </div>

                    <div class="card">
                        <span class="card-info" style="color: #00ff66; font-weight: bold;">OFFER: $679.99</span>
                        <a href="compu4carrusel.html" class="card-link">
                            <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.49.18 PM.jpeg" alt="VISION Steel Gray" class="card-img">
                        </a>
                        <h3 class="card-title">VISION Steel Gray</h3>
                    </div>

                    <div class="card">
                        <span class="card-info" style="color: #00ff66; font-weight: bold;">OFFER: $467.49</span>
                        <a href="compu5carrusel.html" class="card-link">
                            <img src="Multimedia/WhatsApp Image 2026-08-20 at 8.50.12 PM.jpeg" alt="VISION Basic Slate" class="card-img">
                        </a>
                        <h3 class="card-title">VISION Basic Slate</h3>
                    </div>

                </div>
            </div>

            <button class="btn btn-next" id="nextBtn">&#10095;</button>
        </div>
    </section>



    </section>


    <footer class="site-footer">
        <div class="footer-features">
            <div class="feature-card">
                <div class="icon-wrapper">
                    <img src="https://cdn-icons-png.flaticon.com/512/893/893081.png" alt="Payment Methods Icon" class="feature-icon">
                </div>
                <h3 class="feature-title">Flexible Payment Options</h3>
                <p class="feature-text">Pay easily with credit card, debit card, wire transfer, or up to 12 interest-free installments.</p>
                <span class="feature-link">Visa, Mastercard & PayPal accepted</span>
            </div>

            <div class="feature-divider"></div>

            <div class="feature-card">
                <div class="icon-wrapper">
                    <img src="https://cdn-icons-png.flaticon.com/512/679/679821.png" alt="Shipping Icon" class="feature-icon">
                </div>
                <h3 class="feature-title">Fast & Free Shipping</h3>
                <p class="feature-text">Get free national delivery on your first PC purchase. Fully tracked and insured directly to your door.</p>
                <span class="feature-link">Easy 3-step checkout process</span>
            </div>

            <div class="feature-divider"></div>

            <div class="feature-card">
                <div class="icon-wrapper">
                    <img src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png" alt="Warranty Icon" class="feature-icon">
                </div>
                <h3 class="feature-title">Full Vision Guarantee</h3>
                <p class="feature-text">3-year limited hardware warranty on all setups plus a 30-day money-back refund policy.</p>
                <span class="feature-link">Protected purchase end-to-end</span>
            </div>

            <div class="feature-divider"></div>

            <div class="feature-card">
                <div class="icon-wrapper">
                    <img src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png" alt="Support Icon" class="feature-icon">
                </div>
                <h3 class="feature-title">24/7 Expert Support</h3>
                <p class="feature-text">Have questions before buying? Contact our tech team via email or call us anytime.</p>
                <span class="feature-link">support@visionpcs.com</span>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2026 Vision Computers Inc. All rights reserved.</p>
        </div>
    </footer>
            `;
        });

    });