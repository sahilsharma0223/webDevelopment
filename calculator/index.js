///////////variable declaration//////////

var t=0;
var result = 0;
var resString = '';
var lastSymbol='';
var numPrint='';

 /////////Added Event Listener///////

  $("button").click (function() {
     var sym = this.value;
     if(sym!=='AC'&&sym!=='CE'&&sym!=='='&&numPrint.length<19)
     {
          numPrint = numPrint+sym;
     }
    console.log(numPrint);
    console.log(lastSymbol);
    console.log(sym);
      if((lastSymbol==='.'||lastSymbol==='/'||lastSymbol==='*'||lastSymbol==='+'||lastSymbol==='-')&&(sym==='/'||sym==='*'||sym==='-'||sym==='+'||sym==='.')&&(numPrint.length<19))
      {
           numPrint = numPrint.substring(0,numPrint.length-2)+sym;
           console.log(lastSymbol);
           console.log(sym);
      }
        lastSymbol = sym;

      console.log(lastSymbol);
      console.log(sym);
      console.log(numPrint);
     if(sym==='='){
       var symerror = numPrint.substring(numPrint.length-1,numPrint.length);
       var symerror2 = numPrint.substring(0,1);
       if(symerror==='*'||symerror==='/'||symerror==='-'||symerror==='+'||symerror==='.'||symerror2==='*'||symerror2==='/'){
         $(".answer").text("Sytax Error!");
         t=0;
       }
       else{
       equal();
     }
     }

     if(sym==='AC'){
       AC();
     }
     if(sym==='CE'){
       CE();
     }
     if(sym!=='AC'&&sym!=='CE'&&sym!=='='){
        entryPrint();
     }

  });


///////////Function for printing the entries////////////////

function entryPrint(){
  if(numPrint.length===13){
    $(".entry").css("font-size","1.1rem");
    $(".entry").css("padding-top","0.47rem");
    if(t===0){
        $(".entry").text(numPrint);
    }
    else{
      $(".answer").text('0');
      $(".entry").text(numPrint);
    }
  }
 else if(numPrint.length===15)
 {
   $(".entry").css("font-size","0.9rem");
   $(".entry").css("padding-top","0.7rem");
   if(t===0){
       $(".entry").text(numPrint);
   }
   else{
     $(".answer").text('0');
     $(".entry").text(numPrint);
   }
 }
 else if(numPrint.length>18)
 {
   $(".answer").text("limit exceed");
   numPrint = numPrint.substring(0,numPrint.length-1);
   if(t===0){
       $(".entry").text(numPrint);
   }
   else{
     $(".answer").text('0');
     $(".entry").text(numPrint);
   }
   t=0;
 }

  else{
    if(t===0){
      $(".entry").text(numPrint);
    }
     else{
       $(".answer").text('0');
       $(".entry").text(numPrint);
     }
  }

}

//////////Function for clearing the screen////////////

function AC(){
  $(".entry").css("font-size","1.3rem");
  $(".entry").css("padding-top","0rem");
  $(".answer").css("font-size","1.3rem");
  $(".answer").css("padding-top","0rem");
  $(".entry").text("0");
  $(".answer").text("0");
  numPrint='';
  resString='';
  t=0;
  reserve = '';
}


///////////////Function for deleting last entry///////////////


function CE(){
$(".answer").text("0");
$(".answer").css("font-size","1.3rem");
$(".answer").css("padding-top","0rem");
  if(t===1){

    numPrint = reserve;
  }
  numPrint = numPrint.slice(0,-1);
  if(numPrint.length>0&&numPrint.length<13){
    $(".entry").css("font-size","1.3rem");
    $(".entry").css("padding-top","0.15rem");
  }
 else if(numPrint.length>0&&numPrint.length<15)
 {
   $(".entry").css("font-size","1.1rem");
   $(".entry").css("padding-top","0.47rem");
 }

  console.log(numPrint);
  if(numPrint.length===0){
    $(".entry").text("0");
  }
  else{
      $(".entry").text(numPrint);
  }
  t=0;
}

////////Function for calculation////////////

function equal(){

  result = eval(numPrint);
  reserve = numPrint;
  resString = result.toString();
  if((resString.length>12)&&resString.length<15){
    $(".answer").css("font-size","1.1rem");
    $(".answer").css("padding-top","0.1rem");
  }
  else if((resString.length>=15)&&(resString.length<19))
  {
    $(".answer").css("font-size","0.9rem");
    $(".answer").css("padding-top","0.2rem");
  }
  else if(resString.length>=19){
    $(".answer").css("font-size","0.9rem");
    $(".answer").css("padding-top","0.7rem");
    resString = resString.slice(0,18);
  }


  $(".answer").text(resString);
  numPrint = resString;
  t=1;
}


/////////END////////////////
