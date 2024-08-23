window.onload=()=>{
    
   let words = [
   "JORDAN",
   "FAME","LIVER","FEVER","COUNTRY","SLY",
   "TURNUP","FAITHFUL","HELPER","MOVER"
   
   ];
   let password = document.querySelector(".password")
   let inputWord = document.querySelector(".inputWord");
 
 let checkBtn = document.querySelector(".check"); 
   let text = document.querySelector(".text"); 
   
let random = Math.floor(Math.random()* 10)+1;
 let wordPick = words[random];
  
  
  let splitWord = wordPick;
 console.log(typeof(wordPick))
 let lowerCase = wordPick.toLowerCase()
 
  for(let j =0; j < splitWord.length-2; j++){
  
  text.innerHTML += `<span class="key"> ${splitWord[j]}</span>`
     
     
     checkBtn.addEventListener("click",()=>{
     let inputVal = inputWord.value
     let inputLowerCase = inputVal.toLowerCase()
         if(inputLowerCase === lowerCase ){
             console.log("You got it !!!")
         }else{
             console.log("Wrong word")
         }
     })
         
     
    }
    
    
    
    
                 }
