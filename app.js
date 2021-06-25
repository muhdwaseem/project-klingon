var btntranslate =document.querySelector("#btn-translate");

var inputtext= document.querySelector("txtarea");

var outputtxt= document.querySelector("output");
var serverURL="https://api.funtranslations.com/translate/klingon.json"

function translationurl(text){
    return serverURL + "?" + "text=" + text;
}
function errorhandler(error){
    console.log("error occured",error)
}


function clickeventhandler(){
    
fetch(translationurl(inputtext))
.then(Response=>Response.json())
.then(json=>{
    var translatedtext =json.error;
   outputtxt.innerText=translatedtext; 
}  )
.catch(errorhandler)

}
btntranslate.addEventListener("click", clickeventhandler)
 

