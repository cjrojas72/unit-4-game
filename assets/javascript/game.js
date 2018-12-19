

var gameNum;
var wins =0;
var losses =0;
var total =0;
var numArray = [];
var gameOn;
var clickCount;

$(window).on("load", function(){
  
  gameOn=true;
  clickCount = 4;
  gameNum = Math.floor(Math.random() * 51);
  console.log(gameNum);
  $("#gameNum-div").text(gameNum);
  crystalNum(gameNum);
  console.log(numArray);

  
  $.each($('.gemImg'), function (index, value) { 

    currentElement = numArray[index];
    $(this).val(currentElement);
    console.log(index + ':' + $(value).text()); 
    console.log(currentElement);
    console.log($(this).val(currentElement));
  });

  // $("#reset-button").click(function){
  //     gameOn=true;
  //     clickCount = 4;
  // });


  $(".gemImg").click(function(){

    
    if(gameOn){
      var gemValue = $(this).val();
      console.log("this gem value is: " + gemValue);

      total = total + parseInt(gemValue);
      clickCount--;
      console.log("clicks left: " + clickCount);

      if(clickCount === 0){
        gameOn = false;
        console.log("Total is: " + gameNum);

        if(total === gameNum){
          wins++;
          $("#win-div").text("Wins: " + wins);
          console.log(`add ${wins} win`);
        }
        else{
          losses++;
          $("#lose-div").text("Losses: " + losses);
          console.log( `add ${losses} lose`);
        }
      }


      $("#gameTotal").html(total);
      console.log("Total is " + total);
    }

  });

  
  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
  
  function crystalNum(max){
    
    var r1 = randombetween(1, max-3);
    var r2 = randombetween(1, max-2-r1);
    var r3 = randombetween(1, max-1-r1-r2);
    var r4 = max - r1 - r2 - r3;

    var ran = Math.floor(Math.random() * (max/2));

    numArray.push(r1,r2,r3,r4,ran);
    numArray = shuffle(numArray);
    
    function randombetween(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }
  }

});

