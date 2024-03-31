document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.body.className = currentTheme;
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        let theme = 'light-theme';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
        }
        localStorage.setItem('theme', theme);
    });

    // Dynamic loading of experiences and skills
    const experiences = [
        {"role": "Senior QA Engineer", "company": "Tech Solutions Inc.", "years": "2021-Present", "details": "Leading the QA team..."},
        {"role": "QA Engineer", "company": "Innovatech Ltd.", "years": "2018-2021", "details": "Implemented automated testing..."}
    ];

    const skills = ["Automated Testing Tools: Selenium, Postman", "Programming Languages: JavaScript, Python"];

    experiences.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.innerHTML = `<h3>${exp.role} at ${exp.company}</h3><p>${exp.years}</p><p>${exp.details}</p>`;
        document.getElementById('experience').appendChild(expDiv);
    });

    const skillsList = document.createElement('ul');
    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
    document.getElementById('skills').appendChild(skillsList);

    // Form submission placeholder
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message. This form is just a placeholder.');
    });
});
