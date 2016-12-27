//todo different file

$(function(){

    const btnScrolling = $('.scroll-down')
    const btnMenuHome = $('.home-menu-button')
    const btnMenuContent = $('.content-menu-button')
    const btnMenuSkills = $('.skills-menu-button')
    const btnMenuFooter = $('.footer-menu-button')



    var triggerBttn = document.getElementById( 'trigger-overlay' ),
        overlay = document.querySelector( 'div.overlay' ),
        closeBttn = overlay.querySelector( 'button.overlay-close' ),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        support = { transitions : Modernizr.csstransitions };


    function toggleOverlay() {
        if( classie.has( overlay, 'open' ) ) {
            classie.remove( overlay, 'open' );
            classie.add( overlay, 'close' );

            btnScrolling.show()
            $('#trigger-overlay').removeClass('change')

            var onEndTransitionFn = function( ev ) {
                if( support.transitions ) {
                    if( ev.propertyName !== 'visibility' ) return;
                    this.removeEventListener( transEndEventName, onEndTransitionFn );
                }
                classie.remove( overlay, 'close' );
            };
            if( support.transitions ) {
                overlay.addEventListener( transEndEventName, onEndTransitionFn );
            }
            else {
                onEndTransitionFn();
            }
        }
        else if( !classie.has( overlay, 'close' ) ) {
            classie.add( overlay, 'open' );
            btnScrolling.hide()
            $('#trigger-overlay').addClass('change')
        }
    }

    btnScrolling.click(function(){
        $('html, body').animate({scrollTop: $('section.content').offset().top}, 'slow')
        return false
    })

    btnMenuFooter.click(function(){
        toggleOverlay()
        btnScrolling.show()
        $('#trigger-overlay').toggleClass('change')
        $('html, body').animate({scrollTop: $('section.footer').offset().top}, 'slow')
        return false
    })

    btnMenuSkills.click(function(){
        toggleOverlay()
        btnScrolling.show()
        $('html, body').animate({scrollTop: $('section.skills').offset().top}, 'slow')
        return false
    })

    btnMenuContent.click(function(){
        toggleOverlay()
        btnScrolling.show()
        $('html, body').animate({scrollTop: $('section.content').offset().top}, 'slow')
        return false
    })

    btnMenuHome.click(function(){
        toggleOverlay()
        btnScrolling.show()
        $('html, body').animate({scrollTop: $('section.home').offset().top}, 'slow')
        return false
    })



    triggerBttn.addEventListener( 'click', toggleOverlay );
    closeBttn.addEventListener( 'click', toggleOverlay );

})
