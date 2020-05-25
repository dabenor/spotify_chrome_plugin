function get_webpage() {
    var bodyScripts = document.querySelectorAll("body script");

    for(var i=0; i<bodyScripts.length; i++){
        bodyScripts[i].remove();
    }

    var str = document.body.textContent;
    document.body.innerHTML = '<pre>'+str+'</pre>';
}

function clean_data(){

}
//  "browser_action": {
//    "default_icon": "icon.png",
//    "default_popup": "popup.html"
//  },