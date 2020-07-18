$( document ).ready(function() {
    $('.mask').inputmask();
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $.validator.addMethod("myRules", function(value, element) {
            return !/_/gi.test(value);
        }, "Incorrect number");
    $( ".form" ).validate({
        rules: {
            phone: {
                required: true,
                myRules: true,
            },
            name: {
                required: true,
                minlength: 4,
            },
        },
        messages: {
            name: {
                minlength: "Min length 4",
            }
        }
    });

    $('#submit').on('click', function () {
        const arr = $('#tel').val().split('');
        const reg = '_';
    })

});
