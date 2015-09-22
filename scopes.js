$(document).ready(function(){
  var globalTracker = 0;

  $("#addCounter").click(function(){
    var incount = 0;
    var tracker = globalTracker;

    $("body").append('<div id="div'+tracker +'"class="buttonDivider">'+
    '<button id="plus'+tracker +'" value="start">+</button>'+
    '<button id="minus'+tracker +'" value="start">-</button>'+
    '<button id="reset'+tracker +'" value="start">Reset</button>'+
    '<span id="counter'+tracker +'">0</span>'+
    '<button id="delete'+tracker +'" value="start">Delete</button>'+
    '</div>')

    $("#plus"+tracker).click(function(event) {
      incount++;
      $("#counter"+tracker).html(incount);
    })
    $("#minus"+tracker).click(function(event) {
      incount--;
      $("#counter"+tracker).html(incount);
    })
    $("#reset"+tracker).click(function(event) {
      incount = 0;
    })

    // var delete = $("#delete"+tracker).click(function(event) {
    // $("#div1").remove();
    // })

    globalTracker++;

  }) //addCounter Function
