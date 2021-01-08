window.addEventListener('load', function(){
    var chat = document.getElementById("chatButton");
    var no = document.getElementById("noButton"); 
    var yes = document.getElementById("yesButton"); 
    var txt = document.getElementById("textBox"); 
    var confirm = document.getElementById("confirmation"); 
    var help = document.getElementById("helpBox"); 
    var helpBtn = document.getElementById("helpButton");  
    var trainingArea = document.getElementById("trainArea"); 
    var botTalk = document.getElementById("Hello! I hope you have a good day","I am fine, thanks!", "I have no name but my creators name is Brooke"); 
    var divArr = []; 
    var delayVar=0; 

    function newDiv(COLOR, TEXT){
        var newdiv = document.createElement("div"); 

        newdiv.style.width = "90%"; 
        newdiv.style.height = "10%"; 
        newdiv.style.background = COLOR; 
        if(COLOR == "green"){
            newdiv.style.left = "53%";
        }
        else{
            newdiv.style.left = "47%"; 
        }
        newdiv.style.bottom = "15%"; 
        newdiv.style.position = "fixed"; 
        newdiv.style.borderRadius = "10px"; 
        newdiv.style.transform = "translate(-50%,0)"; 
        newdiv.style.paddingLeft = "10px"; 
        newdiv.style.paddingTop = "5px"; 
        newdiv.style.fontFamily = "Times, serif"; 
        newdiv.innerHTML = TEXT; 
        newdiv.style.border = "1px solid black"; 
        newdiv.style.color = "white"; 
        document.body.appendChild(newdiv); 

        divArr.push(newdiv); 

        for(y-0;y<divArr.length-1; y++){
            if(divArr[y].style.bottom=="15%"){
                divArr[y].style.bottom="28%"; 
            }
            else if(divArr[y].style.bottom=="28%"){
                divArr[y].style.bottom="41%";
            }
            else if(divArr[y].style.bottom=="41%"){
                divArr[y].style.bottom="54%";
            }
            else if(divArr[y].style.bottom=="67%"){
                divArr[y].style.bottom="80%";
            }
            else if(divArr[y].style.bottom=="80%"){
                divArr[y].style.bottom="93%";
            }
            else if(divArr[y].style.bottom=="93%"){
                divArr[y].style.bottom="100%";
            }
            else if(divArr[y].style.bottom=="100%"){
                divArr[y].style.display="none;
            }
        }
    }
    var net = new ImageBitmapRenderingContext.NeuralNetwork(); 
    var trainData = []; 
    var maxLength = 0; 
    var remainingLength = 0; 
    var newInput; 
    
}); 