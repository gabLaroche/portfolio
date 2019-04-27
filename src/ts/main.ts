import {SwitchLang} from "./SwitchLang";
import {PhotographyCard} from "./PhotographyCard";

const unsplashApiUrl: string = 'https://api.unsplash.com/users/gab_garoche/photos';
const unsplashApplicationId: string =  '1f5dcf4016f2c19b12748af335ca75d5692f5c00a572a7161cb4b9db8fe866d3';
const unsplashQueryParameters: string = `?order_by=popular&stats=true&client_id=${unsplashApplicationId}`;
if (document.readyState !== 'loading') {
    const switchLangBtn: HTMLElement | null =  document.getElementById('nav-switch-lang');
    new SwitchLang(switchLangBtn);
    console.log('DOMContentLoaded');
} else {
    document.addEventListener("DOMContentLoaded", () => {
        const switchLangBtn: HTMLElement | null =  document.getElementById('nav-switch-lang');
        new SwitchLang(switchLangBtn);
        console.log('DOMContentLoaded');
    });
}
/***
 * TODO Check if obj in session storage, if it is not, fetch it from server, hopefully this will lower the load on the unsplash server
 ***/
fetch(`${unsplashApiUrl}${unsplashQueryParameters}`)
    .then(photos => photos.json())
    .then(photos => new PhotographyCard(photos));