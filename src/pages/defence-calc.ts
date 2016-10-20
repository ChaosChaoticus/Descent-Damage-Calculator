import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {PossibleRolls} from "../util/PossibleRolls";
import {SurgeAttackProperty, FixedAttackProperty} from "../util/AttackProperty";
import {DefenseProperty} from "../util/DefenseProperty";
import {Dice} from "../util/Dice";
import {ProbabilityChart} from "../components/probability-chart";
import "Chart.js";
import 'jquery';

export class DefenceCalc {
    diceCount: Dice<number>;
    fixedDefenseAbility: DefenseProperty;

    probabilityChart: ProbabilityChart;

    constructor() {
        this.diceCount = new Dice<number>();
        this.resetDefenseDice();
    }

    attached() {
        $('[data-toggle="tooltip"]').tooltip({container: "body", delay: { show: 500 } });
    }

    addDie(type: string) {
        this.diceCount[type]++;
    }

    addDefenseProperty(type: string) {
        this.fixedDefenseAbility[type]++;
    }

    resetDefenseDice() {
        this.diceCount.brown = 0;
        this.diceCount.grey  = 0;
        this.diceCount.black = 0;
        this.fixedDefenseAbility = {
            block: 0,
        };
    }

    calculateResult() {
        let possibleRolls = new PossibleRolls();
        possibleRolls.applyAllRolls(this.diceCount);

        //possibleRolls.showProb();

        let defenceResults = possibleRolls.getDeflectedDamage(this.fixedDefenseAbility);
        this.probabilityChart.addChartData(defenceResults);
    }
}



