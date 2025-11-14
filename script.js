const servicesData = [
    {
        icon: 'fa-cloud',
        title: "Cloud Support",
        features: ["AWS Management", "Azure Administration", "GCP Solutions", "Cloud Migration", "Cost Optimization"]
    },
    {
        icon: 'fa-globe',
        title: "MS365 Support",
        features: ["Teams Administration", "Exchange Management", "SharePoint Governance", "OneDrive Support", "Security Configuration"]
    },
    {
        icon: 'fa-server',
        title: "Citrix Solutions",
        features: ["VDI Deployment", "App Streaming", "Session Management", "Performance Tuning", "User Experience Optimization"]
    },
    {
        icon: 'fa-wifi',
        title: "Network Support",
        features: ["Network Design", "Firewall Management", "VPN Solutions", "Network Monitoring", "Bandwidth Optimization"]
    },
    {
        icon: 'fa-hard-drive',
        title: "Hardware Support",
        features: ["Server Management", "Workstation Support", "Storage Solutions", "Backup Systems", "Hardware Refresh"]
    },
    {
        icon: 'fa-lock',
        title: "Cyber Security",
        features: ["Threat Detection", "Vulnerability Assessment", "Incident Response", "Security Compliance", "Security Awareness"]
    }
];
const whyChooseData = [
    { 
        title: "99.9% SLA Guarantee", 
        features: ["Backed by transparent SLA terms", "Proactive monitoring", "Guaranteed uptime"] 
    },
    { 
        title: "Rapid Response", 
        features: ["15-minute response time", "Critical incident support", "24/7 availability"] 
    },
    { 
        title: "Enterprise Security", 
        features: ["Military-grade encryption", "Compliance standards", "Regular audits"] 
    },
    { 
        title: "Expert Team", 
        features: ["Certified professionals", "Industry expertise", "Continuous training"] 
    },
    { 
        title: "24/7 Monitoring", 
        features: ["AI-powered monitoring", "Proactive alerts", "Issue prevention"] 
    },
    { 
        title: "Strategic Planning", 
        features: ["Technology roadmap", "Business alignment", "Future-ready solutions"] 
    }
];
const testimonialData = [
    { 
        company: "Tech Corp", 
        quote: "SYSNETIX transformed our cloud infrastructure with 40% cost savings.", 
        author: "John Smith, CTO" 
    },
    { 
        company: "Enterprise Inc", 
        quote: "24/7 support has been critical to our business continuity.", 
        author: "Sarah Johnson, IT Director" 
    },
    { 
        company: "Global Solutions", 
        quote: "Expert team provided seamless migration to Azure.", 
        author: "Mike Brown, Infrastructure Lead" 
    }
];

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Typing Effect
const fullText = 'Complete IT Infrastructure Solutions';
const fullDesc = 'Enterprise-grade solutions in cloud, security, networking, and infrastructure.';
const typingTextEl = document.getElementById('typingText');
const typingDescEl = document.getElementById('typingDesc');
let textIndex = 0;
const typeText = () => {
    if (textIndex <= fullText.length) {
        typingTextEl.textContent = fullText.slice(0, textIndex);
        textIndex++;
        setTimeout(typeText, 50);
    }
};
typeText();
setTimeout(() => {
    let descIndex = 0;
    const typeDesc = () => {
        if (descIndex <= fullDesc.length) {
            typingDescEl.textContent = fullDesc.slice(0, descIndex);
            descIndex++;
            setTimeout(typeDesc, 30);
        }
    };
    typeDesc();
}, fullText.length * 50);

function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = servicesData.map((service) => `
        <div class="service-card">
            <div class="service-header">
                <div class="service-icon">
                    <i class="fas ${service.icon}"></i>
                </div>
                <h3>${service.title}</h3>
            </div>
            <ul>
                ${service.features.map(feature => `
                    <li>
                        <span class="bullet">•</span>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function renderWhyChoose() {
    const whyGrid = document.getElementById('whyGrid');
    whyGrid.innerHTML = whyChooseData.map((item) => `
        <div class="why-card" style="background-color: #2C4CB8 !important; border: 2px solid #FFD700 !important;">
            <h3 style="color: #FFD700 !important; font-size: 18px !important; font-weight: bold !important; margin-bottom: 16px !important;">${item.title}</h3>
            <ul>
                ${item.features.map(feature => `
                    <li style="color: #FFFFFF !important; display: flex !important; gap: 8px !important; font-size: 14px !important; margin-bottom: 8px !important;">
                        <span class="bullet" style="color: #DC143C !important; font-weight: bold !important; margin-top: 2px !important;">•</span>
                        <span style="color: #FFFFFF !important;">${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    testimonialsGrid.innerHTML = testimonialData.map((testimonial) => `
        <div class="testimonial-card">
            <div class="stars">
                ${[...Array(5)].map(() => '<div class="star">★</div>').join('')}
            </div>
            <p>"${testimonial.quote}"</p>
            <ul>
                <li>
                    <span class="bullet">•</span>
                    <span class="testimonial-author">${testimonial.author}</span>
                </li>
                <li>
                    <span class="bullet">•</span>
                    <span class="testimonial-company">${testimonial.company}</span>
                </li>
            </ul>
        </div>
    `).join('');
}

// --- NEW: Function to open Calendly popup ---
function openCalendlyPopup() {
    // Replace with your Calendly URL
    const calendlyUrl = 'https://calendly.com/ipankajmehndiratta/30min';
    // Call Calendly's showPopupWidget function
    Calendly.initPopupWidget({ url: calendlyUrl });
    // Prevent the default button action if it's a link
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderWhyChoose();
    renderTestimonials();

    // --- NEW: Attach click listeners to the buttons ---
    // Select all buttons with the text "Schedule Consultation" or "Contact Us"
    // Using querySelectorAll for more flexibility
    const scheduleButtons = document.querySelectorAll('.schedule-btn, .demo-btn');
    
    scheduleButtons.forEach(button => {
        // Add the click event listener to call the Calendly function
        button.addEventListener('click', openCalendlyPopup);
    });
});
