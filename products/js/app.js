var carousel = $(".carousel"),
    items = document.querySelectorAll(".item"),
    currdeg = 0,
    currentItems = [];

for(var i = items.length; i--; currentItems.unshift(items[i]));


$(".next").on("click", {
    d: "n"
}, rotate);
$(".prev").on("click", {
    d: "p"
}, rotate);

function rotate(e) {
    var rotateFactor = -360/items.length;
    var newItems = [];

    if (e.data.d == "n") {
        currdeg = currdeg - rotateFactor;
        var total = currentItems.length;
        var temp = currentItems[total-1];
        newItems.push(temp);
        for(var i = 0; i<total-1; i++){
            newItems.push(currentItems[i]);
        }
        currentItems = newItems;
    }
    if (e.data.d == "p") {
        currdeg = currdeg + rotateFactor;
        var total = currentItems.length;
        var temp = currentItems[0];
        for(var i = 1; i<total; i++){
            newItems.push(currentItems[i]);
        }
        newItems.push(temp);
        currentItems = newItems;
    }

    carousel.css({
        "-webkit-transform": "translateZ(-300px) rotateY(" + currdeg + "deg)",
        "-moz-transform": "translateZ(-300px) rotateY(" + currdeg + "deg)",
        "-o-transform": "translateZ(-300px) rotateY(" + currdeg + "deg)",
        "transform": "translateZ(-300px) rotateY(" + currdeg + "deg)"
    });

    currentItems.forEach(function(el, i) {
        switch(i){
            case 0:{
                $(el).removeClass("blur-full blur-half");
                $(el).addClass("facing").removeClass("last left right");
                $(el).css({
                    "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-o-transform": "rotateY(" + (-currdeg) + "deg)",
                    "transform": "rotateY(" + (-currdeg) + "deg)"
                });
            }
                break;
            case 1:{
                $(el).addClass("right blur-half").removeClass("facing left last blur-full");
                $(el).css({
                    "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-o-transform": "rotateY(" + (-currdeg) + "deg)",
                    "transform": "rotateY(" + (-currdeg) + "deg)"
                });
            }
                break;
            case 2:{
                $(el).addClass("last blur-full").removeClass("left right facing");
                $(el).css({
                    "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-o-transform": "rotateY(" + (-currdeg) + "deg)",
                    "transform": "rotateY(" + (-currdeg) + "deg)"
                });
            }
                break;
            case 3: {
                $(el).addClass("left blur-half").removeClass("facing last right blur-full");
                $(el).css({
                    "-webkit-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-moz-transform": "rotateY(" + (-currdeg) + "deg)",
                    "-o-transform": "rotateY(" + (-currdeg) + "deg)",
                    "transform": "rotateY(" + (-currdeg) + "deg)"
                });
            }
        }
    });
}