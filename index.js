// ===== Stars Animation =====
function createStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(star);
    }
}

// ===== Mobile Menu Toggle =====
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
        // Close menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });
    }
}

// ===== Smooth Scroll & Active Nav =====
function initNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===== Events Data & Render =====
const eventsData = [
    {
        id: 1,
        title: 'March Madness Super Saturday',
        category: 'Conference',
        date: { month: 'MAR', day: '28' },
        time: '10:00 AM - 6:00 PM',
        location: 'Houston, TX',
        description: 'Join us for an incredible day of networking, inspiration, and entertainment at the Marriott Hotel & Resorts.',
        price: 99,
        featured: true
    },
    {
        id: 2,
        title: 'Tech Leaders Summit',
        category: 'Networking',
        date: { month: 'APR', day: '15' },
        time: '9:00 AM - 5:00 PM',
        location: 'Austin, TX',
        description: 'Connect with industry pioneers and discover the future of technology innovation.',
        price: 149,
        featured: false
    },
    {
        id: 3,
        title: 'Neon Nights Festival',
        category: 'Concert',
        date: { month: 'MAY', day: '02' },
        time: '7:00 PM - 2:00 AM',
        location: 'Dallas, TX',
        description: 'Experience an electrifying night of music, lights, and unforgettable performances.',
        price: 75,
        featured: false
    }
];

function renderEvents() {
    const grid = document.getElementById('eventsGrid');
    if (!grid) return;
    
    grid.innerHTML = eventsData.map(event => `
        <article class="event-card ${event.featured ? 'featured' : ''}">
            <div class="event-image">
                <div class="event-gradient"></div>
                ${event.featured ? '<div class="event-badge">FEATURED</div>' : ''}
                <div class="event-date-badge">
                    <span class="month">${event.date.month}</span>
                    <span class="day">${event.date.day}</span>
                </div>
            </div>
            <div class="event-content">
                <div class="event-category">${event.category}</div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-meta">
                    <div class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                        <span>${event.time}</span>
                    </div>
                    <div class="meta-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${event.location}</span>
                    </div>
                </div>
                <p class="event-description">${event.description}</p>
                <div class="event-footer">
                    <span class="event-price">From $${event.price}</span>
                    <a href="#" class="btn-event">Get Tickets</a>
                </div>
            </div>
        </article>
    `).join('');
}

// ===== Form Handling =====
function initForms() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}

// ===== Navbar Scroll Effect =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 26, 0.85)';
        }
    });
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    initMobileMenu();
    initNavigation();
    renderEvents();
    initForms();
    initNavbarScroll();
});
