(function () {

    function getTimer () {
        const timer = document.getElementById('timer-num');
        return timer;
    }

    function getDate () {
        const date = new Date();
        return date;
    }

    function getHour () {
        const date = getDate();
        const hour = date.getHours();
        return hour;
    }
})();