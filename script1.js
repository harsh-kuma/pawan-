let boxes=document.querySelectorAll(".box")
let reset_btn=document.getElementById("reset")
let game=document.querySelector(".game")

let playerO=true;

const disableall = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// function winer(){
//     game.innerText = "Player  WIN";
// }

const checkwin = () => {  
    console.log("call")
    for (let pattern of win) {
       
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!="")
        {
            if(boxes[pattern[0]].innerText===boxes[pattern[1]].innerText && boxes[pattern[1]].innerText===boxes[pattern[2]].innerText)
            {   
                boxes[pattern[0]].style.color ="green";
                boxes[pattern[1]].style.color ="green";
                boxes[pattern[2]].style.color ="green";
                let a=boxes[pattern[0]].innerText;
                // setTimeout(winer,3000);
                disableall();
                
            }
        }
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText===""){
            if(playerO){
                box.innerText = "O";
                playerO = false;
            }
            else{
                box.innerText = "X";
                playerO = true;
            }
            checkwin();
        }
        
    });
})

reset_btn.onclick = function() {
    window.location.reload();
};