// variables
const body = document.getElementsByTagName('body')[0];
const isIndex = body.classList.contains('template-index');
const header = document.querySelector('.site-header');
const headerSpacer = document.querySelector('.site-header__spacer');
const announcementBar = document.querySelector('.announcement-bar');
const hideAnchor = header.offsetHeight + 45;
let ticking = false;
let oldScrollPos = 0;

headerSpacer.style.height = `${header.offsetHeight}px`;

const handleHeaderVisibility = (scrollPos, oldScrollPos) => {
  if (announcementBar) {
    const announcementBarHeight = announcementBar.offsetHeight;
    if (scrollPos <= announcementBarHeight) {
      header.style.position = 'relative';
    } else {
      header.style.position = 'fixed';
    }
  } else {
    header.style.position = 'fixed';
  }

  if (scrollPos >= hideAnchor) {
    header.classList.add('site-header--hidden');
  } else {
    header.classList.remove('site-header--hidden');

    if (!isIndex) {
      header.style.borderColor = '#ececec';
    } else {
      header.style.borderColor = '#ffffff';
    }
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
