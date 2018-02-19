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

    AttributeTest.prototype.addDie = function (type) {
        this.diceCount[type]++;
    };


    AttributeTest.prototype.addAttribute_to_Test = function (type) {
        this.Value_to_Test[type]++;
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


    // Dont know what that does
    // Should go to probabilityChart_Attribute
    //AttributeTest.prototype.setChartDisplay = function (val) {
    //    var chartContainer = $("#chartContainer").get(0);
    //    if (chartContainer !== undefined) {
    //        chartContainer.style.display = val ? "block" : "none";
    //    };


    AttributeTest.prototype.calculateResult = function () {
        var possibleRolls = new PossibleRolls_1.PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);
        //possibleRolls.showProb();
        var shields = possibleRolls.getAttributeResults(this.Value_to_Test);
        // I need to transform the shields rolled into sucess propabilities and display these
        this.probabilityChart.selectPlotType('PC')
        this.probabilityChart.addChartData(shields); // Does this work without argument?

    };
    return AttributeTest;
}());
exports.AttributeTest = AttributeTest;
//# sourceMappingURL=attribute-test.js.map
