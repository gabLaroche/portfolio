export class PhotographyCard {

    private photos: Array<any>;

    public constructor(photos: Array<any>) {
        this.photos = photos;
        this.populatePhotographyCards();
    }

    private populatePhotographyCards() {
        const photoListContainer: HTMLElement|null = document.getElementById('photoList');

        if (photoListContainer) {
            this.photos.forEach( photoItem => {
                const photoElement = document.createElement('div');
                photoElement.classList.add('photo-card');
                photoElement.innerHTML = `
                    <a class="photo-card-link" href="${photoItem.links.html}">
                        <img class="photo-card-img" src="${photoItem.urls.small}" alt="photoItem.alt_description" />
                    </a>`;
                photoListContainer.appendChild(photoElement);
            });
        }
    }
}