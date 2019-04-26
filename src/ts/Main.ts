function populatePhotographyCards(photos) {
    const photoListContainer = document.getElementById('photoList');

    photos.forEach( photoItem => {
        const photoElement = document.createElement('div');
        photoElement.classList.add('photo-card');
        photoElement.innerHTML = `<a class="photo-card-link" href="${photoItem.links.html}"><img src="${photoItem.urls.small}" alt="photoItem.alt_description" /></a>`;
        photoListContainer.appendChild(photoElement);
    })
}

function getMyUnsplashPhotos() {
    const unsplashApiUrl = 'https://api.unsplash.com/';
    const unsplashApplicationId =  '1f5dcf4016f2c19b12748af335ca75d5692f5c00a572a7161cb4b9db8fe866d3';

    fetch(`${unsplashApiUrl}users/gab_garoche/photos?order_by=popular&stats=true&client_id=${unsplashApplicationId}`)
        .then(photos => photos.json())
        .then(photos => populatePhotographyCards(photos));
}

function init() {
    getMyUnsplashPhotos();
}

(function () {
    init();
}());