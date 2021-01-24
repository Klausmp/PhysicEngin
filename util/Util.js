function removeFromArray(arr, value) {
    return arr.filter(function (element) {
        return element !== value;
    });
}

function sleep(ms) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + ms);
}

getVectorFromId = (id) =>  new Vector(parseInt(id.substr(0, event.target.id.indexOf("-"))), parseInt(id.substr(event.target.id.indexOf("-") + 1, event.target.id.length)));
