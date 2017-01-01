//todo different files


$(document).ready(function(){
    $('#typing_text').show()
    $('#trigger-overlay').hide()
    setTimeout(function(){
        $('#typing_text').hide()
        $('#trigger-overlay').show()
        $('body').addClass('loaded')
    }, 5000)//5000)
})

class HandleSectionMenu{

    static HandleAction(section, scrolling){
        scrolling.show()
        $('html, body').animate({scrollTop: $(section).offset().top}, 'slow')
    }

    static HandleScrolling(section){
        $('html, body').animate({scrollTop: $(section).offset().top}, 'slow')
        return false
    }

}

$(function(){

    const btnScrolling = $('.scroll-down')
    const btnMenuHome = $('.home-menu-button')
    const btnMenuContent = $('.content-menu-button')
    const btnMenuSkills = $('.skills-menu-button')
    const btnMenuFooter = $('.footer-menu-button')
    const menu = $('#trigger-overlay')

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
            menu.removeClass('change')
            $('body').removeClass('no-scrolling')

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
            menu.addClass('change')
            $('body').addClass('no-scrolling')
        }
    }

    btnScrolling.click(function(){
        return (HandleSectionMenu.HandleScrolling('section.content'))
    })

    btnMenuFooter.click(function(){
        toggleOverlay()
        return (HandleSectionMenu.HandleAction('section.footer', btnScrolling))
    })

    btnMenuSkills.click(function(){
        toggleOverlay()
        return (HandleSectionMenu.HandleAction('section.skills', btnScrolling))
    })

    btnMenuContent.click(function(){
        toggleOverlay()
        return (HandleSectionMenu.HandleAction('section.content', btnScrolling))
    })

    btnMenuHome.click(function(){
        toggleOverlay()
        return (HandleSectionMenu.HandleAction('section.home', btnScrolling))
    })

    triggerBttn.addEventListener( 'click', toggleOverlay );
    closeBttn.addEventListener( 'click', toggleOverlay );

})