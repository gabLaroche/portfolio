const tagName = 'my-navigation';
const template = document.createElement("template");

template.innerHTML = `
    <style>
    a:link,
    a:visited {
        color: var(--normal-blue);
        text-decoration: none;
        transition: 350ms color ease;
        font-weight: 600;
        font-size: 1.2rem;
        font-variant: small-caps;
    }
    
    a:hover {
        color: var(--dark-blue);
    }
    
    svg {
        width: 88%;
    }
    
    .nav {
        position: fixed;
        display: flex;
        width: 11vw;
        top: 35px;
    }
    .nav-main-links {
        left: 5px;
    }
    
    .nav-social-links {
        right: 5px;
    }
    
    .nav-social-links .nav-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
    }
    
    .nav-list {
        margin: 5px auto;
        padding: 0;
    }
    
    .nav-list-item {
        list-style-type: none;
    }
    
    .nav-main-link-item {
        display: inline-block;
        margin: 0 40px;
    }
    
    .nav-main-link-item a::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        margin-top: 2px;
        background: var(--dark-blue);
        transition: 350ms width ease;
    }
    
    .nav-main-link-item a:hover::after {
        width: 100%;
    }
    
    .nav-social-link-item {
        font-size: 0;
    }
    </style>
    
    <header>
        <nav class="nav nav-main-links">
            <ul class="nav-list">
                <li class="nav-list-item nav-main-link-item"><a href="/projects">My Projects</a></li>
                <li class="nav-list-item nav-main-link-item"><a href="/skills">My Skills</a></li>
                <li class="nav-list-item nav-main-link-item"><a href="/contact">Contact me</a></li>
            </ul>
        </nav>
        <nav class="nav nav-social-links">
            <ul class="nav-list">
                <li class="nav-list-item nav-social-link-item"><a href="https://dev.to/gablaroche"><svg aria-hidden="true" data-prefix="fab" data-icon="dev" class="svg-inline--fa fa-dev fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/></svg></a></li>
                <li class="nav-list-item nav-social-link-item"><a href="https://github.com/gabLaroche"><svg aria-hidden="true" data-prefix="fab" data-icon="github-square" class="svg-inline--fa fa-github-square fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/></svg></a></li>
                <li class="nav-list-item nav-social-link-item"><a href="https://www.linkedin.com/in/gabriel-laroche-2b3706125/"><svg aria-hidden="true" data-prefix="fab" data-icon="linkedin" class="svg-inline--fa fa-linkedin fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></li>
            </ul>
        </nav>
    </header>
`;

window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, tagName);

class MyNavigation extends HTMLElement {
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
const register = () => customElements.define(tagName, MyNavigation);
window.WebComponents ? window.WebComponents.waitFor(register) : register();