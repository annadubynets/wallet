$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
});

$(function() {
    if ($('select').length > 0) {
        $('select').selectpicker();
    }
})

$('.password-input-toggler').on('click', function(e) {
    e.preventDefault();

    const inputId = $(this).attr('data-password-input-id');
    const passwordInput = $('#' + inputId);

    const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
    passwordInput.attr('type', type);

    $(this).toggleClass('icon-eye-outline', type == 'text');
    $(this).toggleClass('icon-eye-off-outline', type == 'password');
});