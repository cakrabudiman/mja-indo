const projects = [
  {
    title: 'PLTS Off Grid 7 Lokasi – UNDP Project',
    category: 'Renewable Energy',
    location: 'Sulawesi Tenggara',
    year: '2023',
    capacity: 'Multiple sites',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80',
    description: 'Off-grid solar energy installation across multiple locations under the UNDP project initiative.'
  },
  {
    title: 'PLTS Rooftop Shell LOBP Marunda',
    category: 'Renewable Energy',
    location: 'Marunda, Bekasi',
    year: '2022',
    capacity: '800 kWp',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    description: 'Industrial rooftop solar photovoltaic system for Shell LOBP Marunda.'
  },
  {
    title: 'PLTS IAMI Karawang Plant',
    category: 'Renewable Energy',
    location: 'Karawang',
    year: '2022',
    capacity: '123,12 kWp',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
    description: 'Solar rooftop solution for the IAMI Karawang production facility.'
  },
  {
    title: 'PLTS Off Grid INA CBT',
    category: 'Renewable Energy',
    location: 'Labuan Bajo – Rokatenda, NTT',
    year: '2021',
    capacity: 'Off-grid system',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
    description: 'Off-grid solar project design for remote regional areas.'
  },
  {
    title: 'PLTS Rooftop Unilever Head Office',
    category: 'Renewable Energy',
    location: 'BSD',
    year: '2019',
    capacity: '198 kWp',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    description: 'Corporate rooftop solar installation for Unilever Head Office premises.'
  },
  {
    title: 'PLTS 250 kWp Desa Tribur',
    category: 'Renewable Energy',
    location: 'Alor',
    year: '2024',
    capacity: '250 kWp',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
    description: 'Renewable energy initiative to support village infrastructure and local community needs.'
  },
  {
    title: 'Infrastruktur Pertanian Cisaat',
    category: 'Agriculture',
    location: 'Setu, Bekasi',
    year: '2024',
    capacity: '60 hektar',
    image: 'https://images.unsplash.com/photo-1464226184884-fa52ac9fc5a0?auto=format&fit=crop&w=900&q=80',
    description: 'Large-scale agricultural infrastructure development covering a 60-hectare area.'
  },
  {
    title: 'PLTS Rooftop ASO',
    category: 'Renewable Energy',
    location: '35 cabang',
    year: '2022',
    capacity: 'Multi-site rooftop systems',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80',
    description: 'Rooftop solar installation across 35 branch locations.'
  }
];

const filterButtons = document.getElementById('project-filters');
const projectGrid = document.getElementById('project-grid');
const projectCategories = ['All', ...new Set(projects.map((project) => project.category))];
let projectFilter = 'All';

const renderProjects = () => {
  if (!projectGrid) return;
  const filtered = projects.filter((project) => projectFilter === 'All' || project.category === projectFilter);

  projectGrid.innerHTML = filtered.map((project) => `
    <article class="project-card">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="card-body">
        <div class="project-meta">
          <span>${project.category}</span>
          <span>${project.year}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.location}</p>
        <p>${project.capacity}</p>
      </div>
    </article>
  `).join('');
};

if (filterButtons) {
  filterButtons.innerHTML = projectCategories.map((category) => `
    <button class="filter-button ${category === projectFilter ? 'active' : ''}" data-project-category="${category}">${category}</button>
  `).join('');

  filterButtons.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-button');
    if (!button) return;
    projectFilter = button.dataset.projectCategory;
    renderProjects();
    filterButtons.querySelectorAll('.filter-button').forEach((el) => el.classList.toggle('active', el.dataset.projectCategory === projectFilter));
  });
}

renderProjects();

const homeProjects = document.getElementById('home-projects');
if (homeProjects) {
  homeProjects.innerHTML = projects.slice(0, 3).map((project) => `
    <article class="project-card">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="card-body">
        <div class="project-meta">
          <span>${project.category}</span>
          <span>${project.year}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.location}</p>
        <p>${project.capacity}</p>
        <a href="pages/projects.html" class="text-link">View Project</a>
      </div>
    </article>
  `).join('');
}
