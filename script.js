// ========================================
// DATA
// ========================================
const servicesData = [
    {
        icon: 'fa-cloud',
        title: "Cloud Support",
        video: "https://media.w3.org/cc0-video/big_buck_bunny_720p_30mb.mp4",
        features: ["AWS Management", "Azure Administration", "GCP Solutions", "Cloud Migration", "Cost Optimization"]
    },
    {
        icon: 'fa-envelope',
        title: "MS365 Support",
        video: "https://media.w3.org/cc0-video/big_buck_bunny_720p_30mb.mp4",
        features: ["Teams Administration", "Exchange Management", "SharePoint Governance", "OneDrive Support", "Security Configuration"]
    },
    {
        icon: 'fa-desktop',
        title: "Citrix & VDi",
        video: "https://media.w3.org/cc0-video/big_buck_bunny_720p_30mb.mp4",
        features: ["VDI Deployment", "App Streaming", "Session Management", "Performance Tuning", "UX Optimization"]
    },
    {
        icon: 'fa-wifi',
        title: "Network Support",
        video: "https://media.w3.org/cc0-video/big_buck_bunny_720p_30mb.mp4",
        features: ["Network Design", "Firewall Management", "VPN Solutions", "Network Monitoring", "Bandwidth Optimization"]
    },
    {
        icon: 'fa-server',
        title: "Hardware Support",
        video: "https://media.w3.org/cc0-video/big_buck_bunny_720p_30mb.mp4",
        features: ["Server Management", "Workstation Support", "Storage Solutions", "Backup Systems", "Hardware Refresh"]
    },
    {
        icon: 'fa-lock',
        title: "Cyber Security",
        video: "https://media.w3.org/cc0-video/big_buck_bunny_720p_30mb.mp4",
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
    }
];

const testimonialData = [
    { 
        company: "Tech Corp", 
        quote: "SYSNETIX transformed our cloud infrastructure with 40% cost savings.", 
        author: "John Smith, CTO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=180&fit=crop"
    },
    { 
        company: "Enterprise Inc", 
        quote: "24/7 support has been critical to our business continuity.", 
        author: "Sarah Johnson, IT Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=180&fit=crop"
    },
    { 
        company: "Global Solutions", 
        quote: "Expert team provided seamless migration to Azure.", 
        author: "Mike Brown, Infrastructure Lead",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=180&fit=crop"
    },
    { 
        company: "Digital Systems", 
        quote: "Reduced infrastructure costs by 35% within the first year.", 
        author: "Lisa Anderson, CIO",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=180&fit=crop"
    },
    { 
        company: "Cloud First Corp", 
        quote: "Seamless integration and excellent customer support throughout.", 
        author: "David Lee, DevOps Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=180&fit=crop"
    }
];

// ========================================
// MOBILE MENU TOGGLE
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }
});

// ========================================
// SERVICES CAROUSEL RENDERING
// ========================================
function renderServicesCarousel() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    servicesGrid.innerHTML = servicesData.map((service) => `
        <div class="enhanced-service-card">
            <div class="service-video-wrapper">
                <video class="service-video" muted loop playsinline>
                    <source src="${service.video}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="enhanced-service-content">
                <div class="service-header">
                    <div class="service-icon">
                        <i class="fas ${service.icon}"></i>
                    </div>
                    <h3>${service.title}</h3>
                </div>
                <ul>
                    ${service.features.map(feature => `
                        <li>• ${feature}</li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    // Add video hover functionality
    setTimeout(() => {
        document.querySelectorAll('.enhanced-service-card video').forEach(v => {
            v.addEventListener('mouseenter', () => v.play());
            v.addEventListener('mouseleave', () => {
                v.pause();
                v.currentTime = 0;
            });
            v.addEventListener('touchstart', () => v.play());
            v.addEventListener('touchend', () => {
                v.pause();
                v.currentTime = 0;
            });
        });
    }, 100);
}

