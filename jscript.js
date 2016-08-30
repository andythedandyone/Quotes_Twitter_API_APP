/**
 * Created by andy on 8/19/16.
 */

$(function() {

     getQuote();
    $("#gen").on('click', function(e) {
        e.preventDefault();

        getQuote();
    });

    $('#twit').on('click', function () {
        postTwit();
    });

    function getQuote() {
        var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/';
        $.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (data) {
                $('#quotes').html(data.quote);
                $('#author').html(data.author);
            },
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "5RjDCY1Bk9mshfmZSV8vt608tIolp1ZJrakjsn6Nx1mWfeZXxZ");
            }
        });
    }

    function postTwit() {
        var left = (window.screen.width / 2) - (400 / 2);
        var top = (window.screen.height / 2) - (250 / 2);
        var content = document.getElementById('quotes').innerHTML;
        var author = document.getElementById('author').innerHTML;
        var twitUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(content + "\n" + author);
        window.open(twitUrl,"", "width=400, height=250, top="+ top +", left="+ left);
    }
});

f19cb1b80fe27e938e4d72770ca0a42f25e99ecc
b0678b161fcf74467ed3a63110557e3d6229cfa6