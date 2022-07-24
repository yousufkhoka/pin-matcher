
document.getElementById('generate-btn').addEventListener('click', function(){
    let randomNumber = Math.random() * 9000 + 1000
    let randomRoundNumber = Math.round(randomNumber)
    document.getElementById('generate-pin').value = randomRoundNumber    
})

let output = document.getElementById('output');
function inputSection(num){
    output.value += num
}

function outputDelete(){
    output.value = output.value.slice( 0, -1)
}
function outputClr(){
    output.value = ""
}
document.getElementById('submit').addEventListener('click' , function(){
   const roundNumber = document.getElementById('generate-pin').value
   const tryLeft = document.getElementById('tryLeft')
   const picMatched = document.getElementById('picMatched')
   const pinNotMatch = document.getElementById('pinNotMatch') 
   


        if( roundNumber == output.value){
            picMatched.style.display = "block"
            pinNotMatch.style.display = "none"

     }
     else{
        picMatched.style.display = "none"
        pinNotMatch.style.display = "block"

        let tryLeftNum = parseFloat(tryLeft.innerText)
        tryLeftNum--
        tryLeft.innerText = tryLeftNum
        
        if(tryLeft.innerText == -1){
            document.getElementById('submit').style.display = 'none'
            tryLeft.innerText = 'time over'
        }



     }
     
})
