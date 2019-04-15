function populateProjectCards(projects) {
    console.log(projects);
}

function init() {
    fetch('./content/projects.json')
        .then(data => data.json())
        .then(data => {
            populateProjectCards(data);
        });
}

(function () {
    init();
}());