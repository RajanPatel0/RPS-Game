let userscr=0;
let compscr=0;
const msg=document.querySelector("#msg");
const usrScr=document.querySelector("#user-scr")
const compScr=document.querySelector("#comp-scr")

const gcomchoice=()=>{
   let options=["rock","paper","scissor"]
   const randomId=Math.floor(Math.random()*3);
   return options[randomId];
}

const drawgame=()=>{
   // console.log("It's a draw")
   msg.innerText=("It's draw-play again!")
   msg.style.backgroundColor=("#00252e")
}

const showwinr=(usrwin,usrChoice,comchoice)=>{
   if(usrwin){
      // console.log("you win")
      userscr++;
      usrScr.innerText=(userscr);
      msg.innerText=(`You Win! your ${usrChoice} beats computer ${comchoice}`)
      msg.style.backgroundColor=("Green")
   }else{
      // console.log("you lose");
      compscr++;
      compScr.innerText=(compscr);
      msg.innerText=(`Computer Win!\t computer ${comchoice} beats your ${usrChoice}`)
      msg.style.backgroundColor=("Red")
   }

}

const playGame=(usrChoice)=>{
   // console.log("User Choice:",usrChoice);
   const comchoice=gcomchoice();
   // console.log("Computer Choice:",comchoice);

   if(usrChoice===comchoice){
      drawgame();//Draw Game
   }else{
      let usrwin=true;
      if(usrChoice==="rock"){
         //bw paper & scissor
         usrwin=comchoice==="paper"? false: true;
      }else if(usrChoice==="paper"){
         //bw rock & scissor
         usrwin=comchoice==="scissor"?false:true;
      }else {
         //rock & paper
         usrwin=comchoice==="rock"?false:true;
      }
      showwinr(usrwin,usrChoice,comchoice);
   }
}

const choices=document.querySelectorAll(".choices");
choices.forEach((choices)=>{
   // console.log(choices)
   choices.addEventListener("click",()=>{
      const usrChoice=choices.getAttribute("id")
      playGame(usrChoice)
   })
})
