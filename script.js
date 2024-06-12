var numSelected = null;
var tileSelected = null;
var errors=0;
var board = [
    "-4--1-9-8",
    "8-5---7--",
    "-------1-",
    "-2---5--4",
    "--16-----",
    "-3---8--2",
    "-------6-",
    "3-4---8--",
    "-8--9-4-3",
]

var solution = [
    "643517928",
    "815329746",
    "297864315",
    "928175634",
    "471632589",
    "536948172",
    "759483261",
    "364251897",
    "182796453"
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
            number.addEventListener("click", selectNumber)
            document.getElementById("numbers").appendChild(number);   
        }
        for (let j=0;j<9;j++ ){
            for (let k=0;k<9;k++){
                let tile=document.createElement("div")
                tile.id = j.toString()+"-"+k.toString()
                if (board[j][k]!="-"){
                    tile.innerText=board[j][k]
                    tile.classList.add("numbered-tile")
                }
                if(j==2||j==5){
                    tile.classList.add("horizontal-line")
                }
                if(k==2||k==5){
                    tile.classList.add("vertical-line")
                }
                tile.addEventListener("click", selectTile)
                tile.classList.add("tile");
                document.getElementById('board').append(tile)
            }
            
        }
    }

function selectNumber(){
    if (numSelected != null){
        numSelected.classList.remove("number-selected")
    }
    numSelected=this;
    numSelected.classList.add("number-selected")
}

function selectTile(){
    if (numSelected){
        if (this.innerText!=""){
            return;
        }
        let coords=this.id.split("-");
        console.log(coords)
        let r = parseInt(coords[0])
        let c = parseInt(coords[1])
        if (solution[r][c]==numSelected.id){
            this.innerText=numSelected.id;
        }
        else{
            errors+=1;
            document.getElementById("errors").innerText = errors
        }
    }
}
