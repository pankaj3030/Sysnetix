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
  { company:'Global Solutions', quote:'Expert team provided seamless migration to Azure.', author:'Mike Brown, CIO' }
];

/* ===== Render Services ===== */
const servicesGrid = document.getElementById('servicesGrid');
servicesData.forEach(s => {
  const card = document.createElement('div');
  card.className = 'service-card reveal';
  card.innerHTML = `
    <div class="service-title"><i class="fas ${s.icon} service-icon"></i> ${s.title}</div>
    <div class="service-list"><ul>${s.features.map(f => `<li>${f}</li>`).join('')}</ul></div>
  `;
  servicesGrid.appendChild(card);
});

/* ===== Render Why Choose ===== */
const whyGrid = document.getElementById('whyGrid');
whyChooseData.forEach(w => {
  const card = document.createElement('div');
  card.className = 'why-card reveal';
  card.innerHTML = `<h3>${w.title}</h3><ul>${w.features.map(f=>`<li>${f}</li>`).join('')}</ul>`;
  whyGrid.appendChild(card);
});

/* ===== Render Testimonials ===== */
const testimonialsGrid = document.getElementById('testimonialsGrid');
testimonialData.forEach(t=>{
  const card = document.createElement('div');
  card.className='testimonial reveal';
  card.innerHTML = `<p>"${t.quote}"</p><strong>${t.author}</strong>`;
  testimonialsGrid.appendChild(card);
});

/* ===== Mobile Menu Toggle ===== */
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click',()=>{
  if(mobileMenu.style.display==='none'){
    mobileMenu.style.display='block';
    menuBtn.setAttribute('aria-expanded','true');
  }else{
    mobileMenu.style.display='none';
    menuBtn.setAttribute('aria-expanded','false');
  }
});

/* ===== Typing Effect ===== */
const typingText = document.getElementById('typingText');
const words = ["IT Infrastructure Solutions", "Cloud Services", "Cybersecurity Services"];
let i = 0, j = 0, forward = true;

function type(){
  if(forward){
    if(j<words[i].length){ typingText.textContent+=words[i][j]; j++; setTimeout(type,80);}
    else{ forward=false; setTimeout(type,1200); }
  } else {
    if(j>0){ typingText.textContent=words[i].substring(0,j-1); j--; setTimeout(type,40);}
    else{ forward=true; i=(i+1)%words.length; setTimeout(type,200);}
  }
}
type();

/* ===== Scroll Reveal ===== */
const revealEls = document.querySelectorAll('.reveal');
function revealOnScroll(){
  revealEls.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const windowH = window.innerHeight;
    if(top<windowH-100) el.classList.add('show');
  });
}
window.addEventListener('scroll',revealOnScroll);
window.addEventListener('load',revealOnScroll);
