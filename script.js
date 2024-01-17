const but = document.querySelector('button');
but.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 20) + 20;
    const g = Math.floor(Math.random() * 20) + 20;
    const b = Math.floor(Math.random() * 20) + 20;
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})