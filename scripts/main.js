
Skip to content

    Why GitHub?
                          


                    
Team
Enterprise
Explore
                      

                    
Marketplace
Pricing
                       


                        

Sign in
Sign up
roy-tian /
learning-area

8
251

    526

Code
Issues 1
Pull requests 1
Actions
Projects
Security

    Insights

Join GitHub today

GitHub is home to over 50 million developers working together to host and review code, manage projects, and build software together.
learning-area/extras/getting-started-web/beginner-html-site-scripted/scripts/main.js /
@roy-tian
roy-tian initial commit
Latest commit 7e55ea3 on 13 May
History
1 contributor
40 lines (35 sloc) 1.09 KB
// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
};

// 设置个性化欢迎信息
// 获取新按钮和标题的引用
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// 个性化欢迎信息设置函数
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}

// 初始化代码：在页面初次读取时进行构造工作：
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

// 为按钮设置 onclick 事件处理器：
myButton.onclick = function() {
  setUserName();
};
