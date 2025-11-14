/* ===== Content Data ===== */
const servicesData = [
  { icon:'fa-cloud', title:'Cloud Support', features:['AWS Management','Azure Administration','GCP Solutions','Cloud Migration','Cost Optimization'] },
  { icon:'fa-globe', title:'MS365 Support', features:['Teams Admin','Exchange Management','SharePoint','OneDrive','Security Configuration'] },
  { icon:'fa-server', title:'Citrix & VDI', features:['VDI Deployment','App Streaming','Session Management','Performance Tuning','UX'] },
  { icon:'fa-wifi', title:'Network Support', features:['Network Design','Firewall Management','VPNs','Monitoring','Bandwidth'] },
  { icon:'fa-hard-drive', title:'Hardware Support', features:['Server Management','Workstation Support','Storage','Backup Systems','Refresh'] },
  { icon:'fa-lock', title:'Cyber Security', features:['Threat Detection','Vulnerability Assessment','IR','Compliance','Awareness'] }
];

const whyChooseData = [
  { title:'99.9% SLA Guarantee', features:['Transparent SLA terms','Proactive monitoring','Guaranteed uptime'] },
  { title:'Rapid Response', features:['15-minute response time','Critical incident support','24/7 availability'] },
  { title:'Enterprise Security', features:['Encryption','Compliance standards','Regular audits'] },
  { title:'Expert Team', features:['Certified professionals','Industry expertise','Continuous training'] },
  { title:'24/7 Monitoring', features:['AI-powered monitoring','Proactive alerts','Issue prevention'] },
  { title:'Strategic Planning', features:['Technology roadmap','Business alignment','Future-ready solutions'] }
];

const testimonialData = [
  { company:'Tech Corp', quote:'SYSNETIX transformed our cloud infrastructure with 40% cost savings.', author:'John Smith, CTO' },
  { company:'Enterprise Inc', quote:'24/7 support has been critical to our business continuity.', author:'Sarah Johnson, IT Director' },
  { company:'Global Solutions', quote:'Expert team provided seamless migration to Azure.', author:'Mike Brown, Infrastructure Lead' }
];

/* ===== Render Helpers ===== */
function el(html){
  const template=document.createElement('template');
  template.innerHTML=html.trim();
  return template.content.firstChild;
}

function renderServices(){
  const grid=document.getElementById('servicesGrid');
  servicesData.forEach(s=>{
    const card=el(`<div class="service-card reveal">
      <div class="service-title"><span class="service-icon"><i class="fas ${s.icon}"></i></span><div>${s.title}</div></div>
      <div class="service-list"><ul>${s.features.map(f=>`<li style="margin:6px 0;color:var(--muted)">${f}</li>`).join('')}</ul></div>
    </div>`);
    grid.appendChild(card);
  });
}

function renderWhy(){
  const grid=document.getElementById('whyGrid');
  whyChooseData.forEach(w=>{
    const card=el(`<div class="why-card reveal"><h3>${w.title}</h3><ul>${w.features.map(f=>`<li style="margin:6px 0;color:var(--muted)">• ${f}</li>`).join('')}</ul></div>`);
    grid.appendChild(card);
  });
}

function renderTestimonials(){
  const grid=document.getElementById('testimonialsGrid');
  testimonialData.forEach(t=>{
    const card=el(`<div class="testimonial reveal"><div class="stars">★★★★★</div><p style="font-style:italic;margin-bottom:8px">"${t.quote}"</p><div style="font-weight:700">${t.author}</div><div class="muted">${t.company}</div></div>`);
    grid.appendChild(card);
  });
}

/* ===== Interactive Features ===== */
document.addEventListener('DOMContentLoaded',()=>{
  renderServices();
  renderWhy();
  renderTestimonials();

  // Mobile menu toggle
  const menuBtn=document.getElementById('menuBtn');
  const mobile=document.getElementById('mobileMenu');
  if(menuBtn && mobile){
    menuBtn.addEventListener('click', ()=>{
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!expanded));
      mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Calendly / Booking popup
  function openBooking(){
    const url='https://calendly.com/ipankajmehndiratta/30min';
    if(window.Calendly && Calendly.initPopupWidget){
      Calendly.initPopupWidget({url});
      return;
    }
    window.open(url,'_blank','noopener');
  }

  const bookBtnEl = document.getElementById('bookBtn');
  const primaryDemoEl = document.getElementById('primaryDemo');
  const scheduleFloatingEl = document.getElementById('scheduleFloating');

  if(bookBtnEl) bookBtnEl.addEventListener('click', openBooking);
  if(primaryDemoEl) primaryDemoEl.addEventListener('click', openBooking);
  if(scheduleFloatingEl) scheduleFloatingEl.addEventListener('click', openBooking);

  // Scroll reveal animation
  const items=document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(i=>io.observe(i));

  // Typing effect
  const typingEl=document.getElementById('typingText');
  const text='Complete IT Infrastructure Solutions';
  let i=0;
  function step(){ typingEl.textContent=text.slice(0,i); i++; if(i<=text.length) setTimeout(step,26); }
  step();

  // Sticky CTA keyboard accessible
  const sticky=document.querySelector('.sticky-cta');
  if(sticky){
    sticky.addEventListener('keypress',e=>{
      if(e.key==='Enter') sticky.click();
    });
  }

  // Lazy-load video for fast connections
  const canLoadVideo = window.innerWidth >= 900 && (navigator.connection ? ((navigator.connection.effectiveType||'4g').indexOf('2g')===-1) : true);
  if(!canLoadVideo){
    const v=document.querySelector('.hero video');
    if(v) v.remove();
  }

  // Prevent layout shift on resize
  let rTO;
  window.addEventListener('resize',()=>{
    clearTimeout(rTO);
    rTO=setTimeout(()=>{},200);
  });
});
