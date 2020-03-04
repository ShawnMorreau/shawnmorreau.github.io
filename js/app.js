(function(window){
    document.addEventListener("mouseup", function(e){
        var container = document.getElementById("clickable-region");
        var toggle = document.querySelector(".toggler");
        
        if((!container.isEqualNode(e.target)
            && !container.contains(e.target))){
                if(e.target.isEqualNode(toggle)){
                    //close like normal
                }else{
                    toggle.checked = false;
                }
                
            }
    });
})(window);