var str ='';
var x = 0;
function addList(a){
    if(a != 'plus' && a != 'subtract' && a!= 'multiply' && a != 'divide' && a != 'ac'){
        str += a;
        display(str);
        console.log(Number(str));
    } else if(a == 'plus'){
        x += Number(str);
        str = '';
        display(x);
        console.log(x);
    }else if(a == 'subtract'){
        x -= Number(str);
        str = '';
        display(x);
        console.log(x);
    }else if(a == 'multiply'){
        x *= Number(str);
        str = '';
        display(x);
        console.log(x);   
    }else if(a == 'divide'){
            x = x/Number(str);
            str = '';
            display(x);
            console.log(x);
    }else if(a == 'ac'){
        x = '';
        str = '';
        display(x);
    }
}
function display(z){
        document.getElementById('result').innerText = z;   
}