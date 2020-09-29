function checkName(){
    var val = document.getElementById('name').value;
    var exp = /^[a-zA-Z .]{4,20}$/g;
    if(exp.test(val)){
        document.getElementById('name').style.border = '2px solid';
        document.getElementById('name').style.borderColor = 'blue';
    }else{
        document.getElementById('name').style.border = '2px solid';
        document.getElementById('name').style.borderColor = 'red';

    }
}
function checkPass(){
    var val = document.getElementById('password').value;
    var exp = /^[A-Z]+[a-z]+[0-9]+[@|#|!|&|^|%|$|\*|\(|\)|-|\+|=]+$/g;
    if(exp.test(val)){
        document.getElementById('password').style.border = '2px solid';
        document.getElementById('password').style.borderColor = 'blue';
    }else{
        document.getElementById('password').style.border = '2px solid';
        document.getElementById('password').style.borderColor = 'red';

    }
}

function checkEmail(){
    var val = document.getElementById('email').value;
    var exp = /^([a-z 0-9\.-]+)@([a-z0-9]+).com$/g;
    if(exp.test(val)){
        document.getElementById('email').style.border = '2px solid';
        document.getElementById('email').style.borderColor = 'blue';
    }else{
        document.getElementById('email').style.border = '2px solid';
        document.getElementById('email').style.borderColor = 'red';

    }
}



function checkMsg(){
    var val = document.getElementById('msg').value;
   var val1 = val.replace(/fuck|fek|mf/i,"***");
    console.log(val1);
    document.getElementById('msg').value = val1;
}