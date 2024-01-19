let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [3,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame= () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked")
        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
        box.disabled="true";
        checkWinner();
        
    })
})
const disableBoxes = ()=>{
    for(let box of boxes)
    {
      box.disabled=true;
    }
}
const enableBoxes = ()=>{
    for(let box of boxes)
    {
         box.disabled=false;
         box.innerText="";
    }
}
const showWinner= (Winner) =>{
    msg.innerText= `Congratulations , Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
    for(pattern of winpatterns )
    {
       // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
       // console.log(pattern[0],pattern[1],pattern[2])
      /* console.log(
        boxes[pattern[0]].innerText,
        boxes[pattern[1]].innerText,
        boxes[pattern[2]].innerText,
       );*/
       let posval1= boxes[pattern[0]].innerText;
       let posval2= boxes[pattern[1]].innerText;
       let posval3= boxes[pattern[2]].innerText;
       if(posval1!="" && posval2!="" && posval3!="")
       {
        if(posval1==posval2 && posval2==posval3)
        {
            console.log("winner",posval1);
            showWinner(posval1);
        }
       }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);