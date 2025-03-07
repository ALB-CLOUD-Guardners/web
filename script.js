document.addEventListener('DOMContentLoaded', function() {
    const servicesBtn = document.getElementById("services-btn");
    const servicesDropdown = document.getElementById("services-dropdown");
    const caretIcon = document.getElementById("caret");
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    const servicesMobileBtn = document.getElementById("services-mobile-btn");
    const servicesMobileDropdown = document.getElementById("services-mobile-dropdown");
    const servicesMobileCaret = document.getElementById("services-caret");

    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            tabButtons.forEach(btn => {
                btn.classList.toggle('bg-blue-500', btn === button);
                btn.classList.toggle('text-white', btn === button);
                btn.classList.toggle('bg-white/10', btn !== button);
                btn.classList.toggle('text-gray-300', btn !== button);
            });

            tabContents.forEach(content => {
                content.classList.toggle('hidden', content.getAttribute('data-tab') !== tabId);
            });
        });
    });



    servicesBtn.addEventListener("click", () => {
        servicesDropdown.classList.toggle("hidden");
        caretIcon.classList.toggle("rotate-180");
    });

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    servicesMobileBtn.addEventListener("click", () => {
        servicesMobileDropdown.classList.toggle("hidden");
        servicesMobileCaret.classList.toggle("rotate-180");
    });
});