"use strict";
require('bootstrap');
require('bootstrap/css/bootstrap.css!');
var PossibleRolls_1 = require("../util/PossibleRolls");
var Dice_1 = require("../util/Dice");
require('jquery');
require("Chart.js");
var AttributeTest = (function () {
    function AttributeTest() {
        this.diceCount = new Dice_1.Dice();
        this.Value_to_Test = new Dice_1.Stats();
        this.resetDice();
        this.resetValue();
    }
    AttributeTest.prototype.attached = function () {
        $('[data-toggle="tooltip"]').tooltip({ container: "body", delay: { show: 500 } });
    };
    AttributeTest.prototype.resetDice = function () {
        // Standard: 1 black, 1 grey
        // I need right click to count down this way!
        this.diceCount.black = 0;
        this.diceCount.grey  = 0;
    };
    AttributeTest.prototype.resetValue = function () {
        this.Value_to_Test.Awareness = 0;
        this.Value_to_Test.Knowledge = 0;
        this.Value_to_Test.Might     = 0;
        this.Value_to_Test.Willpower = 0;
    };
    AttributeTest.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };
    AttributeTest.prototype.addAttribute_to_Test = function (type) {
        this.Value_to_Test[type]++;        
    };

    // Dont know what that does
    // Should go to probabilityChart_Attribute
    AttributeTest.prototype.setChartDisplay = function (val) {
        var chartContainer = $("#chartContainer").get(0);
        if (chartContainer !== undefined) {
            chartContainer.style.display = val ? "block" : "none";
        }
    };


    // IA tests scheinen ueber surges zu laufen. Hier muss ich was aendern.
    AttributeTest.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
        this.probabilityChart.addChartData(possibleRolls.getDeflectedDamage()); // Does this work without argument?
    };
    return AttributeTest;
}());
exports.AttributeTest = AttributeTest;
//# sourceMappingURL=attribute-test.js.map