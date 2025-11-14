// ===== DATA MODULE =====
const DATA = {
    services: [
        {
            icon: 'fa-cloud',
            title: 'Cloud Support',
            features: ['AWS Management', 'Azure Administration', 'GCP Solutions', 'Cloud Migration', 'Cost Optimization']
        },
        {
            icon: 'fa-globe',
            title: 'MS365 Support',
            features: ['Teams Administration', 'Exchange Management', 'SharePoint Governance', 'OneDrive Support', 'Security Configuration']
        },
        {
            icon: 'fa-server',
            title: 'Citrix Solutions',
            features: ['VDI Deployment', 'App Streaming', 'Session Management', 'Performance Tuning', 'User Experience Optimization']
        },
        {
            icon: 'fa-wifi',
            title: 'Network Support',
            features: ['Network Design', 'Firewall Management', 'VPN Solutions', 'Network Monitoring', 'Bandwidth Optimization']
        },
        {
            icon: 'fa-hard-drive',
            title: 'Hardware Support',
            features: ['Server Management', 'Workstation Support', 'Storage Solutions', 'Backup Systems', 'Hardware Refresh']
        },
        {
            icon: 'fa-lock',
            title: 'Cyber Security',
            features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Compliance', 'Security Awareness']
        }
    ],
    whyUs: [
        {
            title: '99.9% SLA Guarantee',
            features: ['Backed by transparent SLA terms', 'Proactive monitoring', 'Guaranteed uptime']
        },
        {
            title: 'Rapid Response',
            features: ['15-minute response time', 'Critical incident support', '24/7 availability']
        },
        {
            title: 'Enterprise Security',
            features: ['Military-grade encryption', 'Compliance standards', 'Regular audits']
        },
        {
            title: 'Expert Team',
            features: ['Certified professionals', 'Industry expertise', 'Continuous training']
        },
        {
            title: '24/7 Monitoring',
            features: ['AI-powered monitoring', 'Proactive alerts', 'Issue prevention']
        },
        {
            title: 'Strategic Planning',
            features: ['Technology roadmap', 'Business alignment', 'Future-ready solutions']
        }
    ],
    testimonials: [
        {
            company: 'Tech Corp',
            quote: 'SYSNETIX transformed our cloud infrastructure with 40% cost savings.',
            author: 'John Smith, CTO'
        },
        {
            company: 'Enterprise Inc',
            quote: '24/7 support has been critical to our business continuity.',
            author: 'Sarah Johnson, IT Director'
        },
        {
            company: 'Global Solutions',
            quote: 'Expert team provided seamless migration to Azure.',
            author: 'Mike Brown, Infrastructure Lead'
        }
    ]
};

// ===== UTILITY FUNCTIONS =====
const createElementFromString = (htmlString) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString.trim();
    return tempDiv.firstElementChild;
};

// ===== MOBILE MENU MODULE =====
const initMobileMenu = () => {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('active');
        menu.setAttribute('aria-hidden', isExpanded);
    });

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-hidden', 'true');
        });
    });
};

// ===== TYPING EFFECT MODULE =====
const initTypingEffect = () => {
    const fullText = 'Complete IT Infrastructure Solutions';
    const fullDesc = 'Enterprise-grade solutions in cloud, security, networking, and infrastructure.';
    const textEl = document.getElementById('typingText');
    const descEl = document.getElementById('typingDesc');
    if (!textEl || !descEl) return;

    let textIndex = 0;
    const typeText = () => {
        if (textIndex <= fullText.length) {
            textEl.textContent = fullText.slice(0, textIndex);
            textIndex++;
            setTimeout(typeText, 50);
        } else {
            // Start desc after title
            let descIndex = 0;
            const typeDesc = () => {
                if (descIndex <= fullDesc.length) {
                    descEl.textContent = fullDesc.slice(0, descIndex);
                    descIndex++;
                    setTimeout(typeDesc, 30);
                }
            };
            typeDesc();
        }
    };
    typeText();
};

// ===== RENDER MODULES =====
const renderServices = () => {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = DATA.services.map((service, index) => `
        <article class="service-card card">
            <div class="card__header">
                <div class="card__icon">
                    <i class="fas ${service.icon}" aria-hidden="true"></i>
                </div>
                <h3 class="card__title">${service.title}</h3>
            </div>
            <ul class="card__list">
                ${service.features.map(feature => `
                    <li class="card__item">
                        <span class="bullet" aria-hidden="true">•</span>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </article>
    `).join('');
};

const renderWhyUs = () => {
    const grid = document.getElementById('whyGrid');
    if (!grid) return;

    grid.innerHTML = DATA.whyUs.map((item, index) => `
        <article class="why-card card">
            <h3 class="card__title">${item.title}</h3>
            <ul class="card__list">
                ${item.features.map(feature => `
                    <li class="card__item">
                        <span class="bullet" aria-hidden="true">•</span>
                        <span>${feature}</span>
                    </li>
                `).join('')}
            </ul>
        </article>
    `).join('');
};

const renderTestimonials = () => {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    grid.innerHTML = DATA.testimonials.map((testimonial, index) => `
        <article class="testimonial-card card">
            <div class="stars" role="img" aria-label="5 stars rating">
                ${[...Array(5)].map(() => '<span class="star" aria-hidden="true">★</span>').join('')}
            </div>
            <blockquote class="card__quote">"${testimonial.quote}"</blockquote>
            <ul class="card__list">
                <li class="card__item">
                    <span class="bullet" aria-hidden="true">•</span>
                    <span class="testimonial-author">${testimonial.author}</span>
                </li>
                <li class="card__item">
                    <span class="bullet" aria-hidden="true">•</span>
                    <span class="testimonial-company">${testimonial.company}</span>
                </li>
            </ul>
        </article>
    `).join('');
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTypingEffect();
    renderServices();
    renderWhyUs();
    renderTestimonials();
});
