$(function(){
    const btnShare = $('#share-button')
    const body = $('body')
    const emailButtonFollowing = $('.email-button-following')
    const textBarFollowing = $('.text-bar-following')


    emailButtonFollowing.click(function(e){
        e.stopPropagation()
        emailButtonFollowing.val('')
    })

    btnShare.click(function(e){
        e.stopPropagation()
        if (!body.hasClass('slide-facebook-push')){
            body.addClass('slide-facebook-push')
            body.addClass('slide-twitter-push')
        }
        return false
    })

    body.click(function(){
        if (body.hasClass('slide-facebook-push') || body.hasClass('slide-facebook-push-following')){
            body.removeClass('slide-facebook-push')
            body.removeClass('slide-twitter-push')
            body.removeClass('slide-facebook-push-following')
            body.removeClass('slide-twitter-push-following')
            emailButtonFollowing.val('enter email')
            textBarFollowing.show()
        }
    })

    $('#share-button-following').click(function(e){
        e.stopPropagation()
        if (!body.hasClass('slide-facebook-push-following')){
            body.addClass('slide-facebook-push-following')
            body.addClass('slide-twitter-push-following')
            textBarFollowing.hide()
        }
    })
})
