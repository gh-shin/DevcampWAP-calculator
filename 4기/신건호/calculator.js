function Calculator(inId, outId) {
    var lastClickBtnId = null;

    function applyLast(id) {
        this.lastClickBtnId = id;
    }

    function getLast() {
        return this.lastClickBtnId;
    }
    return {
        registNumpads: function (btns) {
            for (var i = btns.length - 1; i >= 0; i--) {
                var btn = btns[i];
                btn.onclick = function () {
                    var variableNum = document.getElementById(inId).innerHTML;
                    variableNum += this.innerHTML;
                    if (variableNum.startsWith("0")) {
                        variableNum = variableNum.substring(1, variableNum.length);
                    }
                    document.getElementById(inId).innerHTML = variableNum;
                    return false;
                }
            }
        },
        registButtons: function (btns) {
            for (var i = btns.length - 1; i >= 0; i--) {
                var btn = btns[i];
                btn.onclick = function (evt) {
                    var resultNum = document.getElementById(outId).innerHTML;
                    var variableNum = document.getElementById(inId).innerHTML;
                    if (this.id === "plus") {
                        document.getElementById(outId).innerHTML = (parseFloat(resultNum) + parseFloat(variableNum));
                    } else if (this.id === "minus") {
                        document.getElementById(outId).innerHTML = (parseFloat(resultNum) - parseFloat(variableNum));
                    }
                    document.getElementById(inId).innerHTML = 0;
                    applyLast(this.id);
                    return false;
                }
            }
        },
        registEqual: function (btn) {
            btn.onclick = function (evt) {
                var lastBtnId = getLast();
                if (lastBtnId != null) {
                    document.getElementById(lastBtnId).click();
                    applyLast(null);
                }
            }
        },
        registReset: function (btn) {
            btn.onclick = function (evt) {
                applyLast(null);
                document.getElementById(inId).innerHTML = 0;
                document.getElementById(outId).innerHTML = 0;
            }
        }
    }
};
