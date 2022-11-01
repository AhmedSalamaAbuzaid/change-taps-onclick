// select elements
let taps = document.querySelectorAll(".tabs li");
let tabsArrays = Array.from(taps);
let divs = document.querySelectorAll(".contant > div");
let divsArrays = Array.from(divs);

tabsArrays.forEach((ele) => {
    ele.addEventListener("click",function (e)  {
        // console.log(ele);
        // console.log(e.target);
        // console.log(e.currentTarget);
        // they all tha same here
        tabsArrays.forEach(ele => {
            ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArrays.forEach((div) => {
            div.style.display = "none";
        });
        // console.log(ele.dataset.cont);
        // console.log(e.target.dataset.cont);
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.target.dataset.cont).style.display = "block"
    });
});