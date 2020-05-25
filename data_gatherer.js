function myFunction() {
    var bodyScripts = document.querySelectorAll("body script");

    for(var i=0; i<bodyScripts.length; i++){
        bodyScripts[i].remove();
    }
    
    var str = document.body.textContent;
    document.body.innerHTML = '<pre>'+str+'</pre>';
}