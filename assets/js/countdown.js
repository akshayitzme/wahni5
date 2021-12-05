function updateTimer() {
    future = Date.parse("dec 11, 2021 18:00:00");
    now = new Date();
    diff = future - now;

    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    document.getElementById("countdown")
        .innerHTML =
        `<span>${d}d: </span>
         <span>${h}h: </span>
         <span>${m}m: </span>
         <span>${s}s</span>`
}
setInterval('updateTimer()', 1000);