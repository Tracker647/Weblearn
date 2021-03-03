实现思路：用html和css做出留言板的大致结构布局和样式，并用js进行逻辑实现

实现功能：
- 回车提交评论内容
- 显示评论者的姓名，评论内容，发布时间
- 可对评论做编辑和删除操作
- (重要)刷新后仍旧保存上一次的评论内容



案例目的：重新熟悉javascript的dom操作，借此练习综合运用html+css+js制作自己的网页功能插件,以及数据缓存(如何确保浏览器刷新后还是上一次的内容？)

显示评论内容的js伪代码：
- 获取文本框的打字内容
- 选中msgitem_index作为复制源，打印的DOM类名为msgitem(作为评论的统一样式，注：msgitem_index不可见)
- 将打字内容赋值给msgitem（DOM）的发言部分
- 由源打印msgitem
- 此后点击提交按钮只要发现文本框有输入就拷贝一份msgitem_index并打印出msgitem

评论删除功能：
    删除按钮检测到点击
    选中检测到点击的msgitem的DOM
    删除整个DOM

实现过程中出现的问题：

选中删除(button)并点击，用console.log检查弹出的元素是什么，却发现毫无响应



经过询问发现将将js代码修改，可解决问题，思考后发现其实是个很简单的逻辑问题= =：

![](C:\Users\hw\Pictures\Camera Roll\QQ图片20201230204638.jpg)

<img src="E:\Users\58430\Documents\Tencent Files\584301661\FileRecv\MobileFile\IMG_20201230_204243.jpg" alt="IMG_20201230_204243" style="zoom: 25%;" /

![image-20201230202548941](C:\Users\hw\AppData\Roaming\Typora\typora-user-images\image-20201230202548941.png)

```javascript
var del = document.querySelectorAll(".msgItem-del");

for(var i = 0; i< del.length ; i++){

    del[i].onclick = function () {
        console.log(del[0]);
    }

}
   
  
```



源代码：

msgboard.html

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>留言板</title>
    <link rel="stylesheet" href="../css/base.css">
    <link rel="stylesheet" href="msgboard.css">
</head>

<body>
    <!-- 留言板部分 -->
    <div class="msgboard">
        <textarea name="" id="" cols="40" rows="5" placeholder="在这里输入你的想法"></textarea>
        <button class="submit btn-default">提交</button>
        <ul class="msglist">
            评论列表 
        </ul>
    </div>


    <!-- 评论部分 -->
    <li class="msgItem-index">
        <div class="msgItem-user">Anmoyous</div>
        <div class="msgItem-order">#1</div>
        <div class="msgItem-content">
            <p>示例</p>
        </div>
        <button class="msgItem-del btn-default">删除</button>
    </li>
</body>
<script src="msgboard.js"></script>

</html>
```

msgboard.js

```javascript
var text = document.querySelector(".msgboard textarea"); //文本内容
var submit = document.querySelector(".submit");         //提交按钮
var msglist = document.querySelector(".msglist");       //评论列表

submit.onclick = function () {
    // 显示提交后的评论内容，这是最基础的
    if (text.value == '') {
        alert("你没有输入内容");
        return false;

    } else {
        var msgItem_index = document.querySelectorAll(".msgItem-index");
        var msgItem = msgItem_index[0].cloneNode(true);
        msgItem.className = "msgItem";

        var msg_content = msgItem.querySelector(".msgItem-content p");
        var msg_order = msgItem.querySelector(".msgItem-order");

        msg_content.innerHTML = text.value;
        msglist.append(msgItem);  //添加评论  
        msgItem.setAttribute('index',msglist.childNodes.length - 1);
        console.log(`添加了1条评论，编号${msgItem.getAttribute('index')}`); 

        msg_order.innerHTML = `#${msgItem.getAttribute('index')}`;
        text.value = ""; //添加评论后清空内容    	
        
    }
    
    var del = document.querySelectorAll(".msgItem-del");
    for(var i = 0; i< del.length ; i++)
    {
        console.log(del[i].parentNode);
        console.log(del.length);
        del[i].onclick = function () {
            msglist.removeChild(this.parentNode);
        }

    }

}//思考：上图函数中选中的变量出了函数后还能调用吗？

console.log(msgItem_index);

```



```css
.msgboard textarea {
    /* width: 85vw; */
    height: 15rem;
    margin: 2rem 0;
}

.msgboard button {
    margin-right: auto;
}

.msgItem-index{
    display: none;
}

.msgItem-index,.msgItem {
    width: 21rem;
    padding: 0 1rem;
    border-bottom: 1px solid #767676;
    background-color: pink;
}

.msgItem-user {}

.msgItem-content {
    border: 1px solid #767676;
    height: 7rem;
}

.msgItem-del {
    display: inline-block;
    margin-left: 89%;
    color: blue;
    cursor: pointer;
}

.msgItem-content>p {
    height: 20vh;
    margin: 0;
}

hr {
    width: 100%;
}

.msgboard {
    
}
```
