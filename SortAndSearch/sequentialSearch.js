Array.prototype.sequentialSearch = function (item) {
    for (let i = 0; i < this.length; i += 1) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
}