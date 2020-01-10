let text;

WebFontConfig = {
    google: { families: [ 'Candal', 'Montserrat' ] }
};

gameDemo.state8 = function(){};
gameDemo.state8.prototype = {
    preload: function(){
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
    },
    create: function(){
        game.stage.backgroundColor = '#99e6e6';
        addChangeStateListeners();

        text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices enim sem, quis interdum velit blandit eget. Suspendisse mollis est a lectus dictum ornare. Donec a suscipit magna. Sed mauris turpis, tristique quis ante ut, ullamcorper facilisis nisl. Proin quis orci faucibus, congue nisi ac, imperdiet justo. Donec scelerisque, libero.';


        this.spellOutText(100, 100, 1000, text, 40, 40, '#fff', 'Candal');
        this.spellOutText(100, 600, 1100, text, 40, 20, '#000', 'Montserrat');
    },
    spellOutText: function(x, y, width, text, fontSize, speed, fill,  font){
        let sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
        let currentLine = game.add.text(10, 10, '', {fontSize: fontSize + 'px', font: font});
        currentLine.alpha = 0;
        let loop = game.time.events.loop(speed, addChar);

        let index = 0;

        function addChar() {
            sentence.text += text[index];
            currentLine.text += text[index];

            if (currentLine.width > width && text[index] == ' ') {
                sentence.text += '\n';
                currentLine.text = '';
            }
            if (index >= text.length - 1) {
                game.time.events.remove(loop);
                console.log('stop');
            }
            index++;
        }
    }
};
