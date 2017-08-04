function logout(){
    hiddenSettingList();
    document.location.href="http://localhost:8080/start";
}

function info(){
    console.log({nowpage:nowPage})
    nowPage = 0;

    document.getElementsByClassName('prePageDiv')[0].style.display = "none";
    document.getElementsByClassName('startBtn')[0].style.display = "none";
    document.getElementsByClassName('teachPageContainer')[0].style.display = "block";
    document.getElementsByClassName('footer')[0].innerHTML = "1/6 step";
    document.getElementsByClassName('imageContainer')[0].style.backgroundImage = "url('img/teachPage/Welcome.jpg')";
    hiddenSettingList()

}

function editName(){
    hiddenSettingList();
    // windowOnclick();
    document.getElementsByClassName('modalContainer')[0].style.display = "block";
    var name = document.getElementsByClassName('userName')[0].innerHTML;
    document.getElementsByClassName('newName')[0].value = name;
}

function saveName(){
    var newName = document.getElementsByClassName('newName')[0].value;
    if (!newName || newName.length > 20) {
        document.getElementsByClassName('newName')[0].value = 
            document.getElementsByClassName('userName')[0].innerHTML;
        alert('不能好好取名字膩？(ﾒ ﾟ皿ﾟ)ﾒ')
        return;
    }
    document.getElementsByClassName('userName')[0].innerHTML = newName;

    document.getElementsByClassName('modalContainer')[0].style.display = "none";
    
    userData.name = newName;

    let host = 'http://localhost:8080';
    $.ajax({
        url: host + '/home',
        type: 'POST',
        data:{
            userData,
            _csrf: $('meta[name="_csrf"]').attr('content')
        },
        error: function(){
            alert('Save Failed!');
        },
        success: function(result) {
            if(result) {
                console.log(result);
            }
        }
    });
    
}

window.onclick = function(event) {
    let modal = document.getElementsByClassName('modalContainer')[0];

    if (event.target == modal) {
        modal.style.display = "none";
    }
}
