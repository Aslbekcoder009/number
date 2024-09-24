
const btn = document.querySelector(".btn");
const parol = document.querySelector(".javoblar");
const prom = prompt("Qaysi sonning kvadrati kerak ?");

btn.addEventListener ("click" , () => {
    parol.innerText = prom ** 2;
})