
const tagName = 'lazy-image';
const template = document.createElement('template');

template.innerHTML = `<img id="image" />`;

class LazyImage extends HTMLElement {
    constructor() {
        super();

        this.src = '';
        this.alt = '';
    }

    safeSetAttribute(name, value) {
        if (this.getAttribute(name) !== value) {
            this.setAttribute(name, value);
        }
    }

    set src(value) {
        this.safeSetAttribute('src', value);
        if (this.shadowImage) {
            this.shadowImage.src = value;
        }
    }

    get src() {
        return this.getAttribute('src');
    }

    set alt(value) {
        this.safeSetAttribute('alt', value);

        if (this.shadowImage) {
            this.shadowImage.alt = value;
        }
    }

    get alt() {
        return this.getAttribute('alt');
    }

    static get observedAttributes() {
        return ['src', 'alt'];
    }

    connectedCallback() {
        this.src = this.getAttribute('src');
        this.alt = this.getAttribute('alt');

        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.shadowImage = this.shadowRoot.getElementById('image');
        }

        this.shadowImage.src = this.src;
        this.shadowImage.alt = this.alt;
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        this[attrName] = newVal;
    }
}

const register = () => customElements.define(tagName, LazyImage);
window.WebComponents ? window.WebComponents.waitFor(register) : register();