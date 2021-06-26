var btntranslate =document.querySelector("#btn-translate");

var inputtext= document.querySelector("#txtarea");

var outputtxt= document.querySelector("#output");
var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function translationurl(text){
    return serverURL + "?" + "text=" + text;
}
function errorhandler(error){
    console.log("error occured",error)
}


function clickeventhandler(){
 
fetch(translationurl(inputtext))
.then(Response=>Response.json())
.then(json=>console.log(json)

  )
.catch(errorhandler)

}
btntranslate.addEventListener("click", clickeventhandler)
 

