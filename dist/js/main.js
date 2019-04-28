define(["require", "exports", "./SwitchLang", "./PhotographyCard"], function (require, exports, SwitchLang_1, PhotographyCard_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    if (document.readyState !== 'loading') {
        const switchLangBtn = document.getElementById('nav-switch-lang-container');
        new SwitchLang_1.SwitchLang(switchLangBtn);
    }
    else {
        document.addEventListener("DOMContentLoaded", () => {
            const switchLangBtn = document.getElementById('nav-switch-lang-container');
            new SwitchLang_1.SwitchLang(switchLangBtn);
        });
    }
    /***
     * TODO Check if obj in session storage, if it is not, fetch it from server, hopefully this will lower the load on the unsplash server
     ***/
    const unsplashApiUrl = 'https://api.unsplash.com/users/gab_garoche/photos';
    const unsplashApplicationId = '1f5dcf4016f2c19b12748af335ca75d5692f5c00a572a7161cb4b9db8fe866d3';
    const unsplashQueryParameters = `?order_by=popular&stats=true&client_id=${unsplashApplicationId}`;
    fetch(`${unsplashApiUrl}${unsplashQueryParameters}`)
        .then(photos => photos.json())
        .then(photos => new PhotographyCard_1.PhotographyCard(photos));
});
//# sourceMappingURL=main.js.map