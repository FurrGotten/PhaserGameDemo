gameDemo.state1 = function () {};
gameDemo.state1.prototype = {
    preload: function () {},
    create: function () {
        game.stage.backgroundColor = '#000099';
        console.log('state1');
        addChangeStateListeners();
    },
    update: function () {}
};
