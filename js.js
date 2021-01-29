$(document).ready(function(){

  $(document).on('input', '#inputDistanceCML', function() {
    $('#CM_STEPPER_MAX_STEPS_L').val($(this).val()*1427);
  });

  $(document).on('input', '#inputDistanceCMC', function() {
    $('#CM_STEPPER_MAX_STEPS_C').val($(this).val()*1427);
  });

  $(document).on('input', '#inputDistanceCMR', function() {
    $('#CM_STEPPER_MAX_STEPS_R').val($(this).val()*1427);
  });
  
});
