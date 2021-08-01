var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

var bg_object = "";

function new_image() {
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        bg_object = Img;

        bg_object.scaleToWidth(700);
        bg_object.scaleToHeight(510);
        bg_object.set({
            top: 0,
            left: 0
        });
        canvas.add(bg_object);
    });
}

function playSound() {
	x.play();    
}
