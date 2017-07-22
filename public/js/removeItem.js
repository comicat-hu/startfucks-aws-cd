function removeItem(event){
    
    event.preventDefault();

    let selectItemWidth = (event.currentTarget.parentNode.style.cssText.split(' '))[5];

    for(let i = 0; i < selectItemWidth; i++) {
        let hiddenGrid = document.createElement("DIV");
        let gId = "hiddenGrid"+ n++;
        hiddenGrid.setAttribute("id", gId);
        hiddenGrid.setAttribute("ondrop","dropOnHiddenItem(event," + n + ")" );
        hiddenGrid.setAttribute("class","gridHidden");
        
        document.getElementById('main').insertBefore(hiddenGrid, event.currentTarget.parentNode);
    }

    document.body.removeChild(document.getElementById("script_" + event.currentTarget.parentNode.id));

    document.getElementById('main').removeChild(event.currentTarget.parentNode);
}