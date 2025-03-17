let settings = document.getElementById("access");

settings.addEventListener("keydown", (event) => {
    let key = event.code;
    if (key == "Escape") {
        settings.removeAttribute("open");
    }
});

document.querySelector('#access-cursor').addEventListener('click', () => {
    if (animateCursor) {
        window.localStorage.setItem('animate-cursor', 'false');
        window.location.reload();
        // document.querySelector('#access-cursor').textContent = "enable cursor animation";
    } else {
        window.localStorage.setItem('animate-cursor', 'true');
        window.location.reload();
        // document.querySelector('#access-cursor').textContent = "disable cursor animation";
    }
})

document.querySelector('#select-font').addEventListener('change', () => {
    const font = document.querySelector('#select-font').value;
    if (font === "dyslexic") {
        window.localStorage.setItem('font', 'dyslexic');
        document.documentElement.style.setProperty('--font-main', 'OpenDyslexic, Arial, Helvetica, sans-serif ');
        document.documentElement.style.setProperty('--font-accent', 'OpenDyslexic, Arial, Helvetica, sans-serif');
        document.documentElement.style.setProperty('--font-code', '"Iosevka Fixed", "Courier New", Courier, monospace');
    } else if (font === "pixel") {
        window.localStorage.setItem('font', 'pixel');
        document.documentElement.style.setProperty('--font-main', 'Monogram, Iosevka, Verdana, Geneva, Tahoma, sans-serif');
        document.documentElement.style.setProperty('--font-accent', 'Monogram, Eczar, Cambria, Cochin, Georgia, Times, "Times New Roman", serif');
        document.documentElement.style.setProperty('--font-code', 'Monogram, "Iosevka Fixed", "Courier New", Courier, monospace');
    } else {
        window.localStorage.setItem('font', 'default');
        document.documentElement.style.setProperty('--font-main', 'Iosevka, Verdana, Geneva, Tahoma, sans-serif');
        document.documentElement.style.setProperty('--font-accent', 'Eczar, Cambria, Cochin, Georgia, Times, "Times New Roman", serif');
        document.documentElement.style.setProperty('--font-code', '"Iosevka Fixed", "Courier New", Courier, monospace');
    }
});

document.querySelector('#select-theme').addEventListener('change', () => {
    const theme = document.querySelector('#select-theme').value;
    window.localStorage.setItem('theme', theme);
    const file = '/' + theme + '.css';
    document.querySelector('#color-sheet').href = file;
});