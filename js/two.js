//显示登陆页面
function showpage() {
    var login = document.getElementById('login');
    setStyle(login,'display','flex');
    setStyle(login,'top',getScrollTop()+'px');
}

function setStyle(obj, name, value) {
    obj.style['Webkit'+name.charAt(0).toUpperCase()+name.substring(1)]=value;
    obj.style[name]=value;
}

//隐藏登陆页面
function hiddenpage() {
    var login = document.getElementById('login');
    var loginm = document.getElementById('loginm');     
    setStyle(login,'display','none');
    backLogin();
    clearLogin();
}

//显示登陆页面
function backLogin() {
    var loginm = document.getElementById('loginm');
    var From = document.getElementsByTagName('form');
    
    document.getElementById('huan').innerHTML='登录';
    setStyle(From[1],'display','none');
    setStyle(From[0],'display','block');
    setStyle(loginm,'height','300px');
    clearregister();
}
//清除登陆页面input
function clearLogin() {
    var loginl = document.getElementById('loginl');
    var input = loginl.getElementsByTagName('input');
    for (var i in input) {
        input[i].value='';
    }
}

//显示注册页面
function intoRegister() {
    var loginm = document.getElementById('loginm');
    var oFrom = document.getElementsByTagName('form');

    document.getElementById('huan').innerHTML='注册';
    setStyle(oFrom[0],'display','none');
    setStyle(oFrom[1],'display','block');
    setStyle(loginm,'height','450px');
}

//清除注册页面input
function clearregister() {
    var uname=document.getElementById('uname');
    var utel =document.getElementById('utel');
    var upass =document.getElementById('upass');
    var upass1 =document.getElementById('upass1');
    uname.value='';
    utel.value='';
    upass.value='';
    upass1.value='';
}


//判断登陆
function judgelogin() {
   var loginname=document.getElementById('loginname');
   var loginpass =document.getElementById('loginpass');
   if(loginname.value==''){
         alert('用户名为空，请重新输入');  
   }else if(loginpass.value==''){
         alert('密码为空，请重新输入');
   }else{
         find();
   }
}

const name = /^\d{3,6}$/;
const tel  = /^1\d{10}$/;
const pass =/^\d{3,6}$/;

//判断注册
function judgeregister(){
   var uname=document.getElementById('uname');
   var utel =document.getElementById('utel');
   var upass =document.getElementById('upass');
   var upass1 =document.getElementById('upass1');

   if(uname.value==''){
        alert('用户名为空，请重新输入');
   }else if(!name.test(uname.value)){
        alert('用户名格式错误，请重新输入');
        uname.value='';
   }else if(site.uname==loginname){
              alert('此用户名已存在，请重新输入');
             loginname='';
   }else if(utel.value==''){
        alert('手机号为空，请重新输入');
   }else if(!tel.test(utel.value)){
        alert('手机号格式错误，请重新输入');
        utel.value='';
   }else if(upass.value==''){
        alert('密码为空，请重新输入');
   }else if(!pass.test(upass.value)){
        alert('密码格式错误，请重新输入');
        upass.value='';
   }else if(upass1.value==''){
        alert('确认密码为空，请重新输入');
   }else  if(upass.value!=upass1.value){
        alert('两次密码不同，请重新输入');
   }else{
        save();
        alert('恭喜，注册成功');
        var from = loginm.getElementsByTagName('form');
        setStyle(from[1],'display','none');
        setStyle(from[0],'display','block');
        setStyle(loginm,'height','320px');
        clearregister();
   }
}
//本地存储数据
function save(){  
        var site = new Object;
        site.uname = document.getElementById('uname').value;
        site.utel = document.getElementById('utel').value;  
        site.upass = document.getElementById('upass').value;
        var str = JSON.stringify(site); // 将对象转换为字符串
        localStorage.setItem(site.uname,str); 
    }  
//查找数据  
function find(){  
        var loginname = document.getElementById('loginname').value;
        var loginpass = document.getElementById('loginpass').value;
        var str = localStorage.getItem(loginname);
        var site = JSON.parse(str);
        if(site.uname==''){
             alert('此账号不存在');
             loginname='';
        }else if(loginname!=site.uname){
             alert('账号错误，请重新输入');
             loginname='';
        }else if(!name.test(loginname)){
             alert('账号格式错误，请重新输入');
             loginname='';
        }else if(loginpass!=site.upass){
             alert('密码错误，请重新输入');
             loginpass='';
        }else if(!pass.test(loginpass)){
             alert('密码格式错误，请重新输入');
             loginpass='';
        }else{
            alert('恭喜，登录成功');
            clearLogin();
            var login = document.getElementById('login');
            setStyle(login,'display','none'); 
        } 
    }  