gameDemo.state5 = function () {};
gameDemo.state5.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#ff9933';
        console.log('state5');
        addChangeStateListeners();
    },
    update: function () {}
};
