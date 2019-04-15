
function populateProjectCards(projects) {
    const projectListContainer = document.getElementById('projectList');
    projects.forEach(projectItem => {
        const projectCard = document.createElement('project-card');

        projectCard.setAttribute('alt', projectItem.img[0].alt);
        projectCard.setAttribute('src', projectItem.img[0].src);
        projectCard.setAttribute('href', projectItem.link[0].href);
        projectCard.setAttribute('label', projectItem.link[0].label);
        projectCard.setAttribute('description', projectItem.description);

        projectListContainer.appendChild(projectCard)

    });
}

function getProjectsData() {
    fetch('./assets/data/projects.json')
        .then(data => data.json())
        .then(data => {
            populateProjectCards(data.projects);
    });
}

function init() {
    getProjectsData();
}

(function () {
    init();
}());