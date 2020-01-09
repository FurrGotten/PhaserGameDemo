gameDemo.state7 = function () {};
gameDemo.state7.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#800000';
        console.log('state7');
        addChangeStateListeners();
    },
    update: function () {}
};
