/*global console*/
$(document).ready(function () {

    "use strict";
    //make the all header content make the 100vh toghter
    var headerHeght = $(window).height();

    var upperHeight = $('.mainUperBar').innerHeight();

    $('.carosel-section ,.carousel-item').height(headerHeght - upperHeight);

    var caroselHeight = headerHeght - upperHeight;

    console.log(headerHeght);
    console.log(upperHeight);
    console.log(caroselHeight);

    /*=============================================================*/

    //prevent default for all link and button temporaly
    //    $("button , a ").click(function (event) {
    //
    //        event.preventDefault();
    //
    //    });


    $('.goBck').on('click', function (e) {
        e.preventDefault();
        window.history.back();
    });

    /*=============================================================*/

    //scroll to the every others section  when we click link

    $('.dropdown-menu > a').on('click', function () {

        var scrollSection = $(this).attr('data-scroll');

        $('html,body').animate({

            scrollTop: $('.' + scrollSection).offset().top

        }, 1000)

    });

    /*=============================================================*/

    //make the width of search input long by clicking on the search icon
    var list = $('li.searchInpt').find('i');

    var listForm = $('li.searchInpt').find('input');

    list.on('click', function () {

        listForm.toggleClass('inpWidth');


        if (listForm.hasClass('inpWidth')) {

            //show the placeholder when the search input is long
            listForm.addClass('red');

        } else {

            //hide the placeholder when the search input is short 
            listForm.removeClass('red');
        }

    });

    /*=============================================================*/

    //change the arrow to bottm for the submenu when we click on the link
    $('.mainClickToChange').on('click', function () {

        var icon = $(this).find("i");

        if ($('.dropdown-menu').is(":visible")) {

            icon.removeClass('rtt');

            console.log("hidden");

        } else {

            icon.addClass('rtt');

            console.log("visible");

        }

    });

    $('.mainClickToChange2').on('click', function () {

        var icon = $(this).find("i");

        if ($('.dropdown-menu').is(":visible")) {

            icon.removeClass('rtt');

            console.log("hidden");

        } else {

            icon.addClass('rtt');

            console.log("visible");

        }

    });

    /*=============================================================*/

    //show the hidden slincks icon that behind the share span by hover
    $('.sclinks ul').on('mouseenter', function () {

        $(this).children().find('a').css({

            'transform': 'translate(0)',
            'opacity': '1',
            'visibility': 'visible'
        });

        // console.log($(this).siblings());
        $(this).addClass('kil');

    });

    $('.sclinks ul').on(' mouseleave', function () {

        $(this).children().find('a').css({

            'transform': '',
            'opacity': '0',
            'visibility': 'hidden'
        });

        $(this).removeClass('kil');

    });

    /*================================ start button to top==============================*/

    //first we should show the go to top button

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 650) {

            $('#back-to-top').fadeIn(1000);

        } else {

            $('#back-to-top').fadeOut(1000);
        }

    });

    //second we make the document move to top when we click on the goTop button

    $('#back-to-top').on('click', function () {

        $('html,body').animate({

            scrollTop: 0

        }, 1000)

    });

    /*================================ end button to top==============================*/

    //change  the border color and show a message for required inputs when is empty , by blur event

    $("  input ").blur(function () {

        if ($(this).val().length == '' && $(this).attr("required")) {

            $(this).addClass('error');

            $(this).prev().find('span').css({
                "font-weight": "bold",
                "color": "red "
            });

        } else if ($(this).val().length !== '') {

            $(this).removeClass('error');

            $(this).prev().find('span').css({
                "font-weight": "normal",
                "color": "#7BA8B8 "
            });

        }

    }); //end blur

    //check all the checkboxes inputs
    $('#checkAll').on('change', function () {

        $('input:checkbox').not(this).prop('checked', this.checked);

        console.log(this.checked);

    });

    /*====== make zoom in zoom out by jquery native without plugins =======*/

    var productFoto = $('.productFoto');

    productFoto.each(function () {

        $(this).append('<div class= "zoomImg"></div>').children('.zoomImg');

    });

    productFoto.each(function () {

        $(this).children('.zoomImg').css({
            'background-image': 'url(' + $(this).attr('data-img') + ')'
        });

    });

    productFoto.on('mouseover', function () {

        $(this).children('.zoomImg').css({
            'transform': 'scale(' + $(this).attr('data-scale') + ')'
        });

    });

    productFoto.on('mouseout', function () {

        $(this).children('.zoomImg').css({
            'transform': 'scale(1)'
        });

    });

    productFoto.on('mousemove', function (e) {

        $(this).children('.zoomImg').css({
            'transform-origin':
                ((e.pageX - $(this).offset().left) / $(this).outerWidth()) * 100 + "%" + ((e.pageY - $(this).offset().top) / $(this).outerHeight()) * 100 + "%"
        });

    });

}); //end document
