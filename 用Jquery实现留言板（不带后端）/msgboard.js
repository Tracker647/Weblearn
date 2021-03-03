//Power by Jquery
var date = new Date();
var submit = $(".submit");
var msgItem;
var msglist = $(".msglist");

// import {json}  from './commentdata.js'   //failed
// var data = json;

var data = [
    {
      "content": "Export:Hello World!",
      "date": "2020-1-10"
    },
    {
      "content": "Export:Hello Python",
      "date": "2020-12-30"
    },
    {
      "content": "Export:Hello C",
      "date": "2020-1-10"
    }
    
    
];
  
console.log(data);

loadAll();

function loadAll() {
    msglist[0].innerHTML = '';
    $(document).ready(function () {                                        //初始化载入
            $.each(data, function (index, arr) {
                loadOne(data[index], index);
            })

       
    })
}

function loadOne(newComment, index) //函数功能:接受一条对象，为该对象包装出新的评论DOM并显示
{
    msgItem = $("<li class='msgItem'></li>");                                   //评论DOM的创建和相关选取
    msgItem.append("<div class='msgItem-order'></div>");
    msgItem.append("<div class='msgItem-user'>Anonymous</div> ");
    msgItem.append("<div class='msgItem-content'><p></p></div>");
    msgItem.append(" <div class='msgItem-date'></div>");
    msgItem.append(`<button class='msgItem-del' onclick = 'del(${index})'>删除</button>`);

    var msg_order = msgItem.children('.msgItem-order');
    var msg_content = msgItem.children('.msgItem-content');
    var msg_date = msgItem.children('.msgItem-date');


    $(msg_order).text(`#${index}`);
    $(msg_content).text(newComment['content']);   //加载json中的数据到评论的DOM上
    $(msg_date).text(newComment['date']);

    msglist.append(msgItem)
}

submit.click(function () {
    if ($("textarea").val()) {
        var newRecord = {
            "content": $("textarea").val(),
            "date": new Date().toLocaleString()
        };

        var newRecordStr = JSON.stringify(newRecord);   //将新纪录转化为字符串打印
        console.log(`新记录:${newRecordStr}`);
        data.push(newRecord);

        // json = data;            //企图将改动覆写回数据源，失败

        $("textarea").val("");
        loadAll();
     
    }
    else {
        alert("你还没输入任何评论！");
    }

})

function del(e) {
    msgItem = $('.msgItem');
    var deleted = {
        "content": $(msgItem[e]).children('.msgItem-content').text(),
        "date": $(msgItem[e]).children('.msgItem-date').text()
    };

    var deletedStr = JSON.stringify(deleted);
    console.log(`要删除的记录:${deletedStr}`);
    data.splice(e, 1);
    loadAll();
}
