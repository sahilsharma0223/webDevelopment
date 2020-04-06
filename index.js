var t=0;
var index = 0;
var num1 = 0;
var num2 = 0;
var symbol =0;
var result = 0;
var numPrint='';
  $("button").click (function() {
     var num = this.textContent;
     var sym = this.value;

     if(sym==='/'||sym==='*'||sym==='+'||sym==='-'){
       num1 = parseInt(numPrint);
       console.log(num1);
       symbol = sym;
       console.log(symbol);
       index = numPrint.length;
       console.log(index);
     }
     if(sym==='='){
        num2 = parseInt(numPrint.substring(index+1,numPrint.length));
        console.log(num2);
        index = 0;
       equal(symbol);
     }
     if(num==='AC'){
       AC();
     }
     else if(num==='CE'){
       CE();
     }
     else if(num!=='AC'&&num!=='CE'&&num!=='='){
        entryPrint(num);
     }

  });

function entryPrint(num){
   console.log(numPrint+num);
   $(".entry").text(numPrint+num);
       numPrint = numPrint+num;
}

function AC(){
  $(".entry").text("0");
  $(".answer").text("0");
  numPrint=[];
}

function CE(){
  numPrint = numPrint.slice(0,-1);
  console.log(numPrint.length);
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
  console.log(num1);
  console.log(num2);
  console.log(result);
  $(".answer").text(result);
  numPrint=result.toString();
  console.log(numPrint)
}