// ========================================
// SERVICES DETAILS RENDERING
// ========================================
function renderServicesDetails() {
    const servicesDetailGrid = document.getElementById('servicesDetailGrid');
    if (!servicesDetailGrid) return;

    servicesDetailGrid.innerHTML = servicesData.map((service) => `
        <div class="service-detail-card">
            <h3>${service.title}</h3>
            <ul>
                ${service.features.map(feature => `
                    <li>${feature}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// ========================================
// QUICK SERVICES RENDERING (HOME PAGE)
// ========================================
function renderQuickServices() {
    const quickServicesGrid = document.getElementById('quickServicesGrid');
    if (!quickServicesGrid) return;

    const quickServices = servicesData.slice(0, 3);
    quickServicesGrid.innerHTML = quickServices.map((service) => `
        <div class="quick-service-card">
            <div style="font-size: 32px; margin-bottom: 16px;">
                <i class="fas ${service.icon}" style="color: #0047ab;"></i>
            </div>
            <h3>${service.title}</h3>
            <p>Professional ${service.title.toLowerCase()} solutions tailored for your business needs with enterprise-grade support.</p>
        </div>
    `).join('');
}

// ========================================
// WHY CHOOSE US RENDERING
// ========================================
function renderWhyChoose() {
    const whyGrid = document.getElementById('whyGrid');
    if (!whyGrid) return;

    whyGrid.innerHTML = whyChooseData.map((item) => `
        <div class="why-card">
            <h3>${item.title}</h3>
            <ul>
                ${item.features.map(feature => `
                    <li>${feature}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

// ========================================
// TESTIMONIALS RENDERING
// ========================================
function renderTestimonials() {
    const testimonialsGrid = document.getElementById('testimonialsGrid');
    if (!testimonialsGrid) return;

    testimonialsGrid.innerHTML = testimonialData.map((testimonial) => `
        <div class="testimonial-card">
            <img src="${testimonial.image}" alt="${testimonial.author}" class="testimonial-image">
            <div class="stars">
                ${[...Array(5)].map(() => '<div class="star">★</div>').join('')}
            </div>
            <p>"${testimonial.quote}"</p>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><span class="testimonial-author">${testimonial.author}</span></li>
                <li><span class="testimonial-company">${testimonial.company}</span></li>
            </ul>
        </div>
    `).join('');
}

// ========================================
// TESTIMONIALS SHOWCASE (WHY US PAGE)
// ========================================
function renderTestimonialsShowcase() {
    const testimonialsShowcase = document.getElementById('testimonialsShowcase');
    if (!testimonialsShowcase) return;

    const showcase = testimonialData.slice(0, 3);
    testimonialsShowcase.innerHTML = showcase.map((testimonial) => `
        <div class="testimonial-card">
            <img src="${testimonial.image}" alt="${testimonial.author}" class="testimonial-image">
            <div class="stars">
                ${[...Array(5)].map(() => '<div class="star">★</div>').join('')}
            </div>
            <p>"${testimonial.quote}"</p>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 8px;"><span class="testimonial-author">${testimonial.author}</span></li>
                <li><span class="testimonial-company">${testimonial.company}</span></li>
            </ul>
        </div>
    `).join('');
}

// ========================================
// CAROUSEL CONTROLS
// ========================================
function setupCarouselControls() {
    const servicesGrid = document.getElementById('servicesGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!servicesGrid || !prevBtn || !nextBtn) return;

    const cardWidth = 350;
    let scrollPosition = 0;

    prevBtn.addEventListener('click', () => {
        scrollPosition = Math.max(0, scrollPosition - cardWidth);
        servicesGrid.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        updateButtonStates();
    });

    nextBtn.addEventListener('click', () => {
        scrollPosition += cardWidth;
        servicesGrid.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        updateButtonStates();
    });

    function updateButtonStates() {
        const maxScroll = servicesGrid.scrollWidth - servicesGrid.clientWidth;
        prevBtn.disabled = servicesGrid.scrollLeft <= 0;
        nextBtn.disabled = servicesGrid.scrollLeft >= maxScroll - 10;
    }

    servicesGrid.addEventListener('scroll', updateButtonStates);
    setTimeout(updateButtonStates, 100);
}

// ========================================
// INITIALIZE ON PAGE LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Home page
    renderQuickServices();
    renderTestimonials();

    // Services page
    renderServicesCarousel();
    renderServicesDetails();
    setupCarouselControls();

    // Why Us page
    renderWhyChoose();
    renderTestimonialsShowcase();
});
