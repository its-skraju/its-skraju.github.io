$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });


    var typed = new Typed(".typing", {
        strings: ["Sk Raju", "a Data Analyst"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    let number1 = document.getElementById("python_number");
    let number2 = document.getElementById("sql_number");
    let number3 = document.getElementById("r_number");
    let number4 = document.getElementById("tableau_number");
    let counter1=0;
    setInterval(()=>{
        if(counter1==70){
            clearInterval();
        }else{
            counter1+=1;
            number1.innerHTML = counter1 + "%";
            number4.innerHTML = counter1 + "%";

        }
    },26);

    let counter3=0;
    setInterval(()=>{
        if(counter3==75){
            clearInterval();
        }else{
            counter3+=1;
            number2.innerHTML = counter3 + "%";
        }
    },23);

    let counter2=0;
    setInterval(()=>{
        if(counter2==80){
            clearInterval();
        }else{
            counter2+=1;
            number3.innerHTML = counter2 + "%";
        }
    },20);

    
});