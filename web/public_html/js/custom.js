// JavaScript Document

$(window).load(function () {
    "use strict";
    // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

$(document).ready(function () {
    "use strict";
    $(function () {
      // typed.js
      $("#typedAmbuj").typed({
          strings: ["Hello All","My name is Ambuj Dubey"],
          typeSpeed: 200,
          callback: function() {
            showThis();
          },
      });
      function showThis(){
          $("#typedMyHader").typed({
          strings: ['Full Stack Software Developer'],
          typeSpeed: 100
      });
    }
    });
    // scroll menu
    var sections = $('.section'),
        nav = $('.navbar-fixed-top,footer'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height + 2
        }, 600);

        return false;
    });


    // Menu opacity
    if ($(window).scrollTop() > 80) {
        $(".navbar-fixed-top").addClass("bg-nav");
    } else {
        $(".navbar-fixed-top").removeClass("bg-nav");
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() > 80) {
            $(".navbar-fixed-top").addClass("bg-nav");
        } else {
            $(".navbar-fixed-top").removeClass("bg-nav");
        }
    });



    // Parallax
    var parallax = function () {
        $(window).stellar();
    };

    $(function () {
        parallax();
    });

    // AOS
    AOS.init({
        duration: 1200,
        once: true,
        disable: 'mobile'
    });

    //  isotope
    $('#projects').waitForImages(function () {
        var $container = $('.portfolio_container');
        $container.isotope({
            filter: '*',
        });

        $('.portfolio_filter a').click(function () {
            $('.portfolio_filter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    animationEngine: "jquery"
                }
            });
            return false;
        });

    });

    //animatedModal
    $("#demo01,#demo02,#demo03,#demo04,#demo05,#demo06,#demo07,#demo08,#demo09").animatedModal();

    // Contact Form

    // validate contact form
    $(function () {
        $('#contact-form').validate({
            rules: {
                name: {
                    required: true,
                    onlyLatters: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    emailformat: true,
                },
                phone: {
                    required: false,
                    digits: true,
                    minlength: 10,
                    maxlength: 10
                },
                subject: {
                  required: true,
                },
                message: {
                    required: true
                }

            },
            messages: {
                name: {
                    required: "This field is required",
                    onlyLatters: "Name should be text only",
                    minlength: "your name must consist of at least 2 characters",
                },
                email: {
                    required: "This field is required",
                    emailformat: "Please Provide Valid Email Address",
                },
                phone: {
                  digits: "Please enter a valid Mobile Number",
                  minlength: "Please put 10  digit mobile number",
                  maxlength: "Please put 10  digit mobile number"
                },
                subject: {
                  required: "Please provide Subject",
                },
                message: {
                    required: "This field is required"
                }
            },
            submitHandler: function (form) {
                // $(form).ajaxSubmit({
                //     type: "POST",
                //     data: $(form).serialize(),
                //     url: "process.php",
                //     success: function () {
                //         $('#contact :input').attr('disabled', 'disabled');
                //         $('#contact').fadeTo("slow", 1, function () {
                //             $(this).find(':input').attr('disabled', 'disabled');
                //             $(this).find('label').css('cursor', 'default');
                //             $('#success').fadeIn();
                //         });
                //     },
                //     error: function () {
                //         $('#contact').fadeTo("slow", 1, function () {
                //             $('#error').fadeIn();
                //         });
                //     }
                // });
                var contactName = $('#contactName').val();
                var contactEmail = $('#contactEmail').val();
                var contactMobile = $('#contactMobile').val();
                var contactSubject = $('#contactSubject').val();
                var contactText = $('#contactText').val();
                var obj = {
                  "contactName": contactName,
                  "contactEmail": contactEmail,
                  "contactMobile": contactMobile,
                  "contactSubject": contactSubject,
                  "contactText": contactText,
                };
                console.log(obj);
                $.when(Posthandler("/contactUs", obj, true)).done(function(res) {
                  console.log(res);
                  if (res.resCode == 'OK') {
                    swal({
                        title: res.resCode,
                        text: res.msg,
                        type: "success"
                      },
                      function() {
                        swal.close();
                        // window.location.replace("login.html");
                      });
                  } else if (res.resCode == 'Error') {
                    swal("Error!", res.msg, "error");
                  }
                }).fail(function() {
                  alert("sorry unable to Connect with Server. please check your internet connection");
                  // swal("Error!", "sorry unable to Connect with Server. please check your internet connection", "error");
                  // window.location.replace("login.html");
                });

            }
        });

    });
    // Back to Top
    backToTop();
});
