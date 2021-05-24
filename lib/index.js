"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateLocalBitcoinsSellMarzha = exports.calculateLocalBitcoinsBuyMarzha = void 0;
function calculateLocalBitcoinsBuyMarzha(_a) {
    var localBitcoinsAdPrice = _a.localBitcoinsAdPrice, btcPriceOnExchange = _a.btcPriceOnExchange, usdPrice = _a.usdPrice, localBitcoinsOutgoingFee = _a.localBitcoinsOutgoingFee, exchangeTradingFee = _a.exchangeTradingFee, _b = _a.btcPurchasedCount, btcPurchasedCount = _b === void 0 ? 1 : _b;
    var btcRubPriceOnExchange = btcPriceOnExchange * usdPrice;
    var localBitcoinsTradingFee = 0.01; // 1% комиссии за сделки на локале
    var purchasedBitcoinsInRublesOnLocalBitcoins = localBitcoinsAdPrice * btcPurchasedCount;
    var btcOutFromLocalBitcoins = btcPurchasedCount - btcPurchasedCount * localBitcoinsTradingFee - localBitcoinsOutgoingFee;
    var btcInRubAfterSellOnExchange = (btcOutFromLocalBitcoins - btcOutFromLocalBitcoins * exchangeTradingFee) * btcRubPriceOnExchange;
    var profitRub = btcInRubAfterSellOnExchange - purchasedBitcoinsInRublesOnLocalBitcoins;
    var profitPercent = (profitRub / purchasedBitcoinsInRublesOnLocalBitcoins) * 100;
    return { profitRub: parseFloat(profitRub.toFixed(2)), profitPercent: parseFloat(profitPercent.toFixed(2)) };
}
exports.calculateLocalBitcoinsBuyMarzha = calculateLocalBitcoinsBuyMarzha;
function calculateLocalBitcoinsSellMarzha(_a) {
    var localBitcoinsAdPrice = _a.localBitcoinsAdPrice, btcPriceOnExchange = _a.btcPriceOnExchange, usdPrice = _a.usdPrice, localBitcoinsDepositFee = _a.localBitcoinsDepositFee, exchangeTradingFee = _a.exchangeTradingFee, exchangeOutgoingFee = _a.exchangeOutgoingFee, _b = _a.btcPurchasedCount, btcPurchasedCount = _b === void 0 ? 1 : _b;
    var btcRubPrice = btcPriceOnExchange * usdPrice;
    var localBitcoinsTradingFee = 0.01; // 1% комиссии за сделки на локале
    var purchasedBitcoinsInRublesOnExchange = btcRubPrice * btcPurchasedCount;
    var btcOutFromExchange = btcPurchasedCount - exchangeTradingFee * btcPurchasedCount - exchangeOutgoingFee;
    var btcInLocalbitcoins = btcOutFromExchange - localBitcoinsDepositFee;
    var rubbleInLocalBitcoins = btcInLocalbitcoins * localBitcoinsAdPrice;
    var moneyAfterSellLocalBitcoins = rubbleInLocalBitcoins - rubbleInLocalBitcoins * localBitcoinsTradingFee;
    var profitRub = moneyAfterSellLocalBitcoins - purchasedBitcoinsInRublesOnExchange;
    var profitPercent = (profitRub / purchasedBitcoinsInRublesOnExchange) * 100;
    return { profitRub: parseFloat(profitRub.toFixed(2)), profitPercent: parseFloat(profitPercent.toFixed(2)) };
}
exports.calculateLocalBitcoinsSellMarzha = calculateLocalBitcoinsSellMarzha;
//# sourceMappingURL=index.js.map