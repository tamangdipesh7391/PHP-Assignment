function validation(){
    // function checkName(){
    var val = document.getElementById('name').value;
    if(val == ''|null){
        document.getElementById('nameError').innerHTML = 'Username is required!';
        return false;
    }
    var exp = /^[a-zA-Z .]{4,20}$/g;
    if(exp.test(val)){
        document.getElementById('name').style.border = '2px solid';
        document.getElementById('name').style.borderColor = 'blue';
        document.getElementById('nameError').innerHTML = '';
    }else{
      
        if(val.length<4){
            document.getElementById('nameError').innerHTML = 'Name must be more than 3 character';

        }else{
            document.getElementById('nameError').innerHTML = 'Invalid character';
        }
        
        document.getElementById('name').style.border = '2px solid';
        document.getElementById('name').style.borderColor = 'red';
        return false;
    }
// }
// function checkPass(){
    var val = document.getElementById('password').value;
    if(val == ''|null){
        document.getElementById('passError').innerHTML = 'Password is required!';
        return false;
    }
    var exp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/g;
    if(exp.test(val)){
        document.getElementById('password').style.border = '2px solid';
        document.getElementById('password').style.borderColor = 'blue';
        document.getElementById('passError').innerHTML = '';
    }else{
        if(val.length<9){
          document.getElementById('passError').innerHTML = 'Password must be atleast 8 charecter';

        }else{
            document.getElementById('passError').innerHTML = 'Password must contain at least 1 (uppercase,special character and number)';
        }
        
        document.getElementById('password').style.border = '2px solid';
        document.getElementById('password').style.borderColor = 'red';
        return false;
    }
// }

// function checkEmail(){
    var val = document.getElementById('email').value;
    if(val == ''|null){
        document.getElementById('emailError').innerHTML = 'Email is required!';
        return false;
    }
    var exp = /^([a-z 0-9\.-]+)@([a-z0-9]+).([a-zA-Z.]+[a-zA-Z])$/g;
    if(exp.test(val)){
        document.getElementById('email').style.border = '2px solid';
        document.getElementById('email').style.borderColor = 'blue';
        document.getElementById('emailError').innerHTML = '';

    }else{
        document.getElementById('emailError').innerHTML = 'Invalid email format!';
        document.getElementById('email').style.border = '2px solid';
        document.getElementById('email').style.borderColor = 'red';
        return false;
    }
// }





    
}
function checkMsg(){
    var val = document.getElementById('msg').value;
   var val1 = val.replace(/fuck|fek|mf/i,"***");
    console.log(val1);
    document.getElementById('msg').value = val1;
}
