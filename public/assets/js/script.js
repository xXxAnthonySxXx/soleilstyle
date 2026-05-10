// Función para controlar el video
const video = document.getElementById("miVideo");
const playBtn = document.getElementById("playBtn");

if (playBtn && video) {
    playBtn.addEventListener("click", function() {
        const icon = this.querySelector('.material-symbols-outlined');

        if (video.paused) {
            video.play();
            this.style.opacity = "0"; // Desaparece al reproducir
            icon.textContent = 'pause';
        } else {
            video.pause();
            this.style.opacity = "1"; // Reaparece al pausar
            icon.textContent = 'play_arrow';
        }
    });
    

    // Reaparecer el botón cuando el video termine
    video.onended = function() {
        playBtn.style.opacity = "1";
        playBtn.querySelector('.material-symbols-outlined').textContent = 'play_arrow';
    };
}
const productos = [

        // BLUSAS (9)
        { id: 1, cat: 'blusas', nombre: 'Jolei Blouse White', precio: '60.00', desc:   "Manga larga elegante de tela suave y fit entallado ", tallas: ['S', 'M', 'L'] },
        { id: 2, cat: 'blusas', nombre: 'Jolei Blouse Black', precio: '60.00', desc:  "Manga larga elegante de tela suave y fit entallado ", tallas: ['S', 'M', 'L'] },
        { id: 3, cat: 'blusas', nombre: 'Jolei Blouse Perla', precio: '60.00', desc:  "Manga larga elegante de tela suave y fit enttallado ", tallas: ['S', 'M', 'L'] },
        { id: 4, cat: 'blusas', nombre: 'Love Top White', precio: '50.00', desc:  "Escote dropeado de estilo casual chic ", tallas: ['S', 'M', 'L'] },
        { id: 5, cat: 'blusas', nombre: 'Love Top Beige', precio: '50.00', desc:  "Escote dropeado de estilo casual chic", tallas: ['S', 'M', 'L'] },
        { id: 6, cat: 'blusas', nombre: 'Love Top Black', precio: '50.00', desc:  "Escote dropeado de estilo casual chic ", tallas: ['S', 'M', 'L'] },
        { id: 7, cat: 'blusas', nombre: 'Fancy Blouse', precio: '55.00', desc:  "Brillo sutil", tallas: ['S', 'M', 'L'] },
        { id: 8, cat: 'blusas', nombre: 'Chain Knit Cardigan', precio: '65.00', desc:  "Suéter ligero Perla", tallas: ['S', 'M', 'L'] },
        { id: 9, cat: 'blusas', nombre: 'Chain Knit Cardigan', precio: '65.00', desc:  "Suéter ligero Black", tallas: ['S', 'M', 'L'] },

        // VESTIDOS (5)
        { id: 10, cat: 'vestidos', nombre: 'Anastasia Dress', precio: '120.00', desc: 'Bubble halter rojo', tallas: ['S', 'M', 'L'] },
        { id: 11, cat: 'vestidos', nombre: 'Ivanne Dress', precio: '105.00', desc: 'Vanguardista formal verde', tallas: ['S', 'M', 'L'] },
        { id: 12, cat: 'vestidos', nombre: 'Ivanna Dress', precio: '130.00', desc: 'vestido corto casual', tallas: ['S', 'M', 'L'] },
        { id: 13, cat: 'vestidos', nombre: 'Maxi Vestido Luna', precio: '110.00', desc: 'Elegancia nocturna', tallas: ['S', 'M', 'L'] },
        { id: 14, cat: 'vestidos', nombre: 'Dream Girl Dress', precio: '115.00', desc: 'strapless bodycon maxi elegante', tallas: ['S', 'M', 'L'] },

        // PANTALONES/FALDAS (7)
        { id: 15, cat: 'pantalones', nombre: 'Loose Pants', precio: '75.00', desc: 'Pantalón de vestir beige', tallas: ['S', 'M', 'L'] },
        { id: 16, cat: 'pantalones', nombre: 'Loose Pants', precio: '75.00', desc: 'Pantalón de vestir negro', tallas: ['S', 'M', 'L'] },
        { id: 17, cat: 'pantalones', nombre: 'Flared Jeans', precio: '80.00', desc: 'Jean Urbano', tallas: ['S', 'M', 'L'] },
        { id: 18, cat: 'pantalones', nombre: 'Wide Leg Jeans', precio: '85.00', desc: 'Jean casual y versátil', tallas: ['S', 'M', 'L'] },
        { id: 19, cat: 'pantalones', nombre: 'Baggy Jeans', precio: '70.00', desc: 'Jean corte ancho casual', tallas: ['S', 'M', 'L'] },
        { id: 20, cat: 'pantalones', nombre: 'Striped Pants', precio: '65.00', desc: 'Pantalón de rayas versátil', tallas: ['S', 'M', 'L'] },
        { id: 21, cat: 'pantalones', nombre: 'Moon Jean', precio: '65.00', desc: 'Pantalón vaquero de tiro alto', tallas: ['S', 'M', 'L'] },

        // ABRIGOS (5)
        { id: 22, cat: 'abrigos', nombre: 'Aviator Jacket', precio: '150.00', desc: 'Black', tallas: ['S', 'M', 'L'] },
        { id: 23, cat: 'abrigos', nombre: 'Aviator Jacket', precio: '150.00', desc: 'Brown', tallas: ['S', 'M', 'L'] },
        { id: 24, cat: 'abrigos', nombre: 'Clasic Coat', precio: '160.00', desc: 'Abrigo de paño elegante', tallas: ['S', 'M', 'L'] },
        { id: 25, cat: 'abrigos', nombre: 'Corduroy Jacket', precio: '150.00', desc: 'Abrigo elegante y versátil', tallas: ['S', 'M', 'L'] },
        { id: 26, cat: 'abrigos', nombre: 'Cardigan Cueless', precio: '135.00', desc: 'Abrigo ligero y acogedor', tallas: ['S', 'M', 'L'] },

        // BELLEZA/MAQUILLAJE (4)
        { id: 27, cat: 'belleza', nombre: 'Paleta de sombras Anastasia Beverly Hills Subculture', precio: '235', desc: 'Subculture es una paleta ideal para quienes desean experimentar.Con 14 tonos intensos en acabados mate y metálicos que te permiten crean look auténticos y modernos' },

        { id: 28, cat: 'belleza', nombre: 'Crema hidratante con color GloWish multidew de Huda Beauty', precio: '225.00', desc: 'Esencial para tu tocador, ilumina el rostro y difumina los poros para un acabado suave y radiante' },

        { id: 29, cat: 'belleza', nombre: 'Lip contour mini duo-yummy brows-dudak kalemlery', precio: '139.00', desc: 'Nuestros Lip Contours mate tienen la fórmula más suave y mantequillosa que se deslizan sobre los labios' },

        { id: 30, cat: 'belleza', nombre: 'Rhode Barrier Restore Cream', precio: '220.00', desc: 'Una crema hidratante ligera pero intensamente nutritiva que ayuda a restaurar la barrera natural de la piel, aportando hidratación duradera y un acabado luminoso' }
    ];

    function cargarProductos() {
        const grid = document.getElementById('grid-productos');

        grid.innerHTML = productos.map(p => `

            <div class="col-6 col-md-4 col-lg-3 producto-item" data-categoria="${p.cat}">
                
                <div class="product-card text-center bg-white rounded-4 shadow-sm p-3 h-100 d-flex flex-column border-0">

                    <div class="img-wrapper mb-3">
                        <img src="assets/img/productos/prod-${p.id}.jpg" alt="${p.nombre}">
                    </div>

                    <h6 class="fw-bold mb-1 text-uppercase small">
                        ${p.nombre}
                    </h6>

                    <p class="text-muted small mb-2 flex-grow-1">
                        ${p.desc}
                    </p>

                    <p class="fw-bold mb-2 text-dark">
                        S/ ${p.precio}
                    </p>

                    ${p.id <= 26 ? `
                        <div class="d-flex justify-content-center gap-2 mb-3">
                            ${p.tallas.map(t => `
                              <button class="btn btn-outline-dark btn-sm talla-btn">
                                    ${t}
                                </button>
                            `).join('')}
                        </div>
                    ` : ''}

                    <a href="https://wa.me/51963713080?text=Hola! Deseo información de: ${p.nombre}" 
                       target="_blank" 
                       class="btn btn-dark w-100 rounded-pill py-2 small">
                        Comprar
                    </a>

                </div>

            </div>

        `).join('');
    }

    function filtrar(cat, btn) {

        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });

        btn.classList.add('active');

        document.querySelectorAll('.producto-item').forEach(el => {

            if (cat === 'todos' || el.getAttribute('data-categoria') === cat) {
                el.style.display = 'block';
            } else {
                el.style.display = 'none';
            }

        });
    }

    window.onload = cargarProductos;
     let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});