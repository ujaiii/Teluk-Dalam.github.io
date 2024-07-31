function hasClass(element, className) {
    return element.classList.contains(className);
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = [
        { buttonId: 'menu-button-beranda-m', menuId: 'dropdown-menu-beranda-m' },
        { buttonId: 'menu-button-profil-m', menuId: 'dropdown-menu-profil-m' },
        { buttonId: 'menu-button-transparasi-m', menuId: 'dropdown-menu-transparasi-m' },
        { buttonId: 'menu-button-pemerintahan-m', menuId: 'dropdown-menu-pemerintahan-m' },
        { buttonId: 'menu-button-informasi-m', menuId: 'dropdown-menu-informasi-m' },
        { buttonId: 'menu-button-potensi-m', menuId: 'dropdown-menu-potensi-m' }
    ];

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            const menu = document.getElementById(dropdown.menuId);
            const button = document.getElementById(dropdown.buttonId);
            menu.classList.add('hidden');
            if (!hasClass(button, 'active-menu')) {
                button.classList.add('text-dark');
                button.classList.remove('text-primary');
            }
            button.setAttribute('aria-expanded', 'false');
        });
    }

    dropdowns.forEach(dropdown => {
        const button = document.getElementById(dropdown.buttonId);
        const menu = document.getElementById(dropdown.menuId);

        button.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            closeAllDropdowns();
            if (isHidden) {
                menu.classList.remove('hidden');
                button.classList.remove('text-dark');
                button.classList.add('text-primary');
                button.setAttribute('aria-expanded', 'true');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = [
        { buttonId: 'menu-button-beranda', menuId: 'dropdown-menu-beranda' },
        { buttonId: 'menu-button-profil', menuId: 'dropdown-menu-profil' },
        { buttonId: 'menu-button-transparasi', menuId: 'dropdown-menu-transparasi' },
        { buttonId: 'menu-button-pemerintahan', menuId: 'dropdown-menu-pemerintahan' },
        { buttonId: 'menu-button-informasi', menuId: 'dropdown-menu-informasi' },
        { buttonId: 'menu-button-potensi', menuId: 'dropdown-menu-potensi' }
    ];

    dropdowns.forEach(dropdown => {
        const button = document.getElementById(dropdown.buttonId);
        const menu = document.getElementById(dropdown.menuId);

        let timeoutId;

        const showMenu = () => {
            clearTimeout(timeoutId);
            menu.classList.remove('hidden');
            button.classList.remove('text-dark');
            button.classList.add('text-primary');
            button.setAttribute('aria-expanded', 'true');
        };
        
        const hideMenu = () => {
            timeoutId = setTimeout(() => {
                menu.classList.add('hidden');
                if (!hasClass(button, 'active-menu')) {
                    button.classList.add('text-dark');
                    button.classList.remove('text-primary');
                }
                button.setAttribute('aria-expanded', 'false');
            }, 50);
        };

        button.addEventListener('mouseenter', showMenu);
        menu.addEventListener('mouseenter', showMenu);
        button.addEventListener('mouseleave', hideMenu);
        menu.addEventListener('mouseleave', hideMenu);
    });
});

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// hamburger
document.addEventListener('DOMContentLoaded', (event) => {
    const dropdowns = [
        { buttonId: 'menu-button-beranda-m', menuId: 'dropdown-menu-beranda-m' },
        { buttonId: 'menu-button-profil-m', menuId: 'dropdown-menu-profil-m' },
        { buttonId: 'menu-button-transparasi-m', menuId: 'dropdown-menu-transparasi-m' },
        { buttonId: 'menu-button-pemerintahan-m', menuId: 'dropdown-menu-pemerintahan-m' },
        { buttonId: 'menu-button-informasi-m', menuId: 'dropdown-menu-informasi-m' },
        { buttonId: 'menu-button-potensi-m', menuId: 'dropdown-menu-potensi-m' }
    ];
    
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            const menu = document.getElementById(dropdown.menuId);
            const button = document.getElementById(dropdown.buttonId);
            menu.classList.add('hidden');
            if (!hasClass(button, 'active-menu')) {
                button.classList.add('text-dark');
                button.classList.remove('text-primary');
            }
            button.setAttribute('aria-expanded', 'false');
        });
    }

    const hamburgerButton = document.getElementById('hamburger');
    const sidebarMenu = document.getElementById('sidebarMenu');
    
    hamburgerButton.addEventListener('click', () => {
        sidebarMenu.classList.toggle('open');
        
        hamburgerButton.classList.toggle('hamburger-active');
        closeAllDropdowns();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btnFooter = document.getElementById('profilFooter');
    const textFooter = document.getElementById('textFooter');

    btnFooter.addEventListener('click', () => {
        if (textFooter.classList.contains('line-clamp-4')){
            textFooter.classList.remove('line-clamp-4');
            btnFooter.textContent = 'Lebih Sedikit';
        } else {
            textFooter.classList.add('line-clamp-4');
            btnFooter.textContent = 'Selengkapnya';
        }
    });
});