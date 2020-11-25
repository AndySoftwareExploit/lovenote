function logging() {
    console.log("写于2020年11月25日 18：49")
}
function thanks() {
    window.alert("感谢 叶少 以及 娘子。\n同时也感谢某某同学为我鼓励。")
}
function copyright() {
    window.alert("版权所有 ©2020 叶少 及 lsy。\n\n\n转载请声明原作者：叶少。")
}
function opensource() {
    window.location.href = './opensource.html'
}
function whattime() {
    var a = new Date();
    document.getElementById("whatti").innerHTML = a;
}