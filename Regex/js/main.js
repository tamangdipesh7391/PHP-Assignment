document.getElementById('name').addEventListener('keyup',function(){
    var val = this.value;
    var x = val.match(/\w[a-zA-Z]+/ig);
    if(x){
      
        this.value = x;
        console.log(x);
    }
   
    

});