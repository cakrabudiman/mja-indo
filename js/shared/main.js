const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const backToTopBtn = document.querySelector('.back-to-top');

const updateNavState = () => {
  const normalizePath = (path) => {
    if (path === '/') return '/index.html';
    return path.endsWith('/') ? `${path}index.html` : path;
  };
  const currentPage = normalizePath(window.location.pathname);
  document.querySelectorAll('.main-nav a').forEach((link) => {
    link.classList.toggle('active', normalizePath(new URL(link.href).pathname) === currentPage);
  });
};

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

const setRevealAnimation = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
};

if (backToTopBtn) {
  const toggleBackToTop = () => {
    if (window.scrollY > 240) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };
  window.addEventListener('scroll', toggleBackToTop);
  backToTopBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

if (header) {
  const handleHeaderShadow = () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 10px 28px rgba(23,33,43,0.05)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', handleHeaderShadow);
}

updateNavState();
setRevealAnimation();
