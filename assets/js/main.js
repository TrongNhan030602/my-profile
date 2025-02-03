const fadeUpElements = document.querySelectorAll(".fade-up");

const sections = document.querySelectorAll(".section");

function checkSections() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight - 100) {
            section.classList.add("visible");
        }
    });
}

// Gọi hàm khi tải trang và khi cuộn
window.addEventListener("load", checkSections);
window.addEventListener("scroll", checkSections);

// Thêm hiệu ứng parallax
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    let offset = window.pageYOffset;
    hero.style.backgroundPosition = `center ${offset * 0.5}px`;
});

// Xem chứng chỉ
document.querySelectorAll(".lightbox-thumb").forEach((item) => {
    item.addEventListener("click", (event) => {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        lightboxImg.src = event.target.getAttribute("data-full");
        lightbox.style.display = "flex";
    });
});

document.getElementById("lightbox-close").addEventListener("click", () => {
    document.getElementById("lightbox").style.display = "none";
});

document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target === document.getElementById("lightbox")) {
        document.getElementById("lightbox").style.display = "none";
    }
});