document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const page01 = document.getElementById("page-01");

    // 1. Səhifə açılış animasiyası
    requestAnimationFrame(() => {
        page01.classList.add("active");
    });

    // "Kataloqu Vərəqlə" düyməsinə kliklədikdə 2-ci səhifəyə keçid funksiyası
    startBtn.addEventListener("click", () => {
        goToPage("02");
    });

    // Klaviatura sağ ox (→) ilə keçid dəstəyi
    document.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
            goToPage("02");
        }
    });
});

// Bütün 10 səhifə üçün ümumi keçid mühərriki
function goToPage(pageNumber) {
    const nextPage = document.getElementById(`page-${pageNumber}`);
    const currentPage = document.querySelector(".catalog-page.active");
    const pageLabel = document.getElementById("current-page-label");

    if (!nextPage) {
        console.log(`Səhifə ${pageNumber} hələ əlavə edilməyib — növbəti addımda yaradılacaq!`);
        return;
    }

    if (currentPage) {
        currentPage.classList.remove("active");
    }

    nextPage.classList.add("active");
    if (pageLabel) {
        pageLabel.textContent = pageNumber;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const page01 = document.getElementById("page-01");
    const navButtons = document.querySelectorAll(".nav-btn");

    // 1. Səhifə açılışda aktiv olsun
    requestAnimationFrame(() => {
        if (page01) {
            page01.classList.add("active");
        }
    });

    // Qapaq səhifəsindəki düymə -> 02-ci səhifəyə keçid
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            goToPage("02");
        });
    }

    // Səhifə daxilindəki "← 01 Qapaq" və "03 Səhifə →" düymələri
    navButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const target = btn.getAttribute("data-target");
            if (target) {
                goToPage(target);
            }
        });
    });

    // Klaviatura sağ (→) və sol (←) oxları ilə keçid
    document.addEventListener("keydown", (e) => {
        const activePage = document.querySelector(".catalog-page.active");
        if (!activePage) return;

        const currentNum = parseInt(activePage.getAttribute("data-page"), 10);

        if (e.key === "ArrowRight" && currentNum < 10) {
            const nextNum = String(currentNum + 1).padStart(2, "0");
            goToPage(nextNum);
        } else if (e.key === "ArrowLeft" && currentNum > 1) {
            const prevNum = String(currentNum - 1).padStart(2, "0");
            goToPage(prevNum);
        }
    });
});

// Səhifələr arası keçid funksiyası
function goToPage(pageNumber) {
    const nextPage = document.getElementById(`page-${pageNumber}`);
    const currentPage = document.querySelector(".catalog-page.active");
    const pageLabel = document.getElementById("current-page-label");

    if (!nextPage) {
        console.log(`Səhifə ${pageNumber} hələ əlavə edilməyib.`);
        return;
    }

    if (currentPage && currentPage !== nextPage) {
        currentPage.classList.remove("active");
    }

    nextPage.classList.add("active");

    if (pageLabel) {
        pageLabel.textContent = pageNumber;
    }
}