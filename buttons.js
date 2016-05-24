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
