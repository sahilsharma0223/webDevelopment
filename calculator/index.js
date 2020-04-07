var t=0;
var index = 0;
var num1 = 0;
var num2 = 0;
var symbol =0;
var result = 0;
var error ='';
var numPrint='';
  $("button").click (function() {
     var num = this.textContent;
     var sym = this.value;

     if(error!='Error!'&&-sym==='/'||sym==='*'||sym==='+'||sym==='-'){
       num1 = parseInt(numPrint);
       symbol = sym;
       index = numPrint.length;
     }

     if(error!='Error!'&&sym==='='){
       var symerror = numPrint.substring(index-1,index);
       if(symerror==='×'||symerror==='÷'||symerror==='-'||symerror==='+'){
         $(".entry").text("Error!");
         $(".answer").text("Error!");
         error = 'Error!';
       }
       else{
       num2 = parseInt(numPrint.substring(index+1,numPrint.length));
        index = 0;
       equal(symbol);
     }
     }
     if(num==='AC'){
       AC();
     }
     else if(error!='Error!'&&sym==='CE'){
       CE();
     }
     else if(error!='Error!'&&num!=='AC'&&num!=='CE'&&num!=='='){
        entryPrint(num);
     }

  });

function entryPrint(num){
   $(".entry").text(numPrint+num);
       numPrint = numPrint+num;
}

function AC(){
  $(".entry").text("0");
  $(".answer").text("0");
  numPrint=[];
  error = '';
}

function CE(){
  numPrint = numPrint.slice(0,-1);
  if(numPrint.length===0){
    $(".entry").text("0");
  }
  else{
      $(".entry").text(numPrint);
  }
}

function equal(symbol){
  if(symbol==='+'){
    result = num1 + num2;
  }
  else if(symbol==='-'){
    result = num1-num2;
  }
  else if(symbol==='*'){
    result = num1*num2;
  }
  else{
    result = num1/num2;
  }
  $(".answer").text(result);
  numPrint=result.toString();
}
