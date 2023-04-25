function getUrlGameName() {
    let searchParams = new URLSearchParams(window.location.search);
    let param = searchParams.get('searched');
    return param;
}