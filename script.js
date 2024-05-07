let table = document.getElementsByClassName("table")[0]
let currentTurnLabel = document.getElementById("currentTurn").children[0]
let result = document.getElementById("result")
let restartButton = document.getElementById("restart")
let restartWinButton = document.getElementById("restartWin")

let page = document.getElementsByClassName("page")
let winbox = document.getElementsByClassName("win-box")

let firstRow = [document.getElementsByClassName('row')[0].children[0].textContent,document.getElementsByClassName('row')[0].children[1].textContent,document.getElementsByClassName('row')[0].children[2].textContent]
let secondRow = [document.getElementsByClassName('row')[1].children[0].textContent,document.getElementsByClassName('row')[1].children[1].textContent,document.getElementsByClassName('row')[1].children[2].textContent]
let thirdRow = [document.getElementsByClassName('row')[2].children[0].textContent,document.getElementsByClassName('row')[2].children[1].textContent,document.getElementsByClassName('row')[2].children[2].textContent]

let firstColumn = [document.getElementsByClassName("row")[0].children[0].textContent, document.getElementsByClassName("row")[1].children[0].textContent, document.getElementsByClassName("row")[2].children[0].textContent ]
let secondColumn = [document.getElementsByClassName("row")[0].children[1].textContent, document.getElementsByClassName("row")[1].children[1].textContent, document.getElementsByClassName("row")[2].children[1].textContent ]
let thirdColumn = [document.getElementsByClassName("row")[0].children[2].textContent, document.getElementsByClassName("row")[1].children[2].textContent, document.getElementsByClassName("row")[2].children[2].textContent ]

let oneAndNineDiagonal = [document.getElementsByClassName("row")[0].children[0].textContent, document.getElementsByClassName("row")[1].children[1].textContent, document.getElementsByClassName("row")[2].children[2].textContent]
let threeAndSevenDiagonal = [document.getElementsByClassName("row")[0].children[2].textContent, document.getElementsByClassName("row")[1].children[1].textContent, document.getElementsByClassName("row")[2].children[0].textContent]

let currentTurn = 1
let valueToInsert = '😺'

let teamWinner = ''
// bucle para cada turno
/* for(let turn; turn < 10; turn++){
    if(currentTurn % 2 != 0){
        currentTurnLabel.textContent = "😺"
        valueToInsert = '😺'
    }
    else{
        currentTurnLabel.textContent = "🐵"
        valueToInsert = '🐵'
    }
}
*/
// bucle para recorrer cada cuadrado
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        table.children[i].children[j].addEventListener("click", (e) =>{
            if(e.target.className !== 'square selected'){
                e.target.textContent = valueToInsert
                e.target.className = "square selected"
                currentTurn++
                checkWin()
                changeTurn()
            }
        })
        }
}

function changeTurn(){
    if(currentTurn == 10){
        alert('Empate')
        restart()
    }
    if(currentTurn % 2 != 0){
        currentTurnLabel.textContent = "😺"
        valueToInsert = '😺'
    }
    else{
        currentTurnLabel.textContent = "🐵"
        valueToInsert = '🐵'
    }
}

function restart(){
    currentTurn = 1
    currentTurnLabel.textContent = "😺"
    valueToInsert = '😺'
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            table.children[i].children[j].textContent = ''
            table.children[i].children[j].className = 'square'
        }
    }
    teamWinner = ''
}

function checkWin(){
    checkFirstRow()
    checkSecondRow()
    checkThirdRow()
    checkFirstColumn()
    checkSecondColumn()
    checkThirdColumn()
    checkDiagonalOne()
    checkDiagonalTwo()
    if(teamWinner != ''){
        teamWinner === 'cat' ? result.textContent = '😺' : result.textContent = '🐵' 
        page[0].className = "page opacity"
        winbox[0].className = 'win-box show'
    }
    
}

function checkFirstRow(){
    if(table.children[0].children[0].textContent == '😺' && table.children[0].children[1].textContent == '😺' && table.children[0].children[2].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[0].children[0].textContent == '🐵' && table.children[0].children[1].textContent == '🐵' && table.children[0].children[2].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}
function checkSecondRow(){
    if(table.children[1].children[0].textContent == '😺' && table.children[1].children[1].textContent  == '😺' && table.children[1].children[2].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[1].children[0].textContent  == '🐵' && table.children[1].children[1].textContent == '🐵' && table.children[1].children[2].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}
function checkThirdRow(){
    if(table.children[2].children[0].textContent == '😺' && table.children[2].children[1].textContent == '😺' && table.children[2].children[2].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[2].children[0].textContent == '🐵' && table.children[2].children[1].textContent == '🐵' && table.children[2].children[2].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}
function checkFirstColumn(){
    if(table.children[0].children[0].textContent == '😺' && table.children[1].children[0].textContent == '😺' && table.children[2].children[0].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[0].children[0].textContent == '🐵' && table.children[1].children[0].textContent == '🐵' && table.children[2].children[0].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}
function checkSecondColumn(){
    if(table.children[0].children[1].textContent == '😺' && table.children[1].children[1].textContent == '😺' && table.children[2].children[1].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[0].children[1].textContent == '🐵' && table.children[1].children[1].textContent == '🐵' && table.children[2].children[1].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}
function checkThirdColumn(){
    if(table.children[0].children[2].textContent == '😺' && table.children[1].children[2].textContent == '😺' && table.children[2].children[2].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[0].children[2].textContent == '🐵' && table.children[1].children[2].textContent == '🐵' && table.children[2].children[2].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}

function checkDiagonalOne(){
    if(table.children[0].children[0].textContent == '😺' && table.children[1].children[1].textContent == '😺' && table.children[2].children[2].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[0].children[0].textContent == '🐵' && table.children[1].children[1].textContent == '🐵' && table.children[2].children[2].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}

function checkDiagonalTwo(){
    if(table.children[0].children[2].textContent == '😺' && table.children[1].children[1].textContent == '😺' && table.children[2].children[0].textContent == '😺'){
        teamWinner = 'cat'
    }else if(table.children[0].children[2].textContent == '🐵' && table.children[1].children[1].textContent == '🐵' && table.children[2].children[0].textContent == '🐵'){
        teamWinner = 'monkey'
    }
}

restartButton.addEventListener('click', ()=>{
    restart()
})
restartWinButton.addEventListener('click', ()=>{
    page[0].className = "page"
    winbox[0].className = 'win-box'
    restart()
})
