"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var PossibleRolls_1 = require("../util/PossibleRolls");
var AttackProperty_1 = require("../util/AttackProperty");
var Dice_1 = require("../util/Dice");
require("Chart.js");
require('jquery');

var lock_re_att =false
var lock_set_att=false

var SurgeCalc = (function () {
    function SurgeCalc() {
        this.diceCount = new Dice_1.Dice();
        this.resetAttackDice();
        this.AddedDice_re_att  = [];
        this.AddedDice_set_att = [];
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
      this.diceCount.blue_reroll = 0;
      this.diceCount.red_reroll = 0;
      this.diceCount.yellow_reroll = 0;
      this.diceCount.green_reroll = 0;
      this.diceCount.blue_set = 0;
      this.diceCount.red_set = 0;
      this.diceCount.yellow_set = 0;
      this.diceCount.green_set = 0;
    };


    SurgeCalc.prototype.addNewRerollDiceAttack = function (dummyarg) {
        if (lock_re_att==false){
          this.AddedDice_re_att.push(new Dice_1.Dice());
          lock_re_att=true
        }
    };

    SurgeCalc.prototype.removeRerollDiceAttack = function () {
        this.AddedDice_re_att = [];
        this.diceCount.blue_reroll = 0;
        this.diceCount.red_reroll = 0;
        this.diceCount.yellow_reroll = 0;
        this.diceCount.green_reroll = 0;
        lock_re_att=false
    };

    SurgeCalc.prototype.addNewSetDiceAttack = function (dummyarg) {
      if (lock_set_att==false){
        this.AddedDice_set_att.push(new Dice_1.Dice());
        lock_set_att=true
      }
    };

    SurgeCalc.prototype.removeSetDiceAttack = function () {
      this.AddedDice_set_att = [];
      this.diceCount.blue_set = 0;
      this.diceCount.red_set = 0;
      this.diceCount.yellow_set = 0;
      this.diceCount.green_set = 0;
      lock_set_att=false
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
//# sourceMappingURL=surge-calc.js.map
