$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full-Stack Engineer", "AI-integrated product lead", "Cloud-native innovator"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Senior Developer", "Mentor", "Open-source Contributor"],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });

    // counter animation when about section enters viewport
    function animateCounters() {
        $('.about-stats .stat strong').each(function () {
            var $this = $(this);
            var countTo = parseInt($this.data('target'), 10) || 0;
            $({ countNum: 0 }).animate({ countNum: countTo }, {
                duration: 1400,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(countTo);
                }
            });
        });
    }

    var statsAnimated = false;
    $(window).on('scroll', function () {
        var aboutOffset = $('.about-stats').offset().top - $(window).height();
        if (!statsAnimated && $(window).scrollTop() > aboutOffset) {
            animateCounters();
            statsAnimated = true;
        }
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2300,
        autoplayHoverPause: true,
        smartSpeed: 700,
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

    // modern scrolling effects
    const animator = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {threshold: 0.2});

    document.querySelectorAll('.animate-fade, .animate-slide-up, .exp-card, .project-card, .kpi-card, .timeline-item').forEach(el => animator.observe(el));

    // project card interaction
    $('.project-card').on('click keypress', function(e){
        if(e.type==='click' || (e.type==='keypress' && (e.key==='Enter'||e.key===' '))){
            var title = $(this).find('h3').text();
            var desc = $(this).find('p').text();
            alert('Project: ' + title + '\n' + desc + '\nVisit GitHub for code');
        }
    });

    // smooth anchor scroll for older browsers
    $('.navbar .menu li a').on('click', function(e){
        const target = $(this.hash);
        if(target.length){
            e.preventDefault();
            $('html, body').animate({scrollTop: target.offset().top - 70}, 650);
        }
    });
});