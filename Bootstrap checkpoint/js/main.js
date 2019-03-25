$(".to-hover").mouseenter(function(event) {
   $(event.currentTarget).children("p").toggleClass("show");
 
   // console.log($(event.currentTarget).children("p"));
   // $("p").show();
}).mouseleave(function() {
    $(event.currentTarget).children("p").toggleClass("show");
  // console.log($(event.currentTarget).children("p"))

   // $("p").hide();
});