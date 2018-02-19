import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import {Dice} from "../util/Dice";
import {Stats} from "../util/Dice";
import {PossibleRolls} from "../util/PossibleRolls";
import {SurgeAttackProperty, FixedAttackProperty} from "../util/AttackProperty"; // Remove Later
import {ProbabilityChart} from "../components/probability-chart";
import "Chart.js";
import 'jquery';

export class AttributeTest {
    diceCount: Dice<number>;
    //Value_to_Test: Stats<number>;
    fixedDefenseAbility: DefenseProperty;  // Remove later

    probabilityChart: ProbabilityChart;

    constructor() {
        this.diceCount = new Dice<number>();
        //this.Value_to_Test = new Stats<number>();
        this.resetDice();
        //this.resetValue();
    }

    attached() {
        $('[data-toggle="tooltip"]').tooltip({container: "body", delay: { show: 500 } });
    }

    addDie(type: string) {
        this.diceCount[type]++;
    }

    //addAttribute_to_Test(type: string) {
    //    this.Value_to_Test[type]++;
    //}

    // Remove later
    addDefenseProperty(type: string) {
        this.fixedDefenseAbility[type]++;
    }

    resetDice() {
        this.diceCount.black = 0;
        this.diceCount.grey  = 0;
    }

    //resetValue() {
    //    this.Value_to_Test.Awareness = 0;
    //    this.Value_to_Test.Knowledge = 0;
    //    this.Value_to_Test.Might     = 0;
    //    this.Value_to_Test.Willpower = 0;
    //}

    calculateResult() {
      let possibleRolls = new PossibleRolls();
      possibleRolls.applyAllRolls(this.diceCount);

      //possibleRolls.showProb();
      let defenceResults = possibleRolls.getDeflectedDamage(this.fixedDefenseAbility);
      this.probabilityChart.addChartData(defenceResults);

    }
}
