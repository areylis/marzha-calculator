declare type ProfitObject = {
    profitRub: number;
    profitPercent: number;
};
declare type BuyMarzhaProps = {
    localBitcoinsAdPrice: number;
    btcPriceOnExchange: number;
    usdPrice: number;
    localBitcoinsOutgoingFee: number;
    exchangeTradingFee: number;
    btcPurchasedCount?: number;
};
export declare function calculateLocalBitcoinsBuyMarzha({ localBitcoinsAdPrice, btcPriceOnExchange, usdPrice, localBitcoinsOutgoingFee, exchangeTradingFee, btcPurchasedCount, }: BuyMarzhaProps): ProfitObject;
declare type SellMarzhaProps = {
    localBitcoinsAdPrice: number;
    btcPriceOnExchange: number;
    usdPrice: number;
    localBitcoinsDepositFee: number;
    exchangeTradingFee: number;
    exchangeOutgoingFee: number;
    btcPurchasedCount?: number;
};
export declare function calculateLocalBitcoinsSellMarzha({ localBitcoinsAdPrice, btcPriceOnExchange, usdPrice, localBitcoinsDepositFee, exchangeTradingFee, exchangeOutgoingFee, btcPurchasedCount, }: SellMarzhaProps): ProfitObject;
export {};
//# sourceMappingURL=index.d.ts.map