"use strict";
function populateProjectCards(projects) {
    const projectListContainer = document.getElementById('projectList');
    projects.forEach(projectItem => {
        const projectCard = document.createElement('project-card');
        projectCard.setAttribute('alt', projectItem.img[0].alt);
        projectCard.setAttribute('src', projectItem.img[0].src);
        projectCard.setAttribute('href', projectItem.link[0].href);
        projectCard.setAttribute('label', projectItem.link[0].label);
        projectCard.setAttribute('description', projectItem.description);
        projectListContainer.appendChild(projectCard);
    });
}
function populatePhotographyCards(photos) {
    const photoListContainer = document.getElementById('photoList');
    photos.forEach(photoItem => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo-card');
        photoElement.innerHTML = `<a class="photo-card-link" href="${photoItem.links.html}"><img src="${photoItem.urls.small}" alt="photoItem.alt_description" /></a>`;
        photoListContainer.appendChild(photoElement);
    });
}
function populateBlogPosts(blogPosts) {
}
function getProjectsData() {
    fetch('./assets/data/projects.json')
        .then(data => data.json())
        .then(data => populateProjectCards(data.projects));
}
function getMyUnsplashPhotos() {
    const unsplashApiUrl = 'https://api.unsplash.com/';
    const unsplashApplicationId = '1f5dcf4016f2c19b12748af335ca75d5692f5c00a572a7161cb4b9db8fe866d3';
    fetch(`${unsplashApiUrl}users/gab_garoche/photos?order_by=popular&stats=true&client_id=${unsplashApplicationId}`)
        .then(photos => photos.json())
        .then(photos => populatePhotographyCards(photos));
}
function getDevToPosts() {
    const devToApiUrl = 'https://dev.to/api/articles?username=gablaroche';
    fetch(devToApiUrl)
        .then(data => data.json())
        .then(data => populateBlogPosts(data));
}
function init() {
    getProjectsData();
    getMyUnsplashPhotos();
}
(function () {
    init();
}());
//# sourceMappingURL=index.js.map