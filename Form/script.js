(function ($) {
    $(document).ready(function () {

        $("#logInButton").on('click', function () {
            $("#loginForm").addClass("success");
            $("#enterSuccessful").addClass("success");
        })
    });
})(jQuery);