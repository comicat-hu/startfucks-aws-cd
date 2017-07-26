function news(newsSite){

    let host = 'http://localhost:8080';
    let element = document.getElementById('News_'+newsSite);

    if(element){

        $.ajax({
            url: host + '/apis?q=news',
            type: 'POST',
            data:{
                newsSite,
                _csrf: $('meta[name="_csrf"]').attr('content')
            },
            error: function(){
                window.open(host + '/start', '_self');
            },
            success: function(result) {
                if(result) {
                    element.querySelector('p[name=info]').innerHTML = "";
                    for(let i in result){
                        element.querySelector('p[name=info]').innerHTML += '<a href=' + result[i].articleUrl + '>' + result[i].articleTitle + '</a><br><img style="vertical-align:middle;width:50%;height:50%;" src='+ result[i].articleImg + '><br>' + ((result[i].articleDate)? new Date(result[i].articleDate).toLocaleString() : '') + '<br><br>';
                    }
                    return;
                }
                element.querySelector('p[name=info]').innerHTML = 'Can not loading :(';
            }
        });
        setTimeout(function(){
            news(newsSite);
        },1800000);
    }
}