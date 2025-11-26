// site-nav.js (non-destructive safe version)
(function(){
  const styleText = `
/* scoped styles for StudentWell nav (prefix .sw-) */
.sw-topbar{background:linear-gradient(90deg,#ffffff,#f6fbff);border-bottom:1px solid rgba(14,42,71,0.04);padding:10px 14px;box-sizing:border-box}
.sw-topbar .sw-container{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:12px}
.sw-brand{display:flex;flex-direction:column}
.sw-brand .sw-title{font-weight:800;color:#2f6fa8;font-size:18px}
.sw-brand .sw-sub{font-size:13px;color:#6b7280}
.sw-navlinks{display:flex;gap:10px;flex-wrap:wrap}
.sw-navlinks a{color:inherit;text-decoration:none;padding:6px 8px;border-radius:6px;font-weight:600;transition:0.2s}
.sw-navlinks a:hover{background:rgba(47,111,168,0.10)}
.sw-footer{padding:14px 10px;border-top:1px solid rgba(14,42,71,0.04);background:transparent}
.sw-footer .sw-container{max-width:1100px;margin:0 auto;text-align:center;color:#6b7280;font-size:13px}
@media (max-width:700px){
  .sw-topbar .sw-container{flex-direction:column;align-items:flex-start}
  .sw-navlinks{width:100%;justify-content:flex-start}
}
  `;
  
  if(!document.head.querySelector('style[data-origin="site-nav.js"]')){
    const s = document.createElement('style');
    s.setAttribute('data-origin','site-nav.js');
    s.appendChild(document.createTextNode(styleText));
    document.head.appendChild(s);
  }

  const headerHtml = `
    <div class="sw-topbar" role="banner">
      <div class="sw-container">
        <div class="sw-brand" aria-hidden="false">
          <div class="sw-title">StudentWell</div>
          <div class="sw-sub">دعم الطلاب للرفاهية النفسية</div>
        </div>

        <nav class="sw-navlinks" aria-label="القوائم الرئيسية">
          <a href="index.html">الرئيسية</a>
          <a href="survey.html">الاستبيان</a>
          <a href="plans.html">خطط</a>
          <a href="goals.html">أهداف</a>
          <a href="library.html">المكتبة</a>
          <a href="ai.html">نظام ذكي</a>

          <!-- ★ الرابط الجديد: منظم اليوم -->
          <a href="schedule.html" style="
              background:#2f6fa8;
              color:white;
              padding:6px 12px;
              border-radius:8px;
              font-weight:700;
            ">منظم اليوم</a>

          <a href="contact.html">تواصل</a>
        </nav>
      </div>
    </div>
  `;

  const footerHtml = `
    <div class="sw-footer" role="contentinfo">
      <div class="sw-container">Developed by : Eng Nour Aldien , Eng Mickel Ayman — © StudentWell</div>
    </div>
  `;

  document.addEventListener('DOMContentLoaded', ()=>{
    try{
      const existingHeader = document.body.querySelector('header, .topbar, .site-header, .sw-topbar');
      if(!existingHeader){
        const hNode = document.createElement('div');
        hNode.innerHTML = headerHtml;
        document.body.insertBefore(hNode, document.body.firstChild);
      }

      const existingFooter = document.body.querySelector('footer, .site-footer, .sw-footer');
      if(!existingFooter){
        const fNode = document.createElement('div');
        fNode.innerHTML = footerHtml;
        document.body.appendChild(fNode);
      }

      document.querySelectorAll('.container, .wrap, main, #main, .content').forEach(c=>{
        const pt = parseInt(window.getComputedStyle(c).paddingTop) || 0;
        if(pt < 12) c.style.paddingTop = '24px';
        if(!c.style.maxWidth) c.style.maxWidth = '1100px';
        if(!c.style.margin) c.style.margin = '0 auto';
      });
    }catch(e){ console.error('site-nav init error', e); }
  });
})();
