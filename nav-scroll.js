// nav-scroll.js — add 'scrolled' class to .sw-topbar on scroll
(function(){
  function onScroll(){
    const header = document.querySelector('.sw-topbar');
    if(!header) return;
    if(window.scrollY > 18) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('DOMContentLoaded', onScroll);
})();
