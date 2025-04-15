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

// Menu items data
const menuItems = [
    {
        name: "Bruschetta al Pomodoro",
        description: "Pão italiano grelhado com azeite, alho, tomates frescos e manjericão.",
        price: "R$ 29,90",
        category: "antipasti",
        popular: true
    },
    {
        name: "Caprese Salad",
        description: "Tomate, mozzarella di bufala, manjericão fresco e azeite extra virgem.",
        price: "R$ 34,90",
        category: "antipasti"
    },
    {
        name: "Spaghetti Bolognese",
        description: "Spaghetti com molho de carne tradicional italiano, preparado com vinho tinto.",
        price: "R$ 54,90",
        category: "pasta",
        popular: true
    },
    {
        name: "Penne all'Arrabbiata",
        description: "Penne com molho de tomate picante, alho e salsa.",
        price: "R$ 49,90",
        category: "pasta"
    },
    {
        name: "Gnocchi al Pesto",
        description: "Gnocchi caseiro com pesto de manjericão fresco, pinoli e queijo parmesão.",
        price: "R$ 59,90",
        category: "pasta"
    },
    {
        name: "Pizza Quattro Formaggi",
        description: "Pizza com combinação de quatro queijos: mozzarella, gorgonzola, parmesão e provolone.",
        price: "R$ 69,90",
        category: "pizza",
        popular: true
    },
    {
        name: "Pizza Diavola",
        description: "Pizza com molho de tomate, mozzarella, salame picante e pimenta calabresa.",
        price: "R$ 72,90",
        category: "pizza"
    },
    {
        name: "Pizza Funghi e Tartufo",
        description: "Pizza com molho branco, mozzarella, cogumelos frescos e óleo de trufa.",
        price: "R$ 79,90",
        category: "pizza"
    },
    {
        name: "Tiramisù",
        description: "Clássica sobremesa italiana com café, mascarpone e cacau em pó.",
        price: "R$ 29,90",
        category: "dolci",
        popular: true
    },
    {
        name: "Panna Cotta",
        description: "Sobremesa cremosa com calda de frutas vermelhas.",
        price: "R$ 27,90",
        category: "dolci"
    },
    {
        name: "Cannoli Siciliani",
        description: "Tubos crocantes recheados com ricota doce e gotas de chocolate.",
        price: "R$ 32,90",
        category: "dolci"
    },
    {
        name: "Affogato",
        description: "Sorvete de baunilha artesanal 'afogado' em espresso italiano.",
        price: "R$ 24,90",
        category: "dolci"
    }
];

// Function to render menu items
function renderMenuItems(category = 'all') {
    const menuContainer = document.getElementById('menu-items');
    menuContainer.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300';
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <div class="p-6 flex">
                <div class="flex-1">
                    <div class="flex items-start justify-between">
                        <h3 class="title-font text-xl font-bold text-gray-800">${item.name}</h3>
                        ${item.popular ? '<span class="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full ml-2">Popular</span>' : ''}
                    </div>
                    <p class="text-gray-600 mt-2">${item.description}</p>
                    <span class="font-bold text-gray-800 mt-4 block">${item.price}</span>
                </div>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Initial render
renderMenuItems();

// Category filter buttons
document.querySelectorAll('.menu-category-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Update active button
        document.querySelectorAll('.menu-category-btn').forEach(btn => {
            btn.classList.remove('bg-yellow-600', 'text-white');
            btn.classList.add('bg-white', 'text-gray-800', 'hover:bg-yellow-600', 'hover:text-white');
        });
        
        this.classList.remove('bg-white', 'text-gray-800', 'hover:bg-yellow-600', 'hover:text-white');
        this.classList.add('bg-yellow-600', 'text-white');
        
        // Filter menu
        const category = this.dataset.category;
        renderMenuItems(category);
    });
});

// Form submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Obrigado por sua reserva! Entraremos em contato para confirmar.');
        this.reset();
    });
}