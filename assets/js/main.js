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

// Modal details for project
const projects = [
  {
    title: "Library Book Borrowing System",
    description:
      "A web-based system that helps libraries manage book borrowing and returning efficiently. Users can search for books, borrow them, and track their borrowing history. Built with HTML, CSS, JavaScript, and Laravel.",
    images: [
      "./assets/img/project/books-management-1.png",
      "./assets/img/project/books-management-2.png",
      "./assets/img/project/books-management-3.png",
      "./assets/img/project/books-management-0.png",
      "./assets/img/project/books-management-4.png",
    ],
  },
  {
    title: "F8 Shop",
    description:
      "A static e-commerce website inspired by Shopee's category page, built to showcase modern UI/UX design principles. Developed using HTML, CSS, and JavaScript, this project emphasizes responsive design and smooth user interactions.",
    images: [
      "./assets/img/project/f8-shop-0.png",
      "./assets/img/project/f8-shop-1.png",
    ],
  },
  {
    title: "Music Player",
    description:
      "A sleek and interactive static music player web app, designed for seamless audio playback. Built with HTML, CSS, and JavaScript, it features a responsive UI, customizable playlists, and smooth transition effects to enhance the listening experience.",
    images: [
      "./assets/img/project/music-0.png",
      "./assets/img/project/music-1.png",
      "./assets/img/project/music-2.png",
    ],
  },
];

document
  .querySelectorAll(".project-card .btn:first-of-type")
  .forEach((button, index) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      currentProjectIndex = index;
      currentImageIndex = 0;

      // Lấy modal và các phần tử con
      const modal = document.getElementById("projectModal");
      const modalTitle = document.getElementById("modal-title");
      const modalImage = document.getElementById("modal-image");
      const modalDescription = document.getElementById("modal-description");

      // Cập nhật nội dung modal
      modalTitle.innerText = projects[currentProjectIndex].title;
      modalDescription.innerText = projects[currentProjectIndex].description;
      modalImage.src = projects[currentProjectIndex].images[currentImageIndex];

      // Hiển thị modal
      modal.style.display = "flex";
    });
  });

// Chuyển ảnh
document.getElementById("nextImage").addEventListener("click", () => {
  const modalImage = document.getElementById("modal-image");
  if (currentImageIndex < projects[currentProjectIndex].images.length - 1) {
    currentImageIndex++;
    modalImage.src = projects[currentProjectIndex].images[currentImageIndex];
  }
});

document.getElementById("prevImage").addEventListener("click", () => {
  const modalImage = document.getElementById("modal-image");
  if (currentImageIndex > 0) {
    currentImageIndex--;
    modalImage.src = projects[currentProjectIndex].images[currentImageIndex];
  }
});

// Đóng modal khi bấm nút close
document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("projectModal").style.display = "none";
});

// Đóng modal khi click ra ngoài
window.addEventListener("click", (event) => {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
