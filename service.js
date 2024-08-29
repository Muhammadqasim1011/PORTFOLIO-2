let services = [
    {
        src: './Assets/code.png',
        title: 'Web Design',
        para: 'Craft visually appealing and user-friendly designs using HTML and CSS, ensuring responsive layouts.'
    },
    {
        src: './Assets/ux-design.png',
        title: 'Frontend Development',
        para: 'Develop interactive and dynamic websites using JavaScript, creating seamless user experiences.'
    },
    {
        src: './Assets/phone.png',
        title: 'Responsive Design',
        para: 'Ensure websites look great on all devices with CSS media queries and flexible layouts.'
    },
    {
        src: './Assets/slow-motion.png',
        title: 'JavaScript Animation',
        para: 'Enhance user engagement with smooth animations and effects powered by JavaScript.'
    },
    {
        src: './Assets/web-page.png',
        title: 'SEO Optimization',
        para: 'Optimize HTML structure and CSS for better search engine rankings, driving more traffic to your site.'
    },
    {
        src: './Assets/settings.png',
        title: 'Website Maintenance',
        para: 'Keep your website up-to-date with regular updates and fixes using HTML, CSS, and JavaScript.'
    }
];


let servicePlanes = [
    {
        plan: 'Basic Plan',
        price: '$99/month',
        features: [
            'Responsive Web Design',
            'Basic SEO Optimization',
            '5 Pages Included',
            'Email Support'
        ]
    },
    {
        plan: 'Standard Plan',
        price: '$199/month',
        features: [
            'Custom Web Design',
            'Advanced SEO Optimization',
            '10 Pages Included',
            'Priority Email Support',
            '1 Hour Monthly Maintenance'
        ]
    },
    {
        plan: 'Premium Plan',
        price: '$299/month',
        features: [
            'Fully Custom Web Design',
            'Complete SEO Optimization',
            'Unlimited Pages',
            '24/7 Support',
            'Monthly Maintenance and Updates',
            'E-commerce Integration'
        ]
    }
];


let serviceCardsContainer = document.querySelector('.service-cards');
let servicePlanesContainer = document.querySelector('.service-planes');

// Dynamically insert service cards
services.forEach(service => {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${service.src}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.para}</p>
    `;
    serviceCardsContainer.appendChild(card);
});

servicePlanes.forEach(plan => {
    let planDiv = document.createElement('div');
    planDiv.classList.add('plan');
    
    // Create the list of features
    let featuresList = '<ul>';
    plan.features.forEach(feature => {
        featuresList += `<li>${feature}</li>`;
    });
    featuresList += '</ul>';
    
    planDiv.innerHTML = `
        <h3>${plan.plan}</h3>
        <p>${plan.price}</p>
        ${featuresList}
    `;
    
    servicePlanesContainer.appendChild(planDiv);
});