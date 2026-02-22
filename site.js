// ===== GALLERY MODAL (MVC SAFE) =====
window.initGalleryModal = function () {

    const images = document.querySelectorAll(".gallery-img");
    const modal = document.getElementById("imageModal");

    if (!images.length || !modal) return;

    const modalImage = document.getElementById("modalImage");
    const closeBtn = modal.querySelector(".close");
    const nextBtn = modal.querySelector(".next");
    const prevBtn = modal.querySelector(".prev");

    let currentIndex = 0;

    images.forEach((img, index) => {
        img.onclick = () => {
            modal.style.display = "flex";
            modalImage.src = img.src;
            currentIndex = index;
            document.body.style.overflow = "hidden";
        };
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    nextBtn.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex].src;
    };

    prevBtn.onclick = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex].src;
    };

    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    };
};
