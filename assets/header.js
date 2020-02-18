const header = document.querySelector('.site-header');
const headerSpacer = document.querySelector('.site-header__spacer');
const headerHeight = header.offsetHeight;
let ticking = false;
let oldScrollPos = 0;

headerSpacer.style.height = `${headerHeight}px`;

const handleHeaderVisibility = (scrollPos, oldScrollPos) => {
  if (scrollPos >= headerHeight) {
    header.classList.add('site-header--hidden');
  } else {
    header.classList.remove('site-header--hidden');
    header.style.borderColor = '#FFFFFF';
  }

  if (oldScrollPos > scrollPos && scrollPos != 0) {
    header.classList.remove('site-header--hidden');
    header.style.borderColor = '#ececec';
  }
};

const handleScroll = e => {
  const scrollPos = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      handleHeaderVisibility(scrollPos, oldScrollPos);
      oldScrollPos = scrollPos;
      ticking = false;
    });
  }

  ticking = true;
};

window.addEventListener('scroll', handleScroll, false);
