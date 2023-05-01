// var win=window.open("https://www.google.com", "","width=500,height=500,scrollbars=yes,resizable=yes");
// win.focus();

function tochange(){
    let tar=document.getElementById('target');
    let select=document.getElementById('select');
    if(select.innerText=='Turn on the Bulb'){
        select.innerText='Turn off the Bulb';
        tar.outerHTML='<img src="light-bulb-gab951366d_1920.jpg"  id="target" alt="">';
    }else{
        select.innerText='Turn on the Bulb'
        tar.outerHTML='<img src="Screenshot_20230228_214754_Google.jpg"  id="target" alt="">';
    }
}