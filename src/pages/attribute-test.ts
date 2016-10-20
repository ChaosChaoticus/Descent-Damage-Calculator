import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Dice} from "../util/Dice";
import {Stats} from "../util/Dice";
import {PossibleRolls} from "../util/PossibleRolls";
import {ProbabilityChart} from "../components/probability-chart";
import 'jquery';
import "Chart.js";

export class AttributeTest {
    diceCount: Dice<number>;
    Value_to_Test: Stats<number>;

    probabilityChart: ProbabilityChart;

    constructor() {
        this.diceCount = new Dice<number>();
        this.Value_to_Test = new Stats<number>();
        this.resetDice();
        this.resetValue();
    }

    attached() {
        $('[data-toggle="tooltip"]').tooltip({container: "body", delay: { show: 500 } });
    }

    resetDice() {
        this.diceCount.black = 0;
        this.diceCount.grey  = 0;
    }

    resetValue() {
        this.Value_to_Test.Awareness = 0;
        this.Value_to_Test.Knowledge = 0;
        this.Value_to_Test.Might     = 0;
        this.Value_to_Test.Willpower = 0;
    }    

    addDie(type: string) {
        this.diceCount[type]++;
    }

    addAttribute_to_Test(type: string) {
        this.Value_to_Test[type]++;
    }

    private setChartDisplay(val: boolean) {
        let chartContainer = $("#chartContainer").get(0);
        if (chartContainer !== undefined) {
            chartContainer.style.display = val ? "block" : "none";
        }
    }

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);

        this.probabilityChart.addChartData(possibleRolls.getTotalSurges());
    }
}