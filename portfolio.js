let projects = [
    {
        projectName : "blog website",
        projectImgSrc : "./Assets/project/blog website.png",
        projectDescription : "Jane Bloglife is a responsive and stylish fashion blog website designed to showcase the latest trends, share fashion tips, and connect with a community of fashion enthusiasts.",
        projectTechnologies : ['HTML', 'CSS'],
        projectLink : "https://muhammadqasim1011.github.io/Blog-Website/",
        githubLink : "https://github.com/Muhammadqasim1011/Blog-Website",
        projectType : "brand website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "lets-travel",
        projectImgSrc : "./Assets/project/lets-travel.png",
        projectDescription : "This project is a Tour Booking application built using React and Vite. It allows users to browse a list of available tours, view details about each tour, and book a tour.",
        projectTechnologies : ['React-JS', 'CSS'],
        projectLink : "https://lets-travel-ea5wk98ye-muhammad-qasims-projects-9c2a3c46.vercel.app/",
        githubLink : "https://github.com/Muhammadqasim1011/Lets-Travel",
        projectType : "brand Website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "landing-page",
        projectImgSrc : "./Assets/project/landing-page.png",
        projectDescription : "A sleek and responsive landing page for a construction company, built using HTML, CSS, and JavaScript",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "https://muhammadqasim1011.github.io/LANDING-PAGE/",
        githubLink : "https://github.com/Muhammadqasim1011/LANDING-PAGE",
        projectType : "landing page", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "portfolio",
        projectImgSrc : "./Assets/project/portfolio-2.png",
        projectDescription : "Utilized HTML, CSS, and JavaScript to deliver a fully responsive and engaging online presence tailored to the client's needs",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "https://muhammadqasim1011.github.io/PORTFOLIO-2/",
        githubLink : "https://github.com/Muhammadqasim1011/PORTFOLIO-2",
        projectType : "portfolio website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "Muhammad-Qasim",
        projectImgSrc : "./Assets/project/Muhammad-Qasim.png",
        projectDescription : "Muhammad Qasim's personal portfolio website serves as an online showcase of his professional skills, experience, projects, and accomplishments.",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "Muhammad-Qasimhttps://muhammadqasim1011.github.io/Muhammad-Qasim/",
        githubLink : "https://github.com/Muhammadqasim1011/Muhammad-Qasim",
        projectType : "portfolio website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "karma-shop",
        projectImgSrc : "./Assets/project/karma-shop.png",
        projectDescription : "This project involves creating an interactive and visually appealing exclusive product deal section with an 'Add to Cart' feature.",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "https://muhammadqasim1011.github.io/Karma-Shop/",
        githubLink : "https://github.com/Muhammadqasim1011/Karma-Shop",
        projectType : "brand website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "clone-bitcoderlabs",
        projectImgSrc : "./Assets/project/clone-bitcoderlabs.png",
        projectDescription : "This project is a responsive website layout built with HTML, CSS, and JavaScript. The design is modern and adapts well to different screen sizes and devices.",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "https://muhammadqasim1011.github.io/Bit-Coder-Lab/",
        githubLink : "https://github.com/Muhammadqasim1011/Bit-Coder-Lab",
        projectType : "brand website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "clone-farmhub-africa",
        projectImgSrc : "./Assets/project/clone-farmhub-africa.png",
        projectDescription : "This project is a responsive website layout built with HTML, CSS, and JavaScript. The design is modern and adapts well to different screen sizes and devices.",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "https://muhammadqasim1011.github.io/Farmhub-Africa/",
        githubLink : "https://github.com/Muhammadqasim1011/Farmhub-Africa",
        projectType : "brand website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "resturant-website",
        projectImgSrc : "./Assets/project/resturant-website.png",
        projectDescription : "Restaurant Website Project This project aims to develop a modern and user-friendly website for a restaurant.",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "https://muhammadqasim1011.github.io/Restaurant-website---Intern/",
        githubLink : "https://github.com/Muhammadqasim1011/Restaurant-website---Intern",
        projectType : "brand website", //Landing Page || Portfolio Website|| Brand Website
    },
    {
        projectName : "law-website",
        projectImgSrc : "./Assets/project/law-website.png",
        projectDescription : "The Legal Consultancy Hub is a professional website designed for a law firm to showcase their services, expertise, and team members.",
        projectTechnologies : ['HTML', 'CSS', 'JavaScript'],
        projectLink : "https://muhammadqasim1011.github.io/Law-Website/",
        githubLink : "https://github.com/Muhammadqasim1011/Law-Website",
        projectType : "brand website", //Landing Page || Portfolio Website|| Brand Website
    },
];

const projectCardsContainer = document.querySelector('.project-cards');
const projectButtons = document.querySelectorAll('.project-item');

function renderProjects(filterType) {
    projectCardsContainer.innerHTML = '';

    const filteredProjects = filterType === 'ALL' ? projects : projects.filter(project => project.projectType.toLowerCase() === filterType.toLowerCase())
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML =`
            <img src="${project.projectImgSrc}" alt="${project.projectName}">
            <h3>${project.projectName}</h3>
            <p>${project.projectDescription}</p>
            <div class="links">
                <a href="${project.projectLink}" target="_blank"><img src="./Assets/link.png" alt="Live Link"></a>
                <a href="${project.githubLink}" target="_blank"><img src="./Assets/github.png" alt="GitHub Link"></a>
            </div>
        `;
        projectCardsContainer.appendChild(projectCard);
    });
}

renderProjects('ALL')

projectButtons.forEach(button => {
    button.addEventListener('click', () =>{
        const filterType = button.getAttribute('data-type')
        renderProjects(filterType)
    })
});