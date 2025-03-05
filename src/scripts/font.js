let fontSetting = localStorage?.getItem("font") ?? "default";
if (fontSetting === "dyslexic") {
    document.documentElement.style.setProperty('--font-main', 'OpenDyslexic, Arial, Helvetica, sans-serif');
    document.documentElement.style.setProperty('--font-accent', 'OpenDyslexic, Arial, Helvetica, sans-serif');
    document.documentElement.style.setProperty('--font-code', '"Courier New", Courier, monospace;');
} else if (fontSetting === "pixel") {
    document.documentElement.style.setProperty('--font-main', 'Monogram, Iosevka, Verdana, Geneva, Tahoma, sans-serif');
    document.documentElement.style.setProperty('--font-accent', 'Monogram, Eczar, Cambria, Cochin, Georgia, Times, "Times New Roman", serif');
    document.documentElement.style.setProperty('--font-code', 'Monogram, Eczar, Cambria, Cochin, Georgia, Times, "Times New Roman", serif');
}