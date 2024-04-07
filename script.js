const start=document.getElementById('start');
    const stop=document.getElementById('stop');
    const text=document.getElementById('text');
    let lineargradient=[];
    function chnageColor(){
        
        function hexNum(max,min){
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        let red=hexNum(255,0);
        let green=hexNum(255,0);
        let blue=hexNum(255,0);
        let red1=hexNum(255,0);
        let green1=hexNum(255,0);
        let blue1=hexNum(255,0);
        let red2=hexNum(255,0);
        let green2=hexNum(255,0);
        let blue2=hexNum(255,0);
        let deg=hexNum(120,60);
        hexCode1=`rgb(${red},${green},${blue})`;
        hexCode2=`rgb(${red1},${green1},${blue1})`;
        hexCode3=`rgb(${red2},${green2},${blue2})`;
        let linearGradient =`linear-gradient(${deg}deg,${hexCode1},${hexCode2},${hexCode3})`;
        lineargradient.push(linearGradient);
        document.body.style.background=linearGradient;
    }
    
    
    let ChangeColor;
    start.addEventListener('click',function (){
        ChangeColor= setInterval(chnageColor,1700);
        document.querySelector('p').innerHTML='';
       document.querySelector('.text').style.border='none';
       text.style.border='none';
       text.style.background='none';
       text.style.backdropFilter='none';

    },false);
    
      stop.addEventListener('click',function (){
        clearInterval(ChangeColor);
       let size= lineargradient.length;
       let Color = lineargradient[size-1];
       text.innerHTML=Color+';';
       text.style.border='1px solid #c89df0';
       text.style.background='#2d1b3d9f';
       text.style.backdropFilter='0.8';
    },false);

    text.addEventListener('click',(e)=>{
        navigator.clipboard.writeText(text.innerHTML);
    })