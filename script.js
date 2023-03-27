//Function to ensure that jquery loads after initial boot.
$(function () {
  //Function to retrieve values from local storage.
  $(".time-block").each(function(){
    let block = $(this);
    let id = block.attr("id");
    let value = localStorage.getItem(id);

    block.children('textarea').eq(0).val(value);
  })
  $('.saveBtn').on('click', function(){
    let button = $(this);

    let value = button.siblings('textarea').eq(0).val();
    let id = button.parent().attr('id');

    localStorage.setItem(id, value);
  })
  //Set hour equal to id hour from html
  $(".time-block").each(function () {
    let timeBlock = $(this);
    let hour = timeBlock.attr('id').split('-').pop();
    
    let currentHour = dayjs().hour();
    console.log(currentHour)

    if(hour > currentHour) {
      timeBlock.addClass("future");
    }
    if(hour < currentHour){
      timeBlock.addClass('past')
    }else{
      timeBlock.addClass('present')
    }
  });
});
