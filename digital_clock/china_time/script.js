let CST = -6
let EST = -5
let CT = 8 // china time (CST)

Date.prototype.stdTimezoneOffset = function () {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}

Date.prototype.isDstObserved = function () {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
}

function addLeadingZero(n) {
    return n < 10 ? '0' + n : n;
}

function windTheClock(timeZoneOffset)
{
    var d = new Date();
    d.setHours(d.getUTCHours() + timeZoneOffset); // set time zone offset
    var h = d.getHours();
    var m = d.getMinutes();
    // var s = d.getSeconds();
    // var ampm = h >= 12 ? 'pm' : 'am';
    // h = h % 12;
    // h = h ? h : 12; // replace '0' w/ '12'
    h = addLeadingZero(h);
    m = addLeadingZero(m);
    // s = addLeadingZero(s);

    document.all["clock"].innerHTML = h + ':' + m;
        //  + ':' + s
        // + ' ' + ampm;

    document.all["date"].innerHTML = d.toLocaleString('default', { month: 'long' }) + ' ' + d.getDate() + ', ' + d.getFullYear();

    setTimeout(function(){ windTheClock(timeZoneOffset) }, 1000);
}

window.onload = function() {
    windTheClock(CT);
}