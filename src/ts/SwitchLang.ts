export class SwitchLang {

    private requestedLang: string | undefined = '';
    constructor(switchLangBtn: HTMLElement | null) {
        if (switchLangBtn) {
            console.log(switchLangBtn.dataset);
            switchLangBtn.addEventListener('click', (e) => {
                this.insertLangParam(switchLangBtn.dataset.requestedLang)
            });
        } else {
            console.log('Error finding Btn');
        }
    }

    private insertLangParam(requestedLang: string | undefined):void {
        if (requestedLang) {
            window.location.search = `?lang=${requestedLang}`;
        } else {
            console.log('Error with requested languge')
        }
    }
}