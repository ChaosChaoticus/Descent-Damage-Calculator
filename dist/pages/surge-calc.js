"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var PossibleRolls_1 = require("../util/PossibleRolls");
var AttackProperty_1 = require("../util/AttackProperty");
var Dice_1 = require("../util/Dice");
require("Chart.js");
require('jquery');
var SurgeCalc = (function () {
    function SurgeCalc() {
        this.diceCount = new Dice_1.Dice();
        this.resetAttackDice();
    }
    SurgeCalc.prototype.attached = function () {
        $('[data-toggle="tooltip"]').tooltip({ container: "body", delay: { show: 500 } });
    };

    SurgeCalc.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };

    SurgeCalc.prototype.resetAttackDice = function () {
        this.diceCount.blue = 0;
        this.diceCount.red = 0;
        this.diceCount.yellow = 0;
        this.diceCount.green = 0;        
    };
    SurgeCalc.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
        //possibleRolls.showProb();
        var SurgeResults = possibleRolls.getTotalSurges();
        this.probabilityChart.addChartData(SurgeResults);
    };
    return SurgeCalc;
}());
exports.SurgeCalc = SurgeCalc;
//# sourceMappingURL=attack-calc.js.map