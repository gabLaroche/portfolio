define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PhotographyCard {
        constructor(photos) {
            this.photos = photos;
            this.populatePhotographyCards();
        }
        populatePhotographyCards() {
            const photoListContainer = document.getElementById('photoList');
            if (photoListContainer) {
                this.photos.forEach(photoItem => {
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
    exports.PhotographyCard = PhotographyCard;
});
//# sourceMappingURL=PhotographyCard.js.map