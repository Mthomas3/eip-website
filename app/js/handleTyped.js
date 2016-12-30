class writeErase{

    constructor(speed, delay, content, loop){
        this.speed = speed;
        this.delay = delay;
        this.content = content;
        this.loop = loop;
        this.strings = $('#typed-strings');
    }

    printTyped(){
        $("#typing_text").typed({

            stringsElement : this.strings,
            typeSpeed: this.speed,
            backDelay: this.delay,
            loop: this.loop,
            contentType: this.content,
            loopCount: false,
        });
    }

}