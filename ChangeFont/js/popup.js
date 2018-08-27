window.onload = function(){
    const colorInput = document.getElementById("fontColor");
    const colorBtn = this.document.getElementById("change");
    var color = colorInput.value;

    const onlyColor = "^#([0-9abcdef]{3,6})$";

    colorInput.addEventListener("keyup", function(){
        var re = new RegExp(onlyColor);
        if(re.test(this.value)){
            this.style.boxShadow = "0 0 20px #0e8c6a";
            color = this.value;
        }else{
            this.style.boxShadow = "0 0 20px #d10606";
        }
    });

    colorBtn.addEventListener("click", function(){
        console.log(color);
        if(color != ""){
            chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color });
            });
        }
    });
}