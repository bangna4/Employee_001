$(document).ready(function(){
  var date_input=$('.datePicker');
  var options={
    format: 'dd-mm-yyyy',
    todayHighlight: true,
    autoclose: true,
  };
  date_input.datepicker(options);
});
