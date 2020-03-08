export class Body {
    constructor() {
        console.log(`This is Body constructor`);
    }
    toggleMobileNav() {
        let btn = document.getElementById('mobile-btn');
        let mobileNav = document.getElementById('nav-content');
        let logo = document.getElementById('logo');
        if (btn) {
            btn.addEventListener("click", () => mobileNav.classList.toggle('active'));
            console.log('mobile nav clicked');
        }
    }
}