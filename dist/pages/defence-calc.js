"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var PossibleRolls_1 = require("../util/PossibleRolls");
var Dice_1 = require("../util/Dice");
require("Chart.js");
require('jquery');

var lock_re_def =false
var lock_set_def=false

var DefenceCalc = (function () {
    function DefenceCalc() {
        this.diceCount = new Dice_1.Dice();
        this.resetDefenseDice();
        this.AddedDice_re_def  = [];
        this.AddedDice_set_def = [];
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
        this.diceCount.brown_reroll = 0;
        this.diceCount.grey_reroll = 0;
        this.diceCount.black_reroll = 0;
        this.diceCount.brown_set = 0;
        this.diceCount.grey_set = 0;
        this.diceCount.black_set = 0;             
        this.fixedDefenseAbility = {
            block: 0
        };
    };


    DefenceCalc.prototype.addNewRerollDiceDefence = function () {
      if (lock_re_def==false){
        this.AddedDice_re_def.push(new Dice_1.Dice());
        lock_re_def=true
      }
    };

    DefenceCalc.prototype.removeRerollDiceDefence = function () {
      this.AddedDice_re_def = [];
      this.diceCount.brown_reroll = 0;
      this.diceCount.grey_reroll = 0;
      this.diceCount.black_reroll = 0;
      lock_re_def=false
    };

    DefenceCalc.prototype.addNewSetDiceDefence = function () {
      if (lock_set_def==false){
        this.AddedDice_set_def.push(new Dice_1.Dice());
        lock_set_def=true
      }
    };


    DefenceCalc.prototype.removeSetDiceDefence = function () {
      this.AddedDice_set_def = [];
      this.diceCount.brown_set = 0;
      this.diceCount.grey_set = 0;
      this.diceCount.black_set = 0;
      lock_set_def=false
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
