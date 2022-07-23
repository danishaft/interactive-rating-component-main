let btns = document.querySelectorAll(".rating-btn")
let submit = document.querySelector(".submit")
let value = 0;


btns.forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', (e) => {
        let value = e.target.innerText;
        console.log(value)
        localStorage.setItem('value', value);
    });
})






submit.addEventListener('click', () => {
    window.location.href = "thanks.html"
});
