// Data for dynamic sections
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

// Typing Effect for Hero
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

// Render Functions
function renderServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    servicesGrid.innerHTML = servicesData.map((service, index) => `
        <div class="service-card" style="animation-delay: ${0.05 * (index + 1)}s;">
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
    whyGrid.innerHTML = whyChooseData.map((item, index) => `
        <div class="why-card" style="animation-delay: ${0.05 * (index + 1)}s;">
            <h3>${item.title}</h3>
            <ul>
                ${item.features.map(feature => `
                    <li>
                        <span class="bullet">•</span>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    testimonialsGrid.innerHTML = testimonialData.map((testimonial, index) => `
        <div class="testimonial-card" style="animation-delay: ${0.05 * (index + 1)}s;">
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

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderWhyChoose();
    renderTestimonials();
});
