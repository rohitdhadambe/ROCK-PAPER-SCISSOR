alert("SCORE MAXIMUM 5 POINTS TO WIN THE GAME>>>>")

let U = 0;
let C = 0;

const ch =document.querySelectorAll(".choies > div");        //imp to understand choies > div
const msg =document.querySelector("#msg");
const URSC =document.querySelector("#user-score");
const CMSC =document.querySelector("#Comp-score");



const compchoies = () => {
    const option =["ROCK","PAPER","SCISSORS"];
    const k = Math.floor(Math.random()*3);  //into 3=generate number from 0 to 2; (math .floor remove decimal value)
    return option[k];
}

const draw=()=>{
    
    console.log("MATCH DRAW");
    msg.innerText = " COMPUTER CHOIES AND YOUR CHOIES SAME , MATCH DRAW ...!";
    msg.style.backgroundColor = "aquamarine";

}

const showWinner=(USERWIN,cmchoies,userch)=>{
     if(USERWIN){
        U++;    //variable to increment the vaue of score ie=U
        URSC.innerText=U;
       msg.innerText = ` YOU CHOIES ${userch}, BEATS  COMPUTER CHOIES,

         MATCH POINT GOES TO YOU...! `;
       msg.style.backgroundColor ="aquamarine";
       
     }
     else{
        C++;    //variable to increment the vaue of score ie=U
        CMSC.innerText= C;
        msg.innerText = `COMPUTER CHOIES ${cmchoies}, BEATS YOUR CHOIES,

        MATCH POINT GOES TO COMPUTER...! `;
        msg.style.backgroundColor ="aquamarine";
            
     }

     if(U==5){
        msg.style.backgroundColor ="#65B6F3";
        msg.style.color ="#OOOOOO";
        msg.innerText = `USER WON THE GAME BY  ${U-C} POINTS..! , GAME OVER
        
        Click Restart to Play again`;
        C=0;
        U=0;
        
     }
     if (C==5){
        msg.style.backgroundColor ="#65B6F3";
        msg.style.color ="#OOOOOO";
        msg.innerText = `COMPUTER  WON THE GAME BY  ${C-U}  POINTS..! , GAME OVER
        
        Click Restart to Play again`;
        C=0;
        U=0;
        
     }                                                      //EXTRA FEATURE ADDED
     
}

const playgame = (userch)=>{
    //USER CHOIES
    console.log(userch);
    // COMP CHOIES
    const cmchoies= compchoies();
    console.log(cmchoies);

    // USER AND COMPUTER FIGHTING;
    if(userch==cmchoies){
        //draw
        draw();
    }
    else{
        // WHO WILL WIN
        let USERWIN = true;
        if(userch=="ROCK"){
            USERWIN = cmchoies === "PAPER" ? false : true;
                }
        else if(userch=="PAPER"){
            USERWIN = cmchoies === "SCISSORS" ? false : true;   
        }
        else {
            USERWIN = cmchoies === "ROCK" ? false : true;
        }
        showWinner(USERWIN,cmchoies,userch); //calling of SHOWWINNER
    }
};

ch.forEach(choies => {
    choies.addEventListener("click",()=>{
         let userch = choies.getAttribute("id");
        playgame(userch);
    })
    
});


let R = document.querySelector(".restart");
R.addEventListener("click",()=>{
         C=0;
         U=0;
         URSC.innerText='0';
         CMSC.innerText='0';
         msg.innerText = `PLAY YOUR MOVE`;
         msg.style.backgroundColor ="aquamarine";
         
});                                                               // EXTRA FEATURE