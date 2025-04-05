document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting;
        const section = entry.target;

        if (isVisible) {
          section.classList.add("visible");

          const title = section.querySelector(".title:not(.title2)");
          const subtitle = section.querySelector(".subtitle:not(.subtitle2)");
          const title2 = section.querySelector(".title2");
          const subtitle2 = section.querySelector(".subtitle2");

          if (title) typeWriter(title, "BREAK YOUR OWN\nRECORD", 60);
          if (subtitle)
            setTimeout(() => {
              typeWriter(subtitle, "With Our Competition Swimsuits", 40);
            });
          if (title2)
            setTimeout(() => {
              typeWriter(title2, "Explore the Collection", 40);
            }, 100);
          if (subtitle2)
            setTimeout(() => {
              typeWriter(
                subtitle2,
                "Discover swimwear that combines performance and style. Shop now and make every swim count!",
                10
              );
            });
        } else {
          section.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

function typeWriter(element, text, delay = 10) {
  let index = 0;
  element.textContent = "";
  const interval = setInterval(() => {
    element.textContent += text.charAt(index);
    index++;
    if (index === text.length) {
      clearInterval(interval);
    }
  }, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElements = entry.target.querySelectorAll(
            ".img1, .img2, .line, .smaller-line, .men-info, .men-category img, .goggles-info .text, .woman-info .text"
          );

          animatedElements.forEach((el) => {
            el.style.animation = "none";
            void el.offsetWidth;
            el.style.animation = "";
          });
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.querySelectorAll(".product").forEach((product) => {
  const mainImage = product.querySelector(".main-image-product");
  const altImage = product.querySelector(".alt-image-product");

  product.addEventListener("mouseenter", () => {
    mainImage.style.opacity = "0";
    altImage.style.opacity = "1";
  });

  product.addEventListener("mouseleave", () => {
    mainImage.style.opacity = "1";
    altImage.style.opacity = "0";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product-slide");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  const productCount = products.length;
  const visibleCount = window.innerWidth <= 768 ? 3 : 4;
  const productWidth = products[0].offsetWidth + 20;
  let currentIndex = 0;

  function slideProducts() {
    products.forEach((product, index) => {
      product.style.transform = `translateX(-${currentIndex * productWidth}px)`;
    });
  }

  function handleLoop() {
    if (currentIndex >= productCount) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = productCount - visibleCount;
    }
    slideProducts();
  }

  arrowLeft.addEventListener("click", () => {
    if (currentIndex <= 0) {
      currentIndex = productCount - visibleCount;
    } else {
      currentIndex--;
    }
    handleLoop();
  });

  arrowRight.addEventListener("click", () => {
    if (currentIndex + visibleCount >= productCount) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    handleLoop();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const moreItemsButton = document.querySelector(".shop-more-button");
  const slideShopContainer = document.querySelector(".slide-shop-container");
  const shopProductsContainer = document.querySelector(
    ".shop-products-container"
  );
  const pagination = document.querySelector(".pagination");

  moreItemsButton.addEventListener("click", () => {
    if (moreItemsButton.textContent === "More Items") {
      slideShopContainer.style.display = "none";
      shopProductsContainer.style.display = "grid";
      pagination.style.display = "flex";

      moreItemsButton.textContent = "Less Products";

      setTimeout(() => {
        shopProductsContainer.classList.add("show");
        pagination.classList.add("show");
      }, 10);
    } else {
      shopProductsContainer.style.display = "none";
      pagination.style.display = "none";

      slideShopContainer.style.display = "flex";
      moreItemsButton.textContent = "More Items";

      shopProductsContainer.classList.remove("show");
      pagination.classList.remove("show");
    }
  });

  let currentPage = 1;
  const totalPages = 5;

  function updatePageNumber() {
    document.getElementById("pageNumber").textContent = currentPage;
  }

  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePageNumber();
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      updatePageNumber();
    }
  }

  document.getElementById("prevBtn").addEventListener("click", prevPage);
  document.getElementById("nextBtn").addEventListener("click", nextPage);
});

const canvas = document.getElementById("arrowCanvas");
const ctx = canvas.getContext("2d");

function toggleNavbar() {
  const navbarItems = document.querySelector(".navbar-items");
  navbarItems.classList.toggle("show");
}

const animations = document.querySelector("[anim-direc]");
animations.forEach((el) => {
  console.log(el);
});

function toggleNavbar() {
  const navbarItems = document.querySelector(".navbar-items");
  navbarItems.classList.toggle("active");

  if (navbarItems.classList.contains("active")) {
    navbarItems.style.zIndex = "10000";
  } else {
    navbarItems.style.zIndex = "10";
  }
}
