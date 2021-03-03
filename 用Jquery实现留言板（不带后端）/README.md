自学前端三件套到了一定程度不知道干什么，想到以前用C语言实现学生管理系统的经历，便想到能不能自己所学的知识做一个CRUD完备的留言板，于是便开始动手起来，由于JS实现代码太过繁琐，便采用Jquery实现，按照MVC的思路去做，图示如下

![Snipaste_2021-01-15_10-27-53](https://img2020.cnblogs.com/blog/1887105/202101/1887105-20210118232346298-1227543421.png)

评论的数据都保存在commondata.json中，需要用js动态引用json，设想效果大概如下：

#### **添加评论操作**

![image-20210114153821162](C:\Users\hw\AppData\Roaming\Typora\typora-user-images\image-20210114153821162.png)

Model,提前评论前





![image-20210114153937087](C:\Users\hw\AppData\Roaming\Typora\typora-user-images\image-20210114153937087.png)

view,点"提交"按钮提交评论





![image-20210114154051811](C:\Users\hw\AppData\Roaming\Typora\typora-user-images\image-20210114154051811.png)

model,提交评论后



#### 删除评论操作

![image-20210114154432010](C:\Users\hw\AppData\Roaming\Typora\typora-user-images\image-20210114154432010.png)

model,删除评论前





![image-20210114154735860](C:\Users\hw\AppData\Roaming\Typora\typora-user-images\image-20210114154735860.png)

view,点击要删除的评论，图中为("Hello C")





![image-20210114154837192](C:\Users\hw\AppData\Roaming\Typora\typora-user-images\image-20210114154837192.png)

model,删除评论后



目前功能就添加和删除评论，但是都涉及用Controller（即js文件上的代码）去动态引用并修改外部json的文件，**个人认为这留言板应该是一个运行在浏览器内的应用，能放在服务器上并保存所有来自网络各处的记录，**如果要保存记录就要能对存储数据的文件进行操作，之前尝试按照C操作文件的思想学了Node.js的一些语法试图动态修改json文件，但是失败了。最后发现这部分涉及到后端对数据库的操作，学习成本对这个假期来说比较高，只好搁置在这里了。