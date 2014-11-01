var SD = function (text, bytelen) {
    this.text = text;
    // 半角スペース2つ分加算
    this.textlen = Math.floor((bytelen + 2) / 2);
};
SD.prototype = {
    createAA: function () {
        var line_first = this.repeat('人', this.textlen),
            line_third = this.repeat('Ｙ', this.textlen),
            sdtext = [
                ('＿' + line_first + '＿')
                ,('＞ ' + this.text + ' ＜')
                ,('￣' + line_third + '￣')
            ].join('\n');
        return sdtext;
    },
    repeat: function (word, times) {
        var ret = [], i = 0, l = times;
        for (; i < l; i++) {
            ret.push(word);
        }
        return ret.join('');
    }
};
module.exports = SD;