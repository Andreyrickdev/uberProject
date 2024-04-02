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
    
    function formatHour () {
        const hour = getHour();
        if(hour < 10) {
            return `0${hour}`;
        } else {
            return hour;
        }
    }

    function getMin () {
        const date = getDate();
        const min = date.getMinutes();
        return min;
    }

    function formatMin () {
        const min = getMin();
        if(min < 10) {
            return `0${min}`;
        } else {
            return min;
        }
    }

    function putNumOnTimer () {
        const hour = formatHour();
        const min = formatMin();
        const timer = getTimer();

        timer.innerText = `${hour}:${min}`;

    }

    setInterval(putNumOnTimer, 500);
    
    
})();