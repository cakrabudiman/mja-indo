const projects = [
  {
    title: 'PLTS Off Grid 7 Lokasi – UNDP Project',
    category: 'Renewable Energy',
    location: 'Sulawesi Tenggara',
    year: '2023',
    capacity: 'Multiple sites',
    description: 'Off-grid solar energy installation across multiple locations under the UNDP project initiative.'
  },
  {
    title: 'PLTS Rooftop Shell LOBP Marunda',
    category: 'Renewable Energy',
    location: 'Marunda, Bekasi',
    year: '2022',
    capacity: '800 kWp',
    description: 'Industrial rooftop solar photovoltaic system for Shell LOBP Marunda.'
  },
  {
    title: 'PLTS IAMI Karawang Plant',
    category: 'Renewable Energy',
    location: 'Karawang',
    year: '2022',
    capacity: '123,12 kWp',
    description: 'Solar rooftop solution for the IAMI Karawang production facility.'
  },
  {
    title: 'PLTS Off Grid INA CBT',
    category: 'Renewable Energy',
    location: 'Labuan Bajo – Rokatenda, NTT',
    year: '2021',
    capacity: 'Off-grid system',
    description: 'Off-grid solar project design for remote regional areas.'
  },
  {
    title: 'PLTS Rooftop Unilever Head Office',
    category: 'Renewable Energy',
    location: 'BSD',
    year: '2019',
    capacity: '198 kWp',
    description: 'Corporate rooftop solar installation for Unilever Head Office premises.'
  },
  {
    title: 'PLTS 250 kWp Desa Tribur',
    category: 'Renewable Energy',
    location: 'Alor',
    year: '2024',
    capacity: '250 kWp',
    description: 'Renewable energy initiative to support village infrastructure and local community needs.'
  },
  {
    title: 'Infrastruktur Pertanian Cisaat',
    category: 'Agriculture',
    location: 'Setu, Bekasi',
    year: '2024',
    capacity: '60 hektar',
    description: 'Large-scale agricultural infrastructure development covering a 60-hectare area.'
  },
  {
    title: 'PLTS Rooftop ASO',
    category: 'Renewable Energy',
    location: '35 cabang',
    year: '2022',
    capacity: 'Multi-site rooftop systems',
    description: 'Rooftop solar installation across 35 branch locations.'
  }
];

const createProjectCard = (project, includeLink = false) => {
  const projectType = project.category === 'Agriculture' ? 'agriculture' : 'energy';
  const projectMark = project.category === 'Agriculture' ? 'AG' : 'RE';

  return `
    <article class="project-card">
      <div class="project-visual project-visual-${projectType}" aria-hidden="true">
        <span class="project-visual-mark">${projectMark}</span>
        <span class="project-visual-year">${project.year}</span>
      </div>
      <div class="card-body">
        <div class="project-meta">
          <span>${project.category}</span>
        </div>
        <h3>${project.title}</h3>
        <p class="project-location">${project.location}</p>
        <div class="project-capacity">
          <span>Project scale</span>
          <strong>${project.capacity}</strong>
        </div>
        ${includeLink ? '<a href="pages/projects.html" class="text-link">View Project</a>' : ''}
      </div>
    </article>
  `;
};

const filterButtons = document.getElementById('project-filters');
const projectGrid = document.getElementById('project-grid');
const projectCategories = ['All', ...new Set(projects.map((project) => project.category))];
let projectFilter = 'All';

const renderProjects = () => {
  if (!projectGrid) return;
  const filtered = projects.filter((project) => projectFilter === 'All' || project.category === projectFilter);

  projectGrid.innerHTML = filtered.map((project) => createProjectCard(project)).join('');
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
  homeProjects.innerHTML = projects.slice(0, 3).map((project) => createProjectCard(project, true)).join('');
}
