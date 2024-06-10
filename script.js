var numSelected = null;
var tileSelected = null;
var errors=0;
var board= [
    "5-3--7---",
    "6--195---",
    "-98----6-",
    "8---6---3",
    "4--8-3--1",
    "7---2---6",
    "-6----28-",
    "---419--5",
    "---8--79-"
]
var solution= [
    "534678912",
    "672195348",
    "198342567",
    "859761423",
    "426853791",
    "713924856",
    "961537284",
    "287419635",
    "345286179"
]

window.onload = function() {
    setGame();
}

function setGame(){
    for (let i=1;i<=9;i++ ){
        let number = document.createElement("div")
        number.id = i
        number.innerText = i
        number.classList.add("number")
        document.getElementById("numbers").appendChild(number);
        
    }
}