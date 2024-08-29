src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
var swiper1 = new Swiper(".new-swiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".button-news-next-1",
    prevEl: ".button-news-prev-1",
  },
});
var swiper3 = new Swiper(".new-swiper-1-small", {
  loop: true,
  pagination: {
    el: ".pagination-news-small",
    clickable: true,
  },
});
var swiper2 = new Swiper(".new-swiper-2", {
    loop: true,
    slidesPerView: 2, // Số slide mặc định hiển thị
    spaceBetween: 24,
    breakpoints: {
      1280: {
        slidesPerView:3, 
      },
    },
    pagination: {
      el: ".swiper-pagination-dat2",
      type: "progressbar",
    },
  navigation: {
    nextEl: ".button-news-next-2",
    prevEl: ".button-news-prev-2",
  },
});

const counters = document.querySelectorAll('.quantity-number-title');

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const updateCount = (counter, duration) => {
    const target = +counter.getAttribute('data-target');
    const startValue = 0;
    const incrementTime = 10; // thời gian giữa các bước tăng (10ms)
    const totalSteps = duration / incrementTime;
    const increment = (target - startValue) / totalSteps;

    let currentValue = startValue;
    let steps = 0;

    const animate = () => {
        currentValue += increment;
        steps++;

        if (steps < totalSteps) {
            counter.innerText = Math.ceil(currentValue);
            setTimeout(animate, incrementTime);
        } else {
            counter.innerText = target;
        }
    };

    animate();
};

const startCounters = () => {
    const duration = 2000; // Thời gian hoàn thành (2 giây)
    counters.forEach(counter => {
        if (isInViewport(counter) && !counter.classList.contains('visible')) {
            counter.classList.add('visible');
            updateCount(counter, duration);
        }
    });
};

window.addEventListener('scroll', startCounters);
window.addEventListener('load', startCounters);
