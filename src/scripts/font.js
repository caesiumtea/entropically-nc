let fontSetting = localStorage?.getItem("font") ?? "default";
if (fontSetting === "dyslexic") {
    document.documentElement.style.setProperty('--font-main', 'OpenDyslexic, Arial, Helvetica, sans-serif ');
    document.documentElement.style.setProperty('--font-accent', 'OpenDyslexic, Arial, Helvetica, sans-serif');
}