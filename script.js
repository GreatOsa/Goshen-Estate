const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleBtn.innerHTML = "🌙";
    } else {
        toggleBtn.innerHTML = "☀️";
    }
});

const images =  [
            "assets/images/IMG-20260522-WA0037.jpg",
            "assets/images/IMG-20260522-WA0043.jpg",
            "assets/images/IMG-20260522-WA0066.jpg",
            "assets/images/IMG-20260522-WA0059.jpg",
            "assets/images/IMG-20260522-WA0044.jpg",
            "assets/images/IMG-20260522-WA0069.jpg",
            "assets/images/IMG-20260522-WA0054.jpg",
            "assets/images/IMG-20260522-WA0046.jpg",
            "assets/images/IMG-20260522-WA0024.jpg",
            "assets/images/IMG-20260522-WA0053.jpg",
            "assets/images/IMG-20260522-WA0041.jpg",
            "assets/images/IMG-20260522-WA0049.jpg",
            "assets/images/IMG-20260522-WA0062.jpg",
            "assets/images/IMG-20260522-WA0026.jpg",
            "assets/images/IMG-20260522-WA0029.jpg",
            "assets/images/IMG-20260522-WA0048.jpg",
            "assets/images/IMG-20260522-WA0047.jpg",
            "assets/images/IMG-20260522-WA0064.jpg",
            "assets/images/IMG-20260522-WA0068.jpg",
            "assets/images/IMG-20260522-WA0036.jpg",
            "assets/images/IMG-20260522-WA0025.jpg",
            "assets/images/IMG-20260522-WA0035.jpg",
            "assets/images/IMG-20260522-WA0051.jpg",
            "assets/images/IMG-20260522-WA0073.jpg",
            "assets/images/IMG-20260522-WA0057.jpg",
            "assets/images/IMG-20260522-WA0021.jpg",
            "assets/images/IMG-20260522-WA0020.jpg",
            "assets/images/IMG-20260522-WA0060.jpg",
            "assets/images/IMG-20260522-WA0056.jpg",
            "assets/images/IMG-20260522-WA0055.jpg",
            "assets/images/IMG-20260522-WA0050.jpg",
            "assets/images/IMG-20260522-WA0039.jpg",
            "assets/images/IMG-20260522-WA0072.jpg",
            "assets/images/IMG-20260522-WA0067.jpg",
            "assets/images/IMG-20260522-WA0033.jpg",
            "assets/images/IMG-20260522-WA0071.jpg",
            "assets/images/IMG-20260522-WA0070.jpg",
            "assets/images/IMG-20260522-WA0058.jpg",
            "assets/images/IMG-20260522-WA0052.jpg",
            "assets/images/IMG-20260522-WA0065.jpg",
            "assets/images/IMG-20260522-WA0038.jpg",
            "assets/images/IMG-20260522-WA0063.jpg",
            "assets/images/IMG-20260522-WA0031.jpg",
            "assets/images/IMG-20260522-WA0032.jpg",
            "assets/images/IMG-20260522-WA0028.jpg",
            "assets/images/IMG-20260522-WA0045.jpg",
            "assets/images/IMG-20260522-WA0030.jpg",
            "assets/images/IMG-20260522-WA0023.jpg",
            "assets/images/IMG-20260522-WA0042.jpg",
            "assets/images/IMG-20260522-WA0027.jpg",
            "assets/images/IMG-20260522-WA0034.jpg",
            "assets/images/IMG-20260522-WA0022.jpg",
            "assets/images/IMG-20260522-WA0040.jpg",
            "assets/images/IMG-20260522-WA0061.jpg"
        ]

const gallery = document.getElementById("gallery");

images.forEach(img => {
    const image = document.createElement("img");
    image.src = img;
    gallery.appendChild(image);
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

document.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && e.target.parentElement.id === "gallery") {
        lightbox.style.display = "flex";
        lightboxImg.src = e.target.src;
    }
});

close.onclick = () => {
    lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
};


/* =========================
   10 YEARS CELEBRATION
========================= */

const popup = document.getElementById("celebrationPopup");
const closeCelebration = document.getElementById("closeCelebration");
const continueBtn = document.getElementById("continueBtn");

// CHECK IF ALREADY SEEN

if (!localStorage.getItem("goshen10years")) {

    setTimeout(() => {
        popup.classList.add("show");
    }, 800);
}

// CLOSE FUNCTION

function closePopup() {

    popup.classList.remove("show");

    localStorage.setItem("goshen10years", "seen");
}

closeCelebration.addEventListener("click", closePopup);

continueBtn.addEventListener("click", closePopup);