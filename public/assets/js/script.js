/* ========================================
   VIDEO HERO
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("miVideo");
    const playBtn = document.getElementById("playBtn");

    if (playBtn && video) {

        playBtn.addEventListener("click", function () {

            const icon =
                this.querySelector(".material-symbols-outlined");

            if (video.paused) {

                video.play();

                this.style.opacity = "0";

                icon.textContent = "pause";

            } else {

                video.pause();

                this.style.opacity = "1";

                icon.textContent = "play_arrow";

            }

        });

        video.addEventListener("ended", () => {

            playBtn.style.opacity = "1";

            playBtn.querySelector(
                ".material-symbols-outlined"
            ).textContent = "play_arrow";

        });

    }

});


/* ========================================
   PRODUCTOS
======================================== */

const productos = [

    /* ========================================
       BLUSAS
    ======================================== */

    {
        id: 1,
        cat: "blusas",
        nombre: "Jolei Blouse White",
        precio: "60.00",
        desc: "Manga larga elegante de tela suave y fit entallado",
        tallas: ["S", "M", "L"]
    },

    {
        id: 2,
        cat: "blusas",
        nombre: "Jolei Blouse Black",
        precio: "60.00",
        desc: "Manga larga elegante de tela suave y fit entallado",
        tallas: ["S", "M", "L"]
    },

    {
        id: 3,
        cat: "blusas",
        nombre: "Jolei Blouse Perla",
        precio: "60.00",
        desc: "Manga larga elegante de tela suave y fit entallado",
        tallas: ["S", "M", "L"]
    },

    {
        id: 4,
        cat: "blusas",
        nombre: "Love Top White",
        precio: "50.00",
        desc: "Escote drapeado de estilo casual chic",
        tallas: ["S", "M", "L"]
    },

    {
        id: 5,
        cat: "blusas",
        nombre: "Love Top Beige",
        precio: "50.00",
        desc: "Escote drapeado de estilo casual chic",
        tallas: ["S", "M", "L"]
    },

    {
        id: 6,
        cat: "blusas",
        nombre: "Love Top Black",
        precio: "50.00",
        desc: "Escote drapeado de estilo casual chic",
        tallas: ["S", "M", "L"]
    },

    {
        id: 7,
        cat: "blusas",
        nombre: "Fancy Blouse",
        precio: "55.00",
        desc: "Blusa elegante con brillo sutil",
        tallas: ["S", "M", "L"]
    },

    {
        id: 8,
        cat: "blusas",
        nombre: "Chain Knit Cardigan Perla",
        precio: "65.00",
        desc: "Suéter ligero color perla",
        tallas: ["S", "M", "L"]
    },

    {
        id: 9,
        cat: "blusas",
        nombre: "Chain Knit Cardigan Black",
        precio: "65.00",
        desc: "Suéter ligero color negro",
        tallas: ["S", "M", "L"]
    },


    /* ========================================
       VESTIDOS
    ======================================== */

    {
        id: 10,
        cat: "vestidos",
        nombre: "Anastasia Dress",
        precio: "120.00",
        desc: "Vestido bubble halter rojo",
        tallas: ["S", "M", "L"]
    },

    {
        id: 11,
        cat: "vestidos",
        nombre: "Ivanne Dress",
        precio: "105.00",
        desc: "Vestido formal vanguardista verde",
        tallas: ["S", "M", "L"]
    },

    {
        id: 12,
        cat: "vestidos",
        nombre: "Ivanna Dress",
        precio: "130.00",
        desc: "Vestido corto casual",
        tallas: ["S", "M", "L"]
    },

    {
        id: 13,
        cat: "vestidos",
        nombre: "Maxi Vestido Luna",
        precio: "110.00",
        desc: "Vestido elegante para la noche",
        tallas: ["S", "M", "L"]
    },

    {
        id: 14,
        cat: "vestidos",
        nombre: "Dream Girl Dress",
        precio: "115.00",
        desc: "Vestido strapless bodycon maxi elegante",
        tallas: ["S", "M", "L"]
    },


    /* ========================================
       PANTALONES
    ======================================== */

    {
        id: 15,
        cat: "pantalones",
        nombre: "Loose Pants Beige",
        precio: "75.00",
        desc: "Pantalón de vestir beige",
        tallas: ["S", "M", "L"]
    },

    {
        id: 16,
        cat: "pantalones",
        nombre: "Loose Pants Black",
        precio: "75.00",
        desc: "Pantalón de vestir negro",
        tallas: ["S", "M", "L"]
    },

    {
        id: 17,
        cat: "pantalones",
        nombre: "Flared Jeans",
        precio: "80.00",
        desc: "Jean urbano estilo flare",
        tallas: ["S", "M", "L"]
    },

    {
        id: 18,
        cat: "pantalones",
        nombre: "Wide Leg Jeans",
        precio: "85.00",
        desc: "Jean casual y versátil",
        tallas: ["S", "M", "L"]
    },

    {
        id: 19,
        cat: "pantalones",
        nombre: "Baggy Jeans",
        precio: "70.00",
        desc: "Jean casual de corte ancho",
        tallas: ["S", "M", "L"]
    },

    {
        id: 20,
        cat: "pantalones",
        nombre: "Striped Pants",
        precio: "65.00",
        desc: "Pantalón de rayas versátil",
        tallas: ["S", "M", "L"]
    },

    {
        id: 21,
        cat: "pantalones",
        nombre: "Moon Jean",
        precio: "65.00",
        desc: "Jean de tiro alto",
        tallas: ["S", "M", "L"]
    },


    /* ========================================
       ABRIGOS
    ======================================== */

    {
        id: 22,
        cat: "abrigos",
        nombre: "Aviator Jacket Black",
        precio: "150.00",
        desc: "Chaqueta aviador color negro",
        tallas: ["S", "M", "L"]
    },

    {
        id: 23,
        cat: "abrigos",
        nombre: "Aviator Jacket Brown",
        precio: "150.00",
        desc: "Chaqueta aviador color marrón",
        tallas: ["S", "M", "L"]
    },

    {
        id: 24,
        cat: "abrigos",
        nombre: "Classic Coat",
        precio: "160.00",
        desc: "Abrigo de paño elegante",
        tallas: ["S", "M", "L"]
    },

    {
        id: 25,
        cat: "abrigos",
        nombre: "Corduroy Jacket",
        precio: "150.00",
        desc: "Abrigo elegante y versátil",
        tallas: ["S", "M", "L"]
    },

    {
        id: 26,
        cat: "abrigos",
        nombre: "Cardigan Clueless",
        precio: "135.00",
        desc: "Abrigo ligero y acogedor",
        tallas: ["S", "M", "L"]
    },


    /* ========================================
       BELLEZA
    ======================================== */

    {
        id: 27,
        cat: "belleza",
        nombre: "Paleta Anastasia Beverly Hills Subculture",
        precio: "235.00",
        desc: "Paleta con tonos intensos mate y metálicos"
    },

    {
        id: 28,
        cat: "belleza",
        nombre: "GloWish Multidew de Huda Beauty",
        precio: "225.00",
        desc: "Crema hidratante con color"
    },

    {
        id: 29,
        cat: "belleza",
        nombre: "Lip Contour Mini Duo",
        precio: "139.00",
        desc: "Delineadores mate de textura suave"
    },

    {
        id: 30,
        cat: "belleza",
        nombre: "Rhode Barrier Restore Cream",
        precio: "220.00",
        desc: "Crema hidratante nutritiva"
    }

];


