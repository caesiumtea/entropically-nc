document.addEventListener("DOMContentLoaded", function (event) {
    const startBtn = document.getElementById("play-gif");
    const stopBtn = document.getElementById("stop-gif");

    const freeze = localStorage?.getItem("freezeframe") ?? "on";

    let e;

    if (freeze === "off") {
        startBtn.classList.add('hidden')
        stopBtn.classList.remove('hidden');
    } else {
        e = new Freezeframe({ trigger: false, responsive: false });
        stopBtn.classList.add('hidden');
        startBtn.classList.remove('hidden');
    }

    startBtn.addEventListener("click", function () {
        e.start();
        window.localStorage.setItem('freezeframe', 'off');
        startBtn.classList.toggle('hidden');
        stopBtn.classList.toggle('hidden');
    });

    stopBtn.addEventListener("click", function () {
        if (e) {
            e.stop();
        } else {
            e = new Freezeframe({ trigger: false, responsive: false });
        }
        window.localStorage.setItem('freezeframe', 'on');
        stopBtn.classList.toggle('hidden');
        startBtn.classList.toggle('hidden');
    });
});