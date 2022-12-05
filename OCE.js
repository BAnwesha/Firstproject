let htmlC= document.querySelector(".Code-editor .html #htmlta").value;
let cssC= "<style>"+ document.querySelector(".Code-editor .css #cssta").value +"</style>";
let jsC= document.querySelector(".Code-editor .js #jsta").value;
let output=document.querySelector("#result");

function run()
{
    let htmlC= document.querySelector(".Code-editor .html #htmlta").value;
let cssC= "<style>"+ document.querySelector(".Code-editor .css #cssta").value +"</style>";
let jsC= document.querySelector(".Code-editor .js #jsta").value;
let output=document.querySelector("#result");
    output.contentDocument.body.innerHTML= htmlC +cssC;
    output.contentWindow.eval(jsC);
}
document.querySelector(".Code-editor #htmlta").addEventListener("keyup", run);
document.querySelector(".Code-editor #cssta").addEventListener("keyup", run);
document.querySelector(".Code-editor #jsta").addEventListener("keyup", run);