// 随机排列
function shuffle(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        var idx = Math.floor(Math.random() * (len - i));
        var temp = arr[idx];
        arr[idx] = arr[len - i - 1];
        arr[len - i - 1] = temp;
    }
}
  
// 渲染数据
function renderlink(data) {
    var name, avatar, site, li = "";
    shuffle(data);
    for (var i = 0; i < data.length; i++) {
        name = data[i].name;
        avatar = data[i].avatar;
        site = data[i].site;
        info = data[i].info;
        li += '<div class="card"><img class="ava nomediumzoom" src="' + avatar + '"/><div class="card-header"><div><a href="' +  site + '" target="_blank">' + name + '</a> </div><div class="info">' + info + '</div></div></div>';
    }
    document.querySelector(".link-navigation").innerHTML = li;
}

// 获取 json 文件
fetch('/links/linklist.json')
    .then(response => response.json())
    .then(res => renderlink(res));
