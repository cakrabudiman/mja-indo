const productImageBase = new URL('../../assets/images/products/', document.currentScript.src);

const products = [
  {
    name: 'Monocrystalline PV Module',
    category: 'PV Modules',
    image: new URL('Monocrystalline-PV-Module.jpg', productImageBase).href,
    description: 'High-efficiency solar panel option suitable for industrial and commercial applications.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Polycrystalline PV Module',
    category: 'PV Modules',
    image: new URL('Polycrystalline-PV-Module.jpg', productImageBase).href,
    description: 'Reliable PV module for projects requiring efficient and practical solar generation solutions.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'On Grid Inverter',
    category: 'Inverters',
    image: new URL('On-Grid-Inverter.jpg', productImageBase).href,
    description: 'Inverter system designed for grid-connected solar applications.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Off Grid Inverter',
    category: 'Inverters',
    image: new URL('Off-Grid-Inverter.jpg', productImageBase).href,
    description: 'Standalone solar inverter option for areas without utility grid access.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Hybrid Inverter',
    category: 'Inverters',
    image: new URL('Hybrid-Inverter.webp', productImageBase).href,
    description: 'Flexible inverter solution for hybrid solar generation and storage integration.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Lithium Battery',
    category: 'Batteries',
    image: new URL('Lithium-Battery.jpg', productImageBase).href,
    description: 'Battery solution for efficient energy storage and load balancing.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'VRLA Battery',
    category: 'Batteries',
    image: new URL('VRLA-Battery.webp', productImageBase).href,
    description: 'Valve-regulated lead-acid battery designed for reliable backup energy support.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'OPzV Battery',
    category: 'Batteries',
    image: new URL('OPzV-Battery.jpg', productImageBase).href,
    description: 'Energy storage component suitable for industrial backup power applications.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Street Light',
    category: 'LED Lighting',
    image: new URL('Street-Light.jpg', productImageBase).href,
    description: 'Outdoor lighting solution for roads, public spaces, and site facilities.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Bulb LED',
    category: 'LED Lighting',
    image: new URL('Bulb-LED.jpg', productImageBase).href,
    description: 'General lighting option for commercial and residential energy efficiency applications.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Flood / Spotlight',
    category: 'LED Lighting',
    image: new URL('Flood-Spotlight.jpg', productImageBase).href,
    description: 'Focused lighting solution for open-area illumination and security enhancement.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'All in One Solar Street Light',
    category: 'LED Lighting',
    image: new URL('AIO-Solar-Street-Light.jpg', productImageBase).href,
    description: 'Integrated solar lighting fixture designed for simplified deployment and lower maintenance.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'MPPT Solar Charge Controller',
    category: 'Solar Charge Controller',
    image: new URL('MPPT-Solar-Charge-Controller.jpg', productImageBase).href,
    description: 'High-efficiency charge controller for maximizing solar harvesting and battery health.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'PWM Solar Charge Controller',
    category: 'Solar Charge Controller',
    image: new URL('PWM-Solar-Charge-Controller.jpg', productImageBase).href,
    description: 'Simple and practical controller option for smaller renewable energy installations.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Submersible Pump',
    category: 'Solar Pumps',
    image: new URL('Submersible-Pump.jpg', productImageBase).href,
    description: 'Solar-powered pump suitable for water extraction and irrigation applications.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  },
  {
    name: 'Surface Pump',
    category: 'Solar Pumps',
    image: new URL('Surface-Pump.jpg', productImageBase).href,
    description: 'Pump option for above-ground water delivery and irrigation support.',
    brand: 'Placeholder brand',
    specs: 'To be confirmed by the supplier.'
  }
];

const categories = ['All', ...new Set(products.map((product) => product.category))];
const filters = document.getElementById('product-filters');
const grid = document.getElementById('products-grid');
const searchInput = document.getElementById('product-search');

let activeCategory = 'All';

const createProductCard = (product) => `
  <article class="info-card product-card">
    <img src="${product.image}" alt="Illustrative image for ${product.name}" loading="lazy" />
    <div class="card-body">
      <strong>${product.category}</strong>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><strong>Brand:</strong> ${product.brand}</p>
      <p><strong>Specs:</strong> ${product.specs}</p>
      <a href="https://wa.me/6281315002070?text=${encodeURIComponent(`Halo PT. Matahari Jaya Abadi, saya tertarik dengan produk ${product.name}. Mohon informasi lebih lanjut.`)}" target="_blank" rel="noreferrer" class="btn btn-primary">Request Quotation</a>
    </div>
  </article>
`;

const renderProducts = () => {
  if (!grid) return;

  const searchValue = (searchInput ? searchInput.value : '').trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = !searchValue || product.name.toLowerCase().includes(searchValue) || product.category.toLowerCase().includes(searchValue);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.length ? filtered.map(createProductCard).join('') : '<p class="empty-state">No products match your search.</p>';
};

if (filters) {
  filters.innerHTML = categories.map((category) => `
    <button class="filter-button ${category === activeCategory ? 'active' : ''}" data-category="${category}">${category}</button>
  `).join('');

  filters.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-button');
    if (!button) return;
    activeCategory = button.dataset.category;
    renderProducts();
    filters.querySelectorAll('.filter-button').forEach((el) => el.classList.toggle('active', el.dataset.category === activeCategory));
  });
}

if (searchInput) {
  searchInput.addEventListener('input', renderProducts);
}

renderProducts();
