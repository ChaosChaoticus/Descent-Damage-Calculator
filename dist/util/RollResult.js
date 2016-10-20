"use strict";
var RollResult = (function () {
    function RollResult(miss, damage, surge, range, block, probability) {
        if (miss === void 0) { miss = false; }
        if (damage === void 0) { damage = 0; }
        if (surge === void 0) { surge = 0; }
        if (range === void 0) { range = 0; }
        if (block === void 0) { block = 0; }        
        if (probability === void 0) { probability = 1; }
        this.miss = miss;
        this.damage = damage;
        this.surge = surge;
        this.range = range;
        this.block = block;
        this.probability = probability;
    }
    RollResult.prototype.getHashCode = function () {
        return this.miss  + "|"  + this.damage + "|" + this.surge + "|" + this.range + "|" + this.block;
    };
    RollResult.prototype.apply = function (rollResult) {
        return new RollResult(this.miss || rollResult.miss, this.damage + rollResult.damage, this.surge + rollResult.surge, this.range + rollResult.range, this.block + rollResult.block, this.probability * rollResult.probability);
    };
    return RollResult;
}());
exports.RollResult = RollResult;
//# sourceMappingURL=RollResult.js.map