  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Initialize Swiper carousel
const swiper = new Swiper('.featured-carousel', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Portfolio items data
const portfolioItems = [
    {
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Retrato em Preto e Branco",
        category: "retrato",
        year: "2023"
    },
    {
        image: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Horizonte Urbano",
        category: "arquitetura",
        year: "2022"
    },
    {
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
        title: "Moda Contemporânea",
        category: "moda",
        year: "2023"
    },
    {
        image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        title: "Olhar Profundo",
        category: "retrato",
        year: "2022"
    },
    {
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Arranha-céus",
        category: "arquitetura",
        year: "2021"
    },
    {
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Show Musical",
        category: "conceitual",
        year: "2023"
    },
    {
        image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Montanhas Nebulosas",
        category: "conceitual",
        year: "2020"
    },
    {
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        title: "Perfil em Contraluz",
        category: "retrato",
        year: "2023"
    },
    {
        image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
        title: "Campo de Flores",
        category: "conceitual",
        year: "2020"
    }
];

// Function to render portfolio items
function renderPortfolioItems(category = 'all', limit = 6) {
    const portfolioContainer = document.getElementById('portfolio-grid');
    
    // Clear existing items if loading all
    if (category === 'all') {
        portfolioContainer.innerHTML = '';
    }
    
    const filteredItems = category === 'all' 
        ? portfolioItems 
        : portfolioItems.filter(item => item.category === category);
    
    // Limit the number of items to show
    const itemsToShow = filteredItems.slice(0, limit);
    
    itemsToShow.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'gallery-item relative rounded-xl overflow-hidden h-96';
        portfolioItem.dataset.category = item.category;
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
            <div class="absolute bottom-0 left-0 right-0 p-8 text-white z-10 item-info">
                <h3 class="font-bold text-xl mb-1">${item.title}</h3>
                <p class="text-accent font-medium">${item.year}</p>
            </div>
        `;
        
        portfolioContainer.appendChild(portfolioItem);
    });
}

// Initial render
renderPortfolioItems();

// Portfolio filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('bg-accent', 'text-white', 'border-accent');
            btn.classList.add('border-gray-700', 'text-gray-400', 'hover:border-accent', 'hover:text-accent');
        });
        
        this.classList.remove('border-gray-700', 'text-gray-400', 'hover:border-accent', 'hover:text-accent');
        this.classList.add('bg-accent', 'text-white', 'border-accent');
        
        // Filter portfolio
        const category = this.dataset.filter;
        renderPortfolioItems(category);
    });
});

// Load more button
let currentLimit = 6;
document.getElementById('load-more').addEventListener('click', function() {
    currentLimit += 3;
    renderPortfolioItems('all', currentLimit);
    
    // Hide button if all items are shown
    if (currentLimit >= portfolioItems.length) {
        this.style.display = 'none';
    }
});

// Form submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Obrigado por sua mensagem. Entrarei em contato em breve.');
        this.reset();
    });
}

// Add animation classes when scrolling
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            const animationClass = element.classList[1];
            element.classList.add(animationClass);
        }
    });
};

// Run on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Parallax effect for hero image
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        const scrollPosition = window.pageYOffset;
        parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
    }
});