function get_link() {
    var number = $(".update-truyen").length;
    return number;
}

function update() {
    var clicked = 0;
    var allButtonUpdate = $(".update-truyen");
    for (var i = 0; i < allButtonUpdate.length; i++) {
        window.setTimeout(function (i) {
            allButtonUpdate[i].click();
            clicked = i;
        }, 3000*i, i);
    }
    return clicked;

}

function input(data) {
    $('#leach-url-truyen').val(data);
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.numberButton == "numberButton") {
        var number = get_link();
        console.log(number);
        sendResponse({ numberButton: number })
    }
    if (request.truyenUpdate == "update") {
        var number = update();
        sendResponse({ numberUpdate: number });
    }
})