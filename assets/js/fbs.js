function setMemberOrder() {
	// var members = $('.member');
	// var memberActive = members[0];
	// console.log(memberActive);
	$('.member-1').addClass('prev');
	$('.member-2').addClass('active');
	$('.member-3').addClass('next');

	// $(members)[0];
	// members[0].addClass('active');
	// $(members)[1].addClass('next');
}

$(document).ready(function() {
  
  // Manually Set State
  var members = $('.member');
  // members.first().addClass('prev');
  // members.last().addClass('next');
  // members.eq(1).addClass('active');

  $('.nav').on('click.next', function(e){
    
  })


});


function memberSlideLeft() {
	var memberActive = $('.member.active');

}

$(function() {      
  
  // set initial member order
	setMemberOrder();

  //Enable swiping...
  $("#swipeTest").swipe( {
    
    // swipeLeft
    
    //Generic swipe handler for all directions
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
      $('footer').text("You swiped " + direction );  
    },
    
    //Default is 75px, set to 0 for demo so any distance triggers swipe
     threshold:0

  });


});