document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleProducts");
  const productCards = document.getElementById("productCards");
  const productCardsList = productCards.querySelectorAll(".tech-product-card");

  toggleButton.addEventListener("click", () => {
    const isHidden = productCards.classList.contains("d-none");

    if (isHidden) {
      productCards.classList.remove("d-none");

      productCardsList.forEach((card, index) => {
        card.style.animation = "none"; // Reinicia la animación
        void card.offsetWidth;         // Forza reflow
        card.style.animation = `fadeSlideIn 0.6s ease-out forwards`;
        card.style.animationDelay = `${0.1 * index}s`;
      });

      toggleButton.textContent = "Ver menos productos";
    } else {
      productCards.classList.add("d-none");

      productCardsList.forEach((card) => {
        card.style.animation = "none";
        card.style.animationDelay = "0s";
      });

      toggleButton.textContent = "Ver más productos";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const statSection = document.getElementById("stats");
  const counters = document.querySelectorAll(".tech-stats__number");
  let hasAnimated = false;

  function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;
    let current = 0;

    const update = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };

    update();
  }

  function checkScroll() {
    const sectionTop = statSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!hasAnimated && sectionTop < windowHeight * 0.8) {
      counters.forEach(animateCounter);
      hasAnimated = true;
    }
  }

  document.addEventListener("scroll", checkScroll);
  checkScroll(); // en caso de que ya esté visible al cargar
});



function renderCharts() {
  const options = (value) => ({
    chart: {
      type: 'donut',
      height: 140
    },
    series: [value, 100 - value],
    labels: ['Logrado', 'Restante'],
    colors: ['#00f0ff', '#5d5d5dff'],
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    stroke: {
      width: 0
    }
  });

  const charts = [
    { id: 'chart1', value: 75 },
    { id: 'chart2', value: 85 },
    { id: 'chart3', value: 60 },
    { id: 'chart4', value: 95 }
  ];

  charts.forEach(({ id, value }) => {
    const chart = new ApexCharts(document.querySelector(`#${id}`), options(value));
    chart.render();
  });
}

renderCharts();


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Gracias por contactarnos. ¡Te responderemos pronto!");
  this.reset();
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector('.tech-about');

  function onScroll() {
    const rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      aboutSection.classList.add('active');
      window.removeEventListener('scroll', onScroll);
    }
  }

  window.addEventListener('scroll', onScroll);
});
