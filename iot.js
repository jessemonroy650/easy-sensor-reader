/*
    Date: 2016-05-13
    2016-06-21 - Added Ping
*/
var URLTemperature   = 'http://' defaultHostIP + '/arduino/iot/thermistor/0';
var URLPing          = 'http://' defaultHostIP + '/arduino/iot/ultrasound/0';
var loopTime  = 0;
var loopCount = 0;

function getReadings () {
    var distanceReading = '';
    if (loopTime > 0) {
        if ( URLTemperature.length > 0 ) {
            loopCount++;
            $('#appStatus').text('reading:' + loopCount );
            $('#readStatus').text('getting');
            $.get(URLTemperature, function (data) {
                $('#readStatus').text('temperature');
                $('#temperature').text(data);
            });
        }
        if ( URLPing.length > 0 ) {
            loopCount++;
            $('#appStatus').text('reading:' + loopCount );
            $('#readStatus').text('getting');
            $.get(URLPing, function (data) {
                $('#readStatus').text('ping');
                var cmString = new String(data);
                var inString = new String(data/0.393701);
                distanceReading = cmString + "cm (" + inString + "in)";
                $('#ping').text(data);
            });
        }
        setTimeout(getReadings, loopTime);
    } else {
        loopCount = 0;
        $('#appStatus').text('inactive');
    }
}
