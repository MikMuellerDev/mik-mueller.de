function addLoadEvent(func) {
    const oldOnLoad = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            if (oldOnLoad) {
                oldOnLoad(undefined)
            }
            func()
        }
    }
}

function copyText(text) {
    const temp = document.createElement('textarea');
    temp.innerHTML = text;
    document.body.appendChild(temp);
    temp.select();
    temp.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(temp)
}