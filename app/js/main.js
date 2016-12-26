//todo different file

$(function(){

    const btnScrolling = $('.scroll-down')
    const btnMenuHome = $('.home-menu-button').hide()
    const btnMenuContent = $('.content-menu-button').hide()
    const btnMenuSkills = $('.skills-menu-button').hide()
    const btnMenuFooter = $('.footer-menu-button').hide()



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
        }
    }

    btnScrolling.click(function(){
        $('html, body').animate({scrollTop: $('section.content').offset().top}, 'slow')
        return false
    })

    btnMenuFooter.click(function(){
        toggleOverlay()
        btnScrolling.show()
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

    $('#trigger-overlay').click(function(){
        classie.has(overlay, 'open') ? btnScrolling.show() : btnScrolling.hide()
        setTimeout(function(){
            btnMenuHome.animate({
                height: 'toggle',
            })
            btnMenuContent.animate({
                height: 'toggle'
            })
            btnMenuSkills.animate({
                height: 'toggle'
            })
            btnMenuFooter.animate({
                height: 'toggle'
            })
        }, 500)

    })



    triggerBttn.addEventListener( 'click', toggleOverlay );
    closeBttn.addEventListener( 'click', toggleOverlay );

})

function changeIcon(x){
    window.setTimeout(500);
    x.classList.toggle("change")
}
