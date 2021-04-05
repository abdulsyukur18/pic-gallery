const gamb = document.querySelectorAll('.gamb');
const jendela = document.querySelector('.window');
const fullg = document.querySelector('.fullGamb');

gamb.forEach((gambs) => {
    gambs.addEventListener("click", () => {
        const isi = gambs.getAttribute("name");
        jendela.classList.add("buka");
        fullg.src = `img/${isi}.png`;
    });
});

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("window")) {
        jendela.classList.remove("buka");
    }
});