window.onload = function() {
  swal({
      title: "Well Come to \n{ GreenTicks Software Tool }.\n Please select Yes to visit our Tool.",
      text: "Are you sure to visit?",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: 'Yes, I am sure!',
      cancelButtonText: "No, cancel it!",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm) {

      if (isConfirm) {
        swal({
          title: 'Thanks!',
          text: 'You are one step behind the Software Tool!',
          type: 'success'
        }, function() {
          location.replace("html/login.html");
        });

      } else {
        swal({
          title: 'Ok!',
          text: 'Dont Worry Please wait for try agin :)',
          type: 'success'
        }, function() {
          setTimeout(function() {
            location.reload();
          }, 5000); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second
        });
      }
    });
}
