export function runSketch() {
    const canvas = document.getElementById('speckle1');

    const ctx = canvas.getContext('2d');

    for (let i = 0; i < 50; i++) {
        const radius = 10 + Math.floor(Math.random() * 40)
        const x = Math.floor(Math.random() * 400)
        const y = Math.floor(Math.random() * 400)
        const color_r = 255 - Math.floor(Math.random() * 100)
        const color_g = 255 - Math.floor(Math.random() * 100)
        const color_b = 255 - Math.floor(Math.random() * 100)
        
        ctx.fillStyle = `rgb(${color_r} ${color_g} ${color_b} / 66%)`
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fill();
        
    }
    
}