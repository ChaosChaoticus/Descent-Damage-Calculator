export class RollResult {
    constructor(
        public miss: boolean = false,
        public damage: number = 0,
        public surge: number = 0,
        public range: number = 0,
        public block: number = 0,      
        public probability: number = 1
        ) { }

    getHashCode(): string {
        return `${this.miss}|${this.damage}|${this.surge}|${this.range}|${this.block}`;
    }

    apply(rollResult: RollResult): RollResult {
        return new RollResult(
            this.miss || rollResult.miss,
            this.damage + rollResult.damage,
            this.surge + rollResult.surge,
            this.range + rollResult.range,
            this.block + rollResult.block,
            this.probability * rollResult.probability
            );
    }
}
