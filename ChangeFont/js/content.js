chrome.runtime.sendMessage({todo: "showPageAction"});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if(request.todo == "changeColor"){
        var addColor = request.clickedColor;
        document.getElementsByClassName("p-name")[0].setAttribute("style", "color:"+addColor+";");
    }
})
window.onload = function(e){
    console.log(document.getElementsByClassName("p-name"));
    document.getElementsByClassName("js-pinned-repos-reorder-container")[0].innerHTML = ""
}