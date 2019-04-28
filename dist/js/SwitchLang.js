define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SwitchLang {
        constructor(switchLangContainer) {
            if (switchLangContainer) {
                const currentLang = switchLangContainer.dataset.currentLang;
                const switchLangToggle = switchLangContainer.querySelector('#nav-switch-lang-toggle');
                const switchLangBtn = switchLangContainer.querySelectorAll('.nav-switch-lang-item');
                if (switchLangToggle && switchLangBtn && currentLang) {
                    if (currentLang === 'fr') {
                        switchLangToggle.checked = true;
                    }
                    let event = new Event('change');
                    for (let i = 0; i < switchLangBtn.length; i++) {
                        switchLangBtn[i].addEventListener('click', (e) => {
                            switchLangToggle.checked = !switchLangToggle.checked;
                            switchLangToggle.dispatchEvent(event);
                        });
                    }
                    switchLangToggle.addEventListener('change', (e) => {
                        console.log(switchLangToggle.checked);
                        const requestedLang = switchLangToggle.checked ? 'fr' : 'en';
                        SwitchLang.insertLangParam(requestedLang);
                    });
                }
            }
            else {
                console.log('Error finding Btn');
            }
        }
        static insertLangParam(requestedLang) {
            if (requestedLang) {
                window.location.search = `?lang=${requestedLang}`;
                // TODO try to retrieve cookie with PHP and maybe AJAX?
                // document.cookie = `lang=${requestedLang}`;
            }
            else {
                console.log('Error with requested languge');
            }
        }
    }
    exports.SwitchLang = SwitchLang;
});
//# sourceMappingURL=SwitchLang.js.map