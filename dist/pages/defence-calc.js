"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var PossibleRolls_1 = require("../util/PossibleRolls");
var Dice_1 = require("../util/Dice");
require("Chart.js");
require('jquery');
var DefenceCalc = (function () {
    function DefenceCalc() {
        this.diceCount = new Dice_1.Dice();
        this.resetDefenseDice();
    }

    DefenceCalc.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };
    DefenceCalc.prototype.addDefenseProperty = function (type) {
        this.fixedDefenseAbility[type]++;
    };

    DefenceCalc.prototype.resetDefenseDice = function () {       
        this.diceCount.brown = 0;
        this.diceCount.grey = 0;
        this.diceCount.black = 0;
        this.fixedDefenseAbility = {
            block: 0
        };
    };
    DefenceCalc.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
        //possibleRolls.showProb();
        var defenceResults = possibleRolls.getDeflectedDamage(this.fixedDefenseAbility);
        this.probabilityChart.addChartData(defenceResults);
    };
    return DefenceCalc;
}());
exports.DefenceCalc = DefenceCalc;
//# sourceMappingURL=attack-calc.js.map