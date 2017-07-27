
function blockListBtnOnclick(){
    hiddenSettingList()
    
    var status = document.getElementsByClassName("blockList")[0].style.display;
    if(status == "none"){
        // open
        document.getElementsByClassName("blockList")[0].style.display = "block"
        document.getElementById('blockListBtn').style.opacity = 1;
        return;
    }
    // close
    document.getElementsByClassName("blockList")[0].style.display = "none"
    document.getElementById('blockListBtn').style.opacity = 0.5;
}

function hiddenBlockList(){
    document.getElementsByClassName("blockList")[0].style.display = "none";    
    document.getElementById('blockListBtn').style.opacity = 0.5;
}

function blockListBtnOnmouseover(x){
    if(document.getElementsByClassName("blockList")[0].style.display == "none" )
        x.style.opacity = 1;
}

function blockListBtnOnmouseout(x){
    if(document.getElementsByClassName("blockList")[0].style.display == "none" )
        x.style.opacity = 0.5;
}
// function listBtnOnMouseOver(){
//     document.getElementsByClassName("blockList")[0].style.display = "block";
// }

function settingListBtnOnclick(){
    hiddenBlockList();

    var status = document.getElementsByClassName("settingList")[0].style.display;
    if(status == "none"){
        // open
        document.getElementsByClassName("settingList")[0].style.display = "block"
        document.getElementById('settingListBtn').style.opacity = 1;
        return;
    }
    // close
    document.getElementsByClassName("settingList")[0].style.display = "none"
    document.getElementById('settingListBtn').style.opacity = 0.5;
}

function hiddenSettingList(){
    document.getElementsByClassName("settingList")[0].style.display = "none";    
    document.getElementById('settingListBtn').style.opacity = 0.5;
}

function settingListBtnOnmouseover(x){
    if(document.getElementsByClassName("settingList")[0].style.display == "none" )
        x.style.opacity = 1;
}

function settingListBtnOnmouseout(x){
    if(document.getElementsByClassName("settingList")[0].style.display == "none" )
        x.style.opacity = 0.5;
}