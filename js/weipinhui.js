window.onload = function () {
	var blockfour = document.getElementById('blockfour');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var animated=false;
	var timer;

     //自动切换
     function animate (offset) {
     	animated=true;
     	var newleft=parseInt(list.style.left)+offset;
     	var time=300; /*位移总时间*/
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
     function play(){
     	timer =setTimeout ( function(){
     		next.onclick();
     		play();
     	},3000);
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
           //下一页的单击操作
           next.onclick = function () {
           	if (index == 3) {
           		index = 1;
           	}
           	else {
           		index += 1;
           	}
           	showButton();
           	if(!animated){
           		animate(-1511);
           	}
           }
			//上一页的单机操作
			prev.onclick = function () {
				if (index == 1) {
					index = 3;
				}
				else {
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
             setCss3(photo,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
             setCss3(photo1,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
             setCss3(photo2,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
             setCss3(photo3,{transform:"rotate(10deg)","transform-origin":"50% 50%"})
             var angel=0;
             setInterval(function(){
                 angel+=5;
                setCss3(photo,{transform:"rotate("+angel+"deg)","transform-origin":"50% 50%"})
                setCss3(photo1,{transform:"rotate("+angel+"deg)","transform-origin":"50% 50%"})
                setCss3(photo2,{transform:"rotate("+angel+"deg)","transform-origin":"50% 50%"})
                setCss3(photo3,{transform:"rotate("+angel+"deg)","transform-origin":"50% 50%"})
             },30)
             function setCss3(obj,objAttr){
              //循环属性对象
                 for(var i in objAttr){
                     var newi=i;
                  //判断是否存在transform-origin这样格式的属性
                    if(newi.indexOf("-")>0){
                    var num=newi.indexOf("-");
                    newi=newi.replace(newi.substr(num,2),newi.substr(num+1,1).toUpperCase());
                  }
                //考虑到css3的兼容性问题,所以这些属性都必须加前缀才行
                obj.style[newi]=objAttr[i];
                newi=newi.replace(newi.charAt(0),newi.charAt(0).toUpperCase());
                obj.style[newi]=objAttr[i];
                obj.style["webkit"+newi]=objAttr[i];
                obj.style["moz"+newi]=objAttr[i];
                obj.style["o"+newi]=objAttr[i];
                obj.style["ms"+newi]=objAttr[i];
        }
    }

}
        //手风琴效果
        function squeezebox(){
           var subject=document.getElementById('subject');
           var ul=subject.children[0];
           var li=ul.children;
           for (var i = 0; i < li.length; i++) {
            li[i].onmouseover=function(){
                for (var j  = 0; j <li.length; j++) {
                    if(li[j]!=this){
                        animate(li[j], {"width": 250});
                        li[j].className="sum";
                    }
                }
                animate(this, {"width":500});
                this.className="big";
            }
        };
    }

    function animate(obj, json) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () { 
            var flag = true;
            for (var k in json) {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
                if (leader != target) {
                flag = false;//告诉标记 当前这个属性还没到达
            }
        }
        if (flag) {
            clearInterval(obj.timer);
        }
    }, 25);
    }
