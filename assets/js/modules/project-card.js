const tagName = 'project-card';
const template = document.createElement("template");

template.innerHTML = `
    <style>
        :host {
            position: relative;
            display: block;
            flex: 0 1 33%;
        }
        
        .PC_img {
            max-width: 100%;
        }
        
        .PC_link {
            display: block;
        }
        
        .PC_description {
            margin: 5px 0 0;
        }
    </style>
    
    <img class="PC_img" id="img" />
    <a class="PC_link" id="link"></a>
    <p  class="PC_description" id="description"></p>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

class ProjectCard extends HTMLElement {

    safeSetAttribute(name, value) {
        if (this.getAttribute(name) !== value) {
            this.setAttribute(name, value);
        }
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

    set src(value) {
        this.safeSetAttribute('src', value);

        if (this.shadowImage) {
            this.shadowImage.src = value;
        }
    }

    get src() {
        return this.getAttribute('src');
    }

    set href(value) {
        this.safeSetAttribute('href', value);

        if (this.shadowLink) {
            this.shadowLink.href = value;
        }
    }

    get href() {
        return this.getAttribute('href');
    }

    set label(value) {
        this.safeSetAttribute('label', value);

        if (this.shadowLink) {
            this.shadowLink.innerText = value;
        }
    }

    get label() {
        return this.getAttribute('label');
    }

    set description(value) {
        this.safeSetAttribute('description', value);

        if (this.shadowDescription) {
            this.shadowDescription.innerHTML = value;
        }
    }

    get description() {
        return this.getAttribute('description');
    }

    static get observedAttributes() {
        return ['alt', 'src', 'href', 'label', 'description']
    }
    constructor() {
        super();
    }

    connectedCallback() {
        this.updateShadyStyles();
        if (!this.shadowRoot) {
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.shadowImage = this.shadowRoot.getElementById('img');
            this.shadowLink = this.shadowRoot.getElementById('link');
            this.shadowDescription = this.shadowRoot.getElementById('description');

            this.alt = this.getAttribute('alt');
            this.src = this.getAttribute('src');
            this.href = this.getAttribute('href');
            this.label = this.getAttribute('label');
            this.description = this.getAttribute('description');
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
const register = () => customElements.define(tagName, ProjectCard);
window.WebComponents ? window.WebComponents.waitFor(register) : register();