define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SwitchLang {
        constructor(switchLangBtn) {
            this.requestedLang = '';
            if (switchLangBtn) {
                console.log(switchLangBtn.dataset);
                switchLangBtn.addEventListener('click', (e) => {
                    this.insertLangParam(switchLangBtn.dataset.requestedLang);
                });
            }
            else {
                console.log('Error finding Btn');
            }
        }
        insertLangParam(requestedLang) {
            if (requestedLang) {
                window.location.search = `?lang=${requestedLang}`;
            }
            else {
                console.log('Error with requested languge');
            }
        }
    }
    exports.SwitchLang = SwitchLang;
});
//# sourceMappingURL=SwitchLang.js.map