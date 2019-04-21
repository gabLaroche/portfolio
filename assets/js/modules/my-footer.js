const tagName = 'my-footer';
const template = document.createElement("template");

template.innerHTML = `
    <style>
        footer {
            background: var(--light-grey);
            padding: 20px 0;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            max-width: var(--max-width);
            margin: 0 auto;
        }
    </style>
    
    <footer>
        <div class="footer-content">
            <small>Copyright 2019 Gabriel Laroche</small>
            <small>All icons used came from <a href="https://fontawesome.com/license/free">Font Awesome</a></small>
        </div>
    </footer>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

class MyFooter extends HTMLElement {

    safeSetAttribute(name, value) {
        if (this.getAttribute(name) !== value) {
            this.setAttribute(name, value);
        }
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.updateShadyStyles();
        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this[name] = newVal;
    }

    disconnectedCallback() {
        this.disconnectObserver();
    }

    updateShadyStyles() {
        window.ShadyCSS && window.ShadyCSS.styleElement(this);
    }

    disconnectObserver() {
        this.observer.disconnect();
        this.observer = null;
        delete this.observer;
    }
}
const register = () => customElements.define(tagName, MyFooter);
window.WebComponents ? window.WebComponents.waitFor(register) : register();