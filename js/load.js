(function () {

    function getLoader () {
        const loader = document.getElementsByClassName('loader')[0];
        return loader;
    }

    function hiddeLoader () {
        const loader = getLoader();
        loader.className = 'loader-hidden';
        return loader;
    }

    setTimeout(hiddeLoader, 2500);

})();