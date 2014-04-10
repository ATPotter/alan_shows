/*
 * Convert a date of the form YYYYMM to a string
 */
var convertDateToString = function( dateAsInt )
{
    var yearPart = Math.floor( dateAsInt / 100 );
    var monthPart = dateAsInt % 100;

    var monthArray = new Array (
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec" );
    var monthPartAsString = monthArray[ monthPart-1];

    return monthPartAsString  + " " + yearPart;
}