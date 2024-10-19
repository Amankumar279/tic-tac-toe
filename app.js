let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgame=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame = () =>{
    turnO=true; 
    enableboxes();
    msgcontainer.classList.add("hide");
}

// in forEach 
boxes.forEach((xob)=>{
    xob.addEventListener("click", ()=> {
console.log("box was clicked");
if(turnO){
    xob.innerText="O";
    turnO=false;
} else{
    xob.innerText="X";
    turnO=true;
}
xob.disabled=true;
checkwinner();

    });

});




const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showwinner=(winner)=>{
    msg.innerText=`our winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const checkwinner=() =>{
    for(let pattern of winpattern){
    
        let pos1value=boxes[pattern[0]].innerText;
        let pos2value=boxes[pattern[1]].innerText;
        let pos3value=boxes[pattern[2]].innerText;

        if(pos1value!="" && pos2value!="" && pos3value!=""){
            if(pos1value===pos2value && pos2value===pos3value){
                console.log("winner",pos1value);
                showwinner(pos1value);
            }
        }
    }
};

newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);