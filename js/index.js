window.onload = function () {
	var blockfour = document.getElementById('blockfour');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var animated=false;
	var timer;

     //速度变化
     function animate (offset) {
     	animated=true;
     	var newleft=parseInt(list.style.left)+offset;
     	var time=200; /*位移总时间*/
     	var interval=10;/*位移间隔时间*/
     	var speed=offset/(time/interval);/*位移速度*/
     	var go = function(){
     		if((speed<0 &&parseInt(list.style.left)>newleft)||(speed>0&&parseInt(list.style.left)<newleft)){
     			list.style.left=parseInt(list.style.left)+speed+'px';
     			setTimeout(go,interval);
     		}else{
     			animated=false; 
     			list.style.left=newleft+'px';
     			if(newleft>-1511){
     				list.style.left=-4533+'px';
     			}
     			if(newleft<-4533){
     				list.style.left=-1511+'px';
     			}
     		}
     	}
     	go();
     }

     //轮播自切
     function play() {
     	timer =setTimeout ( function(){
     		next.onclick();
     		play();
     	},2000);
     }

    //清除定时器
    function stop(){
    	clearTimeout(timer);
    }

    //按钮切换
    function showButton() {
    	for (var i = 0; i < buttons.length ; i++) {
    		if( buttons[i].className == 'on'){
    			buttons[i].className = '';
    			break;
    		}
    	}
    	buttons[index - 1].className = 'on';
    }


    var check = true;
    setInterval(function(){
        check=true;
    },1000);

    //下一页的单击操作
    next.onclick = function(){
        if(check){
            next1();
            check=false;
        }
    }; 
    
    function next1 () {
        if (index == 3) {
            index = 1;
            }else{
            index += 1;
          }
          showButton();
        if(!animated){
               animate(-1511);
    	   }
        }

	//上一页的单机操作
	prev.onclick = function (){
        if(check){
            prev1();
            check=false;
        }       
    };

    function prev1() {
		if (index == 1) {
			index = 3;
			}else{
			index -= 1;
		   }
		   showButton();
		if(!animated){
			   animate(1511);
			}
		}

     //按钮随机切换
    for (var i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
            if(this.className=='on'){
            		return;
            	}
            	var myIndex = parseInt(this.getAttribute('index'));
            	var offset = -1511 * (myIndex - index);
            	animate(offset);
            	index = myIndex;
            	showButton();
               }
        }

        blockfour.onmouseover=stop;
        blockfour.onmouseout=play;
        play();

        //手风琴效果
        squeezebox();
            
        //旋转效果
        var photo=document.getElementsByClassName("photo")[0];
        var photo1=document.getElementsByClassName("photo1")[0];
        var photo2=document.getElementsByClassName("photo2")[0];
        var photo3=document.getElementsByClassName("photo3")[0];
        xuanzhuan(photo,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
        xuanzhuan(photo1,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
        xuanzhuan(photo2,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
        xuanzhuan(photo3,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
        var dushu=0;
        setInterval(function(){
            dushu+=5;
            xuanzhuan(photo,{transform:"rotate("+dushu+"deg)","transform-origin":"50% 50%"})
            xuanzhuan(photo1,{transform:"rotate("+dushu+"deg)","transform-origin":"50% 50%"})
            xuanzhuan(photo2,{transform:"rotate("+dushu+"deg)","transform-origin":"50% 50%"})
            xuanzhuan(photo3,{transform:"rotate("+dushu+"deg)","transform-origin":"50% 50%"})
        },30)
        function xuanzhuan(obj,objAttr){
             //循环属性对象
                for(var i in objAttr){
                     var newi=i;/* newi的值transform 和  transform-origin */
                  //判断是否存在transform-origin这样格式的属性
                       if(newi.indexOf("-")>0){
                      var num=newi.indexOf("-");/*num=9，下标从0开始*/
                         newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());/*newi=transformOrigin*/
                          }
                //考虑到css3的兼容性问题,所以必须加前缀才行
                newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
                obj.style["webkit"+newi]=objAttr[i];
              }
            }

       //图文变换
       var bug = document.getElementById('bug');
       var btm = document.getElementById('btm');
       stree(bug,btm);

       var bugone = document.getElementById('bugone');
       var btmone = document.getElementById('btmone');
       stree(bugone,btmone);
       function stree(pi,ct) {
           pi.onmouseover=function(){
             pi.style.display='none';
             ct.style.display='block';
         }
         ct.onmouseout=function(){
            pi.style.display='block';
            ct.style.display='none';
        }
    }

        //第三块
        bugtwo1();
        btmtwo1();
        //第四块
        bugthree1();
        btmthree1();
        //第五快
        bugfour1();
        btmfour1();
        //回到顶部
        toTop();
    }

        //手风琴效果
        function squeezebox() {
         var subject=document.getElementById('subject');
         var ul=subject.children[0];
         var li=ul.children;
         for (var i = 0; i < li.length; i++) {
            li[i].onmouseover=function(){
                for (var j  = 0; j <li.length; j++) {
                    if(li[j]!=this){
                        animated(li[j], {"width": 250});
                        li[j].className="sum";
                    }
                }
                animated(this,{"width":500});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                this.className="big";
            }
        };
    }
    
    function animated(obj, json) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () { 
            var can = true;
            for (var k in json) {
                var begin = parseInt(getStyle(obj, k)) || 0;
                var end = json[k];
                var step = (end - begin) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                begin = begin + step;
                obj.style[k] = begin + "px";
                if (begin != end) {
                can = false;//告诉标记 当前这个属性还没到达
            }
        }
        if (can) {
            clearInterval(obj.timer);
        }
    }, 25);
    }
    
    // 获取元素的样式
    function getStyle(obj,name) {
      if(obj.currentStyle)     /*仅仅只是支持的浏览器不同*/
          return obj.currentStyle[name];        /*getComputedStyle(obj,false)：在FF新版本号中仅仅须要第一个參数，即操作对象，第二个參数写“false”也是大家通用的写法，目的是为了兼容老版本号的火狐浏览器。*/
      else
          return getComputedStyle(obj,false)[name];/*getComputedStyle可以获取当前元素所有最终使用的CSS属性值*/
      }

      //第三块3d
      var bugtwo = document.getElementById('bugtwo');
      var btmtwo = document.getElementById('btmtwo'); 
      var du = 90;
      function bugtwo1(){
        bugtwo.onmouseover=function(){
            qiehuan(bugtwo,{transform:"perspective("+2000+")"+"rotateX("+ (-90)+"deg)", "transition-duration":"2s"})
            setTimeout(function () {
                bugtwo.style.display='none';
                btmtwo.style.display='block';
                qiehuan(btmtwo,{transform:"perspective("+2000+")"+"rotateX("+(0)+"deg)","transition-duration":"2s"})
            },2000);
        }    
    }
    function btmtwo1(){
        btmtwo.onmouseout=function(){
            qiehuan(btmtwo,{transform:"perspective("+2000+") rotateX("+(-90)+"deg)" ,"transition-duration":"2s"})
            setTimeout(function () {
               btmtwo.style.display='none'; 
               bugtwo.style.display='block';
               qiehuan(bugtwo,{transform:"perspective("+2000+") rotateX("+(0)+"deg)", "transition-duration":"2s"})
           },2000);
        } 
     }



     //第四块
     var bugthree=document.getElementById('bugthree');
     var btmthree=document.getElementById('btmthree');
     var du = 90;
     function bugthree1(){
        bugthree.onmouseover=function(){ 
         qiehuan(bugthree,{transform:"perspective("+2000+") rotateY("+(-90)+"deg)" ,"transition-duration":"2s","transform-origin":"0 0"})
         setTimeout(function(){
           bugthree.style.display='none';
           btmthree.style.display='block';
           qiehuan(btmthree,{transform:"perspective("+2000+") rotateY("+(0)+"deg)" ,"transition-duration":"2s","transform-origin":"0 0"})
          },2000);   
        }   
     }
    function btmthree1(){
         btmthree.onmouseout=function(){ 
         qiehuan(btmthree,{transform:"perspective("+2000+") rotateY("+(-90)+"deg)" ,"transition-duration":"2s","transform-origin":"0 0"})
         setTimeout(function(){
           btmthree.style.display='none';
           bugthree.style.display='block';
           qiehuan(bugthree,{transform:"perspective("+2000+") rotateY("+(0)+"deg) " ,"transition-duration":"2s","transform-origin":"0 0"})
          },2000);   
        }   
     }

      //第五块
      var btmfour=document.getElementById('btmfour');
      var bugfour=document.getElementById('bugfour');
      function bugfour1() {
        bugfour.onmouseover=function(){ 
         qiehuan(bugfour,{transform:"perspective("+2000+") rotateZ("+(360)+"deg)" ,"transition-duration":"2s","transform-origin":"50% 50%"})
         setTimeout(function(){
           bugfour.style.display='none';
           btmfour.style.display='block';
           qiehuan(btmfour,{transform:"perspective("+2000+") rotateZ("+(0)+"deg)" ,"transition-duration":"2s","transform-origin":"50% 50%"})
          },2000);   
        }   
      }
      function btmfour1() {
        btmfour.onmouseout=function(){ 
        qiehuan(btmfour,{transform:"perspective("+2000+") rotateZ("+(-360)+"deg)" ,"transition-duration":"2s","transform-origin":"50% 50%"})
        setTimeout(function(){
           btmfour.style.display='none';
           bugfour.style.display='block';
          qiehuan(bugfour,{transform:"perspective("+2000+")  rotateZ("+(0)+"deg)" ,"transition-duration":"2s","transform-origin":"50% 50%"})
        },2000);   
       }   
     }


        function qiehuan(obj,objAttr){
          for(var i in objAttr){
          var newi = i; 
           if(newi.indexOf("-")>0){
                var num=newi.indexOf("-");
                           newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
                       }
                      newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
                      obj.style["webkit"+newi]=objAttr[i];
                  }
             }


            //回到顶部
            function showToTop(obj) {
                Move(obj,'opacity',100);
            }
            function hiddenToTop(obj) {
                Move(obj,'opacity',0);
            }


            window.onscroll = function () {
                var totop=document.getElementById('toTop');
                if(getScrollTop()>150){
                    showToTop(totop);
                }else{
                    hiddenToTop(totop);
                }
            }

            function Move(obj, attr, Target)
            {
                clearInterval(obj.timer);
                obj.timer=setInterval(function (){
                    var temp=0; 
                    if(attr=='opacity')
                        temp=Math.round(parseFloat(getStyle(obj, attr))*100);
                    else
                        temp=parseInt(getStyle(obj, attr));
                    var speed=(Target-temp)/7;
                    speed=speed>0?Math.ceil(speed):Math.floor(speed);
                    if(temp==Target){
                        clearInterval(obj.timer);
                    } else{
                        if(attr=='opacity'){
                            obj.style.opacity=(temp+speed)/100;
                        }else{
                            obj.style[attr]=temp+speed+'px';
                        }
                    }
                }, 30);
            }

            //返回页面顶部
            var to_Top=null;
            function toTop() {
                to_Top=setInterval(function () {
                    if(document.documentElement.scrollTop>0){      /*获取当前页面的滚动条纵坐标位置*/
                        document.documentElement.scrollTop-=20;
                    }else{
                        clearInterval(to_Top);
                    }
                },10);
            }

            //获取滚动节点
            function getScrollTop(){
                var scrollTop=0;
                if(document.documentElement&&document.documentElement.scrollTop){   /*返回文档根节点，获取当前页面的滚动条纵坐标位置*/
                    scrollTop=document.documentElement.scrollTop;
                }else if(document.body){      /*返回文档的body元素*/
                    scrollTop=document.body.scrollTop;
                }
                return scrollTop;
            }

            function toTopHover() {
                var toTop = document.getElementById('toTop');
                toTop.style.backgroundPositionY="-60px";       //改变totop背景图片的位置
            }
            function toTophide() {
                var toTop = document.getElementById('toTop');
                toTop.style.backgroundPositionY="0px";       //改变totop背景图片的位置
            }

            //二维码转90度
            function heade(){
                var  head=document.getElementById('qrcodes');
                var  df=document.getElementById('df');
                if(df.getAttribute('data-demo')=="true"){
                   qiehuan(head,{transform:"perspective("+600+") rotateX("+(0)+"deg)" ,"transition-duration":"2s"});
                   df.setAttribute('data-demo','false'); 
                }else{
                   qiehuan(head,{transform:"perspective("+600+") rotateX("+(-90)+"deg)" ,"transition-duration":"2s"});
                   df.setAttribute('data-demo','true'); 
                }  
            }
    