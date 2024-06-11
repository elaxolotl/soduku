var numSelected = null;
var tileSelected = null;
var errors=0;
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
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