/* ========================================
   CARGAR PRODUCTOS
======================================== */

function cargarProductos() {

    const grid =
        document.getElementById("grid-productos");

    if (!grid) return;

    grid.innerHTML = productos.map(p => `

        <div
            class="col-6 col-md-4 col-lg-3 producto-item"
            data-categoria="${p.cat}">

            <div class="product-card text-center bg-white rounded-4 shadow-sm p-3 h-100 d-flex flex-column border-0">

                <div class="img-wrapper mb-3">

                    <img
                        src="assets/img/productos/prod-${p.id}.jpg"
                        alt="${p.nombre}"
                        class="img-fluid rounded-4">

                </div>

                <h6 class="fw-bold mb-1 text-uppercase small">

                    ${p.nombre}

                </h6>

                <p class="text-muted small mb-2 flex-grow-1">

                    ${p.desc}

                </p>

                <p class="fw-bold mb-3 text-dark">

                    S/ ${p.precio}

                </p>

                ${p.tallas ? `

                    <div class="d-flex justify-content-center gap-2 mb-3">

                        ${p.tallas.map(t => `

                            <button
                                class="btn btn-outline-dark btn-sm talla-btn">

                                ${t}

                            </button>

                        `).join("")}

                    </div>

                ` : ""}

                <a
                    href="https://wa.me/51963713080?text=Hola! Deseo información de: ${p.nombre}"
                    target="_blank"
                    class="btn btn-dark w-100 rounded-pill py-2 small">

                    Comprar

                </a>

            </div>

        </div>

    `).join("");

}


/* ========================================
   FILTRO PRODUCTOS
======================================== */

function filtrar(cat, btn) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(b => {

            b.classList.remove("active");

        });

    btn.classList.add("active");

    document
        .querySelectorAll(".producto-item")
        .forEach(el => {

            if (
                cat === "todos" ||
                el.getAttribute("data-categoria") === cat
            ) {

                el.style.display = "block";

            } else {

                el.style.display = "none";

            }

        });

}


/* ========================================
   RESEÑAS WHATSAPP
======================================== */

function enviarWA() {

    const nom =
        document.getElementById("nombre")?.value;

    const msg =
        document.getElementById("mensaje")?.value;

    const star =
        document.querySelector(
            'input[name="rating"]:checked'
        );

    if (!nom || !msg || !star) {

        alert("Por favor completa todo el formulario.");

        return;

    }

    const texto = `
RESEÑA SOLARIS PERUVIAN

Cliente: ${nom}

Calificación: ${star.value}

Reseña: ${msg}
`;

    window.open(

        `https://api.whatsapp.com/send?phone=51963713080&text=${encodeURIComponent(texto)}`,

        "_blank"

    );

}


/* ========================================
   CARGAR TODO
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    cargarProductos();

});
document.addEventListener("DOMContentLoaded", () => {

    const telefonoInput =
        document.querySelector("#telefono");

    // VALIDAR SI EXISTE

    if (!telefonoInput) return;

    // INICIALIZAR INPUT TELEFONO

    const iti = window.intlTelInput(telefonoInput, {

        initialCountry: "pe",

        preferredCountries: [
            "pe",
            "mx",
            "ar",
            "co", 
            "es",
        ], 

        separateDialCode: true,

        nationalMode: true,
 utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.2.1/js/utils.js"
    });
});