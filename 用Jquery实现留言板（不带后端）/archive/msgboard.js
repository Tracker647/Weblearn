//2020-12-30 原生JS实现版本，太过繁琐，已废弃

var text = document.querySelector(".msgboard textarea"); //文本内容
var submit = document.querySelector(".submit");         //提交按钮
var msglist = document.querySelector(".msglist");       //评论列表

var commentData = [
    { "order": "", "content": "", "date": "" }
]

submit.onclick = function () {
    // 显示提交后的评论内容，这是最基础的
    if (text.value == '') {
        alert("你没有输入内容");
        return false;
    } else {
        addComment();
     

    }
    function addComment()
    {
        var msgItem_proto = document.querySelectorAll(".msgItem-prototype");    //相关DOM选取
        var msgItem = msgItem_proto[0].cloneNode(true);
        msgItem.className = "msgItem";
        var msg_content = msgItem.querySelector(".msgItem-content p");
        var msg_order = msgItem.querySelector(".msgItem-order");
        var msg_date = msgItem.querySelector(".msgItem-date");
        var date = new Date();
        msg_content.innerHTML = text.value;//提取评论文本

        msglist.append(msgItem);                                               //在页面上显示
        msgItem.setAttribute('index', msglist.childNodes.length - 1);
        msg_order.innerHTML = `#${msgItem.getAttribute('index')}`;
        msg_date.innerHTML = date.toLocaleString();

        var data = {
            "order": msg_order.innerHTML,                //将评论相关数据导入JSON
            "content": text.value,
            "date": msg_date.innerHTML
        }

        commentData.push(data);

        console.log(commentData[msglist.childNodes.length - 1]);

        text.value = ""; //添加评论后清空内容    
    }

    var del = document.querySelectorAll(".msgItem-del");         //评论删除功能 
    for (var i = 0; i < del.length - 1; i++)    
    {
        del[i].onclick = function () {      
            commentData.splice(this.parentNode.getAttribute('index'),1);         //数据层：获取要删除评论的序号并将其删除
        }
    }



}//思考：上图函数中选中的变量出了函数后还能调用吗？






