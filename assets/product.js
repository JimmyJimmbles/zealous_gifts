// variables
const siteHeader = document.querySelector('.site-header');
const headerClasslist = siteHeader.classList;
const productMeta = document.querySelector('.product-single__meta');
const productMetaClasslist = productMeta.classList;
let headerVisible = true;

const mutation = new MutationObserver(mutations => {
  for (let mutation of mutations) {
    if (mutation.type === 'attributes') {
      if (mutation.target.classList.contains('site-header--hidden')) {
        headerVisible = false;
      } else {
        headerVisible = true;
      }
    }
  }

  if (productMetaClasslist.contains('scroll-to-fixed-fixed')) {
    if (headerVisible) {
      productMeta.style.paddingTop = `${siteHeader.offsetHeight + 45}px`;
    } else {
      productMeta.style.paddingTop = '45px';
    }
  } else {
    productMeta.style.paddingTop = '45px';
  }
});

mutation.observe(siteHeader, {
  attributes: true
});
