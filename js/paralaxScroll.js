var controller = new ScrollMagic.controller();
var scene = new ScrollMagic.Scene({
        triggerElement: '#paralax',
        duration: 800
    })
    .setPin("#paralax"); // pins the element for the the scene's duration
    controller.addScene(scene);
