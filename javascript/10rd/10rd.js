var now = new Date();
var firstDay = new Date("2004-12-05");
var toNow = now.getTime();
var toFirstDay = firstDay.getTime();
var passedTime = toNow - toFirstDay;
var passedDay = Math.round(passedTime / (24*60*60*1000));
document.querySelector("#accent").innerText = passedDay + "일";

document.querySelector("#startDate").innerText =
    firstDay.getFullYear() + "년 " +
    (firstDay.getMonth() + 1) + "월 " +
    firstDay.getDate() + "일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
calcDate(700);
calcDate(1000);


function calcDate(days) {
    var future = toFirstDay + days * (1000*60*60*24);
    var someday = new Date(future);
    var year = someday.getFullYear();
    var month = someday.getMonth() + 1;
    var date = someday.getDate();
    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}