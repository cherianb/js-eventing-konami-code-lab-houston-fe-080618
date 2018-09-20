const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let userCode=[];

function init() {
 
 function keySequence (e){
  userCode.push(e.which)
  
  for(let i=0; i<=code.length-1;){
     if (userCode[i] === code[i])
    
  }
 
 
 
 
 
   loop through code
   if code matches userCode
   the alert('yes its correct')
   else 
   userCode= []
   userCode.push(e.which);
   
   alert('the key pressed is ' + e.which)
 }
 document.addEventListener('keydown', keySequence)
 
}