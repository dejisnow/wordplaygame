window.onload=()=>{
    
   let words = [
   "JORDAN",
   "FAME","LIVER","FEVER","COUNTRY","SLY",
   "TURNUP","FAITHFUL","HELPER","MOVER"
   
   ];
   let password = document.querySelector(".password")
   
 
 let checkBtn = document.querySelector(".check"); 
   let text = document.querySelector(".text"); 
   
   let random = Math.floor(Math.random() * 10);
  let wordPick = words[random];
  
  
  let splitWord = wordPick.toString().split("");
 
 
  for(let j =1; j < splitWord.length-2; j++){
  
  text.innerHTML += `<span class="key"> ${splitWord[j]}</span>`
     
     
         
     
    }
    
    
    
    
  }
