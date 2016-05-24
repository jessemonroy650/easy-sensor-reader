/*
    Date: 2016-05-13
*/

var URLCold   = 'http://192.168.240.1/arduino/analog/0';
var URLHot    = ''; // 'http://192.168.240.1/arduino/analog/1';
var loopTime  = 0;
var loopCount = 0;

function getReadings () {
    if (loopTime > 0) {
        if ( URLCold.length > 0 ) {
            loopCount++;
            $('#readingStatus').text('reading:' + loopCount );
            $('#gotSensor').text('getting');
            $.get(URLCold, function (data) {
                $('#gotSensor').text('cold');
                $('#temp1').text(data);
            });
        }
        if ( URLHot.length > 0 ) {
            $('#gotSensor').text('getting');
            $.get(URLHot, function (data) {
                $('#gotSensor').text('hot');
                $('#temp2').text(data);
            });
        }
        setTimeout(getReadings, loopTime);
    } else {
        loopCount = 0;
        $('#readingStatus').text('inactive');
    }
}
