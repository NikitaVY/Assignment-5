let btn = document.querySelector("button");
let txt = document.querySelector("#enfb");
let txt1 = document.querySelector("#fb");
btn.addEventListener("click",function () {
    txt1.innerText=txt.value;
    txt.value="";
});
