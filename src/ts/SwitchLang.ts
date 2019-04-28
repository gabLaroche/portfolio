export class SwitchLang {

    constructor(switchLangContainer: HTMLElement | null) {
        if (switchLangContainer) {
            const currentLang: string | undefined = switchLangContainer.dataset.currentLang;
            const switchLangToggle: HTMLInputElement | null = switchLangContainer.querySelector('#nav-switch-lang-toggle');
            const switchLangBtn: NodeListOf<Element> | null = switchLangContainer.querySelectorAll('.nav-switch-lang-item');
            if (switchLangToggle && switchLangBtn && currentLang) {
                if (currentLang === 'fr') {
                    switchLangToggle.checked = true;
                }

                let event: Event = new Event('change');

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
        } else {
            console.log('Error finding Btn');
        }
    }

    static insertLangParam(requestedLang: string | undefined):void {
        if (requestedLang) {
            window.location.search = `?lang=${requestedLang}`;
            // TODO try to retrieve cookie with PHP and maybe AJAX?
            // document.cookie = `lang=${requestedLang}`;
        } else {
            console.log('Error with requested languge')
        }
    }
}