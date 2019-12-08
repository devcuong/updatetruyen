get_link();
$(document).ready(function() {
    $("#update-btn").click(update);
})

function get_link() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { numberButton: "numberButton" }, function(response) {
            $("#txt").html(response.numberButton);
        })
    });
}

function update() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { truyenUpdate: "update" }, function(response) {
            $("#txt").html(response.numberUpdate);
        })
    });
}

function input() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var dsTruyen = "";
        $.ajax({
            type: 'post',
            data: {
              url: $("#url-trang").val()
            },
            dataType: 'json',
            url: 'http://truyenra.com/admin/leech/lay-danh-sach-truyen',
            success: function (response) {
                dsTruyen = response
                console.log(dsTruyen);
            }
          })
        chrome.tabs.sendMessage(tabs[0].id, { netTruyenInput: "input", netTruyenData: dsTruyen }, function(response) {
            console.log(localStorage["allTruyen"]);
        })
    });
}