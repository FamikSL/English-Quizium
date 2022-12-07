$(function ($) {
  $("#form_ajax").submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: this.method,
      url: this.action,
      data: $(this).serialize(),
      dataType: "json",
      success: function (response) {
        console.log("ok - ", response);
        window.location.reload();
      },
      error: function (response) {
        console.log("error - ", response);

        if (response.status == 400) {
          $(".alert-danger")
            .text(response.responseJSON.error)
            .removeClass("d-none");
        }
      },
    });
  });
});
