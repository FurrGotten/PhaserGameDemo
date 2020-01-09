gameDemo.state2 = function () {};
gameDemo.state2.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#00ccff';
        console.log('state2');
        addChangeStateListeners();
    },
    update: function () {}
};
