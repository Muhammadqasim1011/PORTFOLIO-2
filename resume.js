let educations = [
    {
        icon: "./Assets/mortarboard.png",
        instituteAndDate: "GDC Badaber Peshawar / 2018-2020",
        qualification: "FSC Computer Science",
        description:
            "Completed FSC with a focus on Computer Science, gaining a strong foundation in programming, algorithms, and data structures.",
    },
    {
        icon: "./Assets/mortarboard.png",
        instituteAndDate: "GDC Hayatabad Peshawar / 2020-Onwards",
        qualification: "BS Physics",
        description:
            "Pursuing a BS in Physics, where I have developed a deep understanding of physical principles, along with strong analytical and problem-solving skills.",
    },
    {
        icon: "./Assets/mortarboard.png",
        instituteAndDate: "SMIT / 2023-Onwards",
        qualification: "Web & Mobile App Development",
        description:
            "Enrolled in a comprehensive program covering both web and mobile app development, with hands-on experience in building responsive and dynamic applications.",
    },
];

let experiences = [
    {
        icon: "./Assets/briefcase.png",
        company: "Internncraft / March 2024 - July 2024",
        role: "Web Development Intern",
        description:
            "Worked on various web development projects including frontend design and backend integration, focusing on creating responsive and user-friendly interfaces.",
    },
    {
        icon: "./Assets/briefcase.png",
        company: "Hoop Interactive / 2023 - Present",
        role: "Graphic Designer",
        description:
            "Developed and maintained websites for local businesses, specializing in responsive design, SEO optimization, and modern web technologies.",
    },
    {
        icon: "./Assets/briefcase.png",
        company: "TechZone Solutions / 2022 - 2023",
        role: "Junior Web Developer",
        description:
            "Assisted in the development of web applications, performed code reviews, and collaborated with the design team to improve user experience for various client projects.",
    },
];

let skills = [
    { skill: 'HTML/CSS', level: '95%' },
    { skill: 'Web Design', level: '80%' },
    { skill: 'JavaScript', level: '90%' },
    { skill: 'React JS', level: '90%' },
    { skill: 'Node.js', level: '95%' },
    { skill: 'WordPress', level: '80%' },
    { skill: 'Responsiveness', level: '85%' },
    { skill: 'Git', level: '88%' }
];

let educationCardsContainer = document.querySelector(".education-cards");
let experienceCardsContainer = document.querySelector(".experience-cards");

educations.forEach((education) => {
    let eduCardDiv = document.createElement("div");
    eduCardDiv.classList.add("education-card");

    eduCardDiv.innerHTML = `
        <div class="card-img-box"><img src="${education.icon}" alt="${education.qualification}"></div>
        <div class="card-content">
        <p>${education.instituteAndDate}</p>
        <h3>${education.qualification}</h3>
        <p>${education.description}</p>
        </div>
    `;
    educationCardsContainer.appendChild(eduCardDiv);
});

experiences.forEach((education) => {
    let eduCardDiv = document.createElement("div");
    eduCardDiv.classList.add("education-card");

    eduCardDiv.innerHTML = `
        <div class="card-img-box"><img src="${education.icon}" alt="${education.qualification}"></div>
        <div class="card-content">
        <p>${education.company}</p>
        <h3>${education.role}</h3>
        <p>${education.description}</p>
        </div>
    `;
    experienceCardsContainer.appendChild(eduCardDiv);
});


let skillsContainer = document.querySelector('.my-skills');

skills.forEach(({ skill, level }) => {
    let skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');

    let skillName = document.createElement('p');
    skillName.textContent = skill;
    skillItem.appendChild(skillName);

    let skillBar = document.createElement('div');
    skillBar.classList.add('skill-bar');
    skillBar.style.background = 'var(--gray-clr)';

    let skillLevel = document.createElement('div');
    skillLevel.classList.add('skill-level');
    skillLevel.style.width = level;
    skillLevel.style.background = 'var(--pink-clr)';

    skillBar.appendChild(skillLevel);
    skillItem.appendChild(skillBar);
    skillsContainer.appendChild(skillItem);
});


let options = {
    root: null,
    threshold: 0.01
};

// Create the Intersection Observer
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let skillLevel = entry.target.querySelector('.skill-bar');
            skillLevel.style.width = skillLevel.dataset.level;  // Set width to the stored level
            skillLevel.classList.add('animate-skill');
        }
    });
}, options);

// Observe each skill item
document.querySelectorAll('.skill-item').forEach(item => {
    observer.observe(item);
});