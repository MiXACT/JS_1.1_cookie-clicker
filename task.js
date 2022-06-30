const img = document.getElementById('cookie');
let clicks = 0;
let w = 20;

img.onclick = () => {
    clicks += 1;
    document.getElementById('clicker__counter').textContent = clicks;
    img.width += w;
    w *= -1
}
