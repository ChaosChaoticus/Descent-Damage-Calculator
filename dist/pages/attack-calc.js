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
var lock_re_def =false
var lock_set_def=false

var AttackCalc = (function () {
    function AttackCalc() {
        this.diceCount = new Dice_1.Dice();
        this.resetAttackDice();
        this.resetDefenseDice();
        this.surgeAbilities = [];
        this.AddedDice_re_att  = [];
        this.AddedDice_set_att = [];
        this.AddedDice_re_def  = [];
        this.AddedDice_set_def = [];
        this.attack_type = "melee";
        this.range = 0;
    }
    AttackCalc.prototype.attached = function () {
        $('[data-toggle="tooltip"]').tooltip({ container: "body", delay: { show: 500 } });
    };
    AttackCalc.prototype.selectAttackType = function (type) {
        this.attack_type = type;
        if (type == "melee") {
            this.range = 0;
        }
        else if (type == "range") {
            this.range++;
        }
    };
    AttackCalc.prototype.addAttackProperty = function (surge, type) {
        surge[type]++;
    };
    AttackCalc.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };

    AttackCalc.prototype.addDefenseProperty = function (type) {
        this.fixedDefenseAbility[type]++;
    };
    AttackCalc.prototype.addNewSurge = function (surgeCost) {
        this.surgeAbilities.push(new AttackProperty_1.SurgeAttackProperty(surgeCost));
    };
    AttackCalc.prototype.removeSurge = function (surge) {
        this.surgeAbilities = this.surgeAbilities.filter(function (p) { return p != surge; });
    };

    AttackCalc.prototype.addNewRerollDiceAttack = function (dummyarg) {
        if (lock_re_att==false){
          this.AddedDice_re_att.push(new Dice_1.Dice());
          lock_re_att=true
        }
    };

    AttackCalc.prototype.removeRerollDiceAttack = function () {
        this.AddedDice_re_att = [];
        this.diceCount.blue_reroll = 0;
        this.diceCount.red_reroll = 0;
        this.diceCount.yellow_reroll = 0;
        this.diceCount.green_reroll = 0;
        lock_re_att=false
    };

    AttackCalc.prototype.addNewSetDiceAttack = function (dummyarg) {
      if (lock_set_att==false){
        this.AddedDice_set_att.push(new Dice_1.Dice());
        lock_set_att=true
      }
    };

    AttackCalc.prototype.removeSetDiceAttack = function () {
      this.AddedDice_set_att = [];
      this.diceCount.blue_set = 0;
      this.diceCount.red_set = 0;
      this.diceCount.yellow_set = 0;
      this.diceCount.green_set = 0;
      lock_set_att=false
    };

    AttackCalc.prototype.addNewRerollDiceDefence = function () {
      if (lock_re_def==false){
        this.AddedDice_re_def.push(new Dice_1.Dice());
        lock_re_def=true
      }
    };

    AttackCalc.prototype.removeRerollDiceDefence = function () {
      this.AddedDice_re_def = [];
      this.diceCount.brown_reroll = 0;
      this.diceCount.grey_reroll = 0;
      this.diceCount.black_reroll = 0;
      lock_re_def=false
    };

    AttackCalc.prototype.addNewSetDiceDefence = function () {
      if (lock_set_def==false){
        this.AddedDice_set_def.push(new Dice_1.Dice());
        lock_set_def=true
      }
    };


    AttackCalc.prototype.removeSetDiceDefence = function () {
      this.AddedDice_set_def = [];
      this.diceCount.brown_set = 0;
      this.diceCount.grey_set = 0;
      this.diceCount.black_set = 0;
      lock_set_def=false
    };

    AttackCalc.prototype.resetAttackDice = function () {
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
        this.fixedAttackAbility = {
            damage: 0,
            pierce: 0,
            range: 0,
            surge: 0,
            miss: 0
        };
    };
    AttackCalc.prototype.resetDefenseDice = function () {
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

    AttackCalc.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
        //possibleRolls.showProb();
        var damageResults = possibleRolls.getEffectiveDamage(this.surgeAbilities, this.fixedAttackAbility, this.fixedDefenseAbility, this.range);
        this.probabilityChart.addChartData(damageResults);
    };
    return AttackCalc;
}());
exports.AttackCalc = AttackCalc;
//# sourceMappingURL=attack-calc.js.map
