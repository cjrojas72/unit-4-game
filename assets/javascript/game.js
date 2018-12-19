

var gameNum;
var wins;
var losses;
var total =0;
var numArray = [];

$(window).on("load", function(){
  
  gemDiv = $("game-div");
  gameNum = Math.floor(Math.random() * 51);
  console.log(gameNum);
  $("#gameNum-div").text(gameNum);
  crystalNum(gameNum);
  console.log(numArray);

  // $(".gemImg").each(function(){
      
    
  //   var currentElement = $(this);
  //     var j= 0;
  //     currentElement.val(numArray[j]);
  //     j++;

  //     console.log(currentElement);
  // });

  $.each($('.gemImg'), function (index, value) { 

    currentElement = numArray[index];
    $(this).val(currentElement);
    console.log(index + ':' + $(value).text()); 
    console.log(currentElement);
    console.log($(this).val(currentElement));
  });


  $(".gemImg").click(function(){
    
    var gemValue = $(this).val();
    console.log(gemValue);

    total = total + parseInt(gemValue);

    $("#gameTotal").html(total);
    console.log(total);


  });


  
  function crystalNum(max){
    
    var r1 = randombetween(1, max-3);
    var r2 = randombetween(1, max-2-r1);
    var r3 = randombetween(1, max-1-r1-r2);
    var r4 = max - r1 - r2 - r3;

    var ran = Math.floor(Math.random() * (max/2));

    numArray.push(r1,r2,r3,r4,ran);

    
    function randombetween(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    }
  }

});

