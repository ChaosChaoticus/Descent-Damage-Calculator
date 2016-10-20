import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {PossibleRolls} from "../util/PossibleRolls";
import {SurgeAttackProperty, FixedAttackProperty} from "../util/AttackProperty";
import {DefenseProperty} from "../util/DefenseProperty";
import {Dice} from "../util/Dice";
import {ProbabilityChart} from "../components/probability-chart";
import "Chart.js";
import 'jquery';

export class SurgeCalc {
    diceCount: Dice<number>;
        
    attack_type: string;
    range: number;

    probabilityChart: ProbabilityChart;

    constructor() {
        this.diceCount = new Dice<number>();
        this.resetAttackDice();
    }

    attached() {
        $('[data-toggle="tooltip"]').tooltip({container: "body", delay: { show: 500 } });
    }


    addDie(type: string) {
        this.diceCount[type]++;
    }


    resetAttackDice() {
        this.diceCount.red = 0;
        this.diceCount.blue = 0;
        this.diceCount.green = 0;
        this.diceCount.yellow = 0;
    }


    calculateResult() {
        let possibleRolls = new PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);

        //possibleRolls.showProb();

        let SurgeResults = possibleRolls.getTotalSurges();
        this.probabilityChart.addChartData(SurgeResults);
    }
}



