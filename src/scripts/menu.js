document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
});

document.querySelector('#access-icon').addEventListener('click', () => {
    document.querySelector('#access-menu').removeAttribute('hidden');
});

document.querySelector('#access-menu-close').addEventListener('click', () => {
    document.querySelector('#access-menu').setAttribute('hidden', '');
});

// animateCursor = localStorage?.getItem("animate-cursor") ?? true;

document.querySelector('#access-cursor').addEventListener('click', () => {
    if (animateCursor) {
        window.localStorage.setItem('animate-cursor', false);
        window.location.reload();
        // document.querySelector('#access-cursor').textContent = "enable cursor animation";
    } else {
        window.localStorage.setItem('animate-cursor', true);
        window.location.reload();
        // document.querySelector('#access-cursor').textContent = "disable cursor animation";
    }
})