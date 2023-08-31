$('.projectFilter button').click(function() {
    $('.projectFilter .btn-primary').removeClass('btn-primary').addClass('btn-outline-primary');
    $(this).removeClass('btn-outline-primary').addClass('btn-primary');
    var selected = "." + $(this).attr('data-filter');
    if (selected == ".all") {
      $('.filter').show(500);
    } else {
      $('.filter').not(selected).fadeOut(500);
      $('.filter').filter(selected).fadeIn(500);
    }
  })