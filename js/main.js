/**
 * Created by Administrator on 2016/6/13.
 */

window.onload=function(){

    var box=document.getElementById('container');

    var imgs=box.getElementsByTagName('img');

    var width=imgs[0].offsetWidth;

    var tmpwidth=160;

    function init(){
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.left=(i>0?(width+tmpwidth*(i-1)):0)+"px";
        }
    }
    init();

    var translate=width-tmpwidth;
    for(var i=0;i<imgs.length;i++){
        (function(i){
            imgs[i].onmouseover=function(){
                init();
                if(i>=1){
                    for(var j=1;j<=i;j++){
                        imgs[j].style.left=parseInt(imgs[j].style.left,10)-translate+'px';
                    }
                }
            }
        })(i);

    }


}