const toggleBtn = document.getElementById("themeToggle");

/* =========================
   DARK / LIGHT MODE
========================= */

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        toggleBtn.innerHTML = "🌙";

    } else {

        toggleBtn.innerHTML = "☀️";
    }
});

/* =========================
   GALLERY IMAGES
========================= */

const images = [

    "assets/images/1.jpg",
    "assets/images/logo1.png",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg",
    "assets/images/6.jpg",
    "assets/images/7.jpg",
    "assets/images/8.jpg",
    "assets/images/9.jpg",
    "assets/images/10.jpg",
    "assets/images/11.jpg",
    "assets/images/12.jpg",
    "assets/images/13.jpg",
    "assets/images/14.jpg",
    "assets/images/15.jpg",
    "assets/images/16.jpg",
    "assets/images/17.jpg",
    "assets/images/18.jpg",
    "assets/images/19.jpg",
    "assets/images/20.jpg",
    "assets/images/21.jpg",
    "assets/images/22.jpg",
    "assets/images/23.jpg",
    "assets/images/24.jpg",
    "assets/images/25.jpg",
    "assets/images/26.jpg",
    "assets/images/27.jpg",
    "assets/images/28.jpg",
    "assets/images/IMG-20260522-WA0053.jpg",
    "assets/images/IMG-20260522-WA0049.jpg",
    "assets/images/IMG-20260522-WA0026.jpg",
    "assets/images/IMG-20260522-WA0029.jpg",
    "assets/images/IMG-20260522-WA0048.jpg",
    "assets/images/IMG-20260522-WA0068.jpg",
    "assets/images/IMG-20260522-WA0036.jpg",
    "assets/images/IMG-20260522-WA0051.jpg",
    "assets/images/IMG-20260522-WA0073.jpg",
    "assets/images/IMG-20260522-WA0057.jpg",
    "assets/images/IMG-20260522-WA0021.jpg",
    "assets/images/IMG-20260522-WA0020.jpg",
    "assets/images/IMG-20260522-WA0060.jpg",
    "assets/images/IMG-20260522-WA0056.jpg",
    "assets/images/IMG-20260522-WA0055.jpg",
    "assets/images/IMG-20260522-WA0067.jpg",
    "assets/images/IMG-20260522-WA0052.jpg",
    "assets/images/IMG-20260522-WA0038.jpg",
    "assets/images/IMG-20260522-WA0031.jpg",
    "assets/images/IMG-20260522-WA0032.jpg",
    "assets/images/IMG-20260522-WA0027.jpg",
    "assets/images/IMG-20260522-WA0022.jpg",
    "assets/images/IMG-20260522-WA0061.jpg"
];

const gallery = document.getElementById("gallery");

/* =========================
   GRID PATTERNS
========================= */

const patterns = [
    "normal",
    "tall",
    "normal",
    "wide",
    "normal",
    "large"
];

/* =========================
   CREATE GALLERY
========================= */

images.forEach((src, index) => {

    // CREATE ITEM

    const item = document.createElement("div");

    item.classList.add("gallery-item");

    // APPLY GRID STYLE

    const pattern = patterns[index % patterns.length];

    if (pattern !== "normal") {

        item.classList.add(pattern);
    }

    // CREATE IMAGE

    const img = document.createElement("img");

    img.src = src;

    // APPEND

    item.appendChild(img);

    gallery.appendChild(item);

    /* =========================
       LIGHTBOX OPEN
    ========================= */

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImg.src = src;

        // PREVENT BODY SCROLL

        document.body.style.overflow = "hidden";
    });
});

/* =========================
   LIGHTBOX
========================= */

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");

/* =========================
   CLOSE BUTTON
========================= */

closeBtn.addEventListener("click", closeLightbox);

/* =========================
   CLICK OUTSIDE TO CLOSE
========================= */

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        closeLightbox();
    }
});

/* =========================
   ESC KEY CLOSE
========================= */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        closeLightbox();
    }
});

/* =========================
   CLOSE FUNCTION
========================= */

function closeLightbox() {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";
}

/* =========================
   10 YEARS CELEBRATION
========================= */

const popup = document.getElementById("celebrationPopup");

const closeCelebration =
    document.getElementById("closeCelebration");

const continueBtn =
    document.getElementById("continueBtn");

/* SHOW ONLY ONCE */

if (!localStorage.getItem("goshen10years")) {

    setTimeout(() => {

        popup.classList.add("show");

    }, 800);
}

/* CLOSE POPUP */

function closePopup() {

    popup.classList.remove("show");

    localStorage.setItem("goshen10years", "seen");
}

closeCelebration.addEventListener(
    "click",
    closePopup
);

continueBtn.addEventListener(
    "click",
    closePopup
);

/* =========================
   WEBSITE LOADER
========================= */

const loader = document.getElementById("loader");

/* WAIT FOR EVERYTHING */

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);
});