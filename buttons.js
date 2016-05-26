/*
    Date: 2016-05-13
*/
//
$('#control').click(function() {
    $('#control').toggleClass('button-action');
    $('#control').toggleClass('button-caution');

    if (loopTime === 0) {
        $('#control').text('Stop Readings');
        loopTime = 500;
        getReadings();
    } else {
        $('#control').text('Start Readings');
        loopTime = 0;
    }
});

        //
        // This fires only when the button is pressed.
        $("#toggle13").click(function() {
            hostIP = defaultHostIP;
            // create our partial URL with REST API
            targetURL = "http://" + hostIP + "/arduino/digital/13/";
            ledIntermediateState = "error"; // if we ever see this, we have problems.
            // toggle the state based on our last state.
            if (ledState === 0) {
                ledState = 1;
                myurl = encodeURI(targetURL + "0");
                ledIntermediateState = "IOT set to OFF";
            } else {
                ledState = 0;
                myurl = encodeURI(targetURL + "1");
                ledIntermediateState = "IOT set to ON";
            }
            $("#led13").html(ledIntermediateState);
            // Actually make the call to the webserver.
            $.get(myurl, function (data) {
                //console.log(data);
                $("#led13").html(data);
            });
        });
