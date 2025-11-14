// Sample data
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
  { title:'Enterprise Security', features:['Encryption','Compliance standards','Regular audits'] }
];

const testimonialData = [
  { company:'Tech Corp', quote:'SYSNETIX transformed our cloud infrastructure with 40% cost savings.', author:'John Smith, CTO' },
  { company:'Enterprise Inc', quote:'24/7 support has been critical to our business continuity.', author:'Sarah Johnson, IT Director' }
];

// Render helpers
function el(html){ const t=document.createElement('template'); t.innerHTML=html.trim(); return t.content.firstChild; }

function renderServices(){ const grid=document.getElementById('servicesGrid'); servicesData.forEach(s=>{
  const card=el(`<div class="service-card reveal">
    <div class="service-title"><span class="service-icon"><i class="fas ${s.icon}"></i></span><div>${s.title}</div></div>
    <ul>${s.features.map(f=>`<li>${f}</li>`).join('')}</ul>
  </div>`); grid.appendChild(card);
})}

function renderWhy(){ const grid=document.getElementById('whyGrid'); whyChooseData.forEach(w=>{
  const card=el(`<div class="why-card reveal"><h3>${w.title}</h3><ul>${w.features.map(f=>`<li>• ${f}</li>`).join('')}</ul></div>`); grid.appendChild(card);
})}

function renderTestimonials(){ const grid=document.getElementById('testimonialsGrid'); testimonialData.forEach(t=>{
  const card=el(`<div class="testimonial reveal"><div class="stars">★★★★★</div><p>"${t.quote}"</p><div>${t.author}</div><div>${t.company}</div></div>`); grid.appendChild(card);
})}

document.addEventListener('DOMContentLoaded',()=>{
  renderServices();
  renderWhy();
  renderTestimonials();

  // Mobile menu
  const menuBtn=document.getElementById('menuBtn'); const mobile=document.getElementById('mobileMenu');
  menuBtn.addEventListener('click',()=>{ const expanded=menuBtn.getAttribute('aria-expanded')==='true'; menuBtn.setAttribute('aria-expanded',!expanded); mobile.style.display= mobile.style.display==='block'? 'none':'block'; });

  // Booking
  const openBooking=()=> window.open('https://calendly.com/ipankajmehndiratta/30min','_blank','noopener');
  document.getElementById('bookBtn').addEventListener('click', openBooking);
  document.getElementById('primaryDemo').addEventListener('click', openBooking);
});
