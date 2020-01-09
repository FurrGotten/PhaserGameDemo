gameDemo.state4 = function () {};
gameDemo.state4.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#ffff66';
        console.log('state4');
        addChangeStateListeners();
    },
    update: function () {}
};
