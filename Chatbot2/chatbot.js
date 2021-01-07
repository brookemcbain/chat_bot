function talk(){
    var know ={
        "Hi" : "Hello, how may I help you today?", 
        "Hello" : "Hi, how may I help you today?", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
        "" : "", 
    }; 
    var user = document.getElementById('userBox').nodeValue; 
    document.getElementById('chatLog').innerHTML = user + "<br>"; 
    if(user in know) {
        document.getElementById('chatLog').innerHTML = know[user]+ "<br>"; 
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry, I didn't understand" + "<br>";
    }

}