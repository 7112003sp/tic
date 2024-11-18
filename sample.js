let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#newbtn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msgcontainer");
let turnO=true;

const winpatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("is clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const resetbttn=()=>{
    for(let box of boxes){
        turnO=true;
        enablegame();
        msgcontainer.classList.add("hide");
    }

}


const enablegame=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS,   ${winner} IS 🏆WINNER🏆`;
    msgcontainer.classList.remove("hide")
    disabledgame();
}
const disabledgame=()=>{
    boxes.forEach=()=>{
        box.disabled=true;
    }
}

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;


        if(pos1val!=""&& pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val&& pos2val===pos3val){
                console.log("winner");
                showwinner(pos1val);
                return;
               
            }
        }
    

    }
   

};
resetbtn.addEventListener("click",resetbttn);
newbtn.addEventListener("click",resetbttn);
