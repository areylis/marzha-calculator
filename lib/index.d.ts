export declare type ProfitObject = {
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
    transactionType?: 'maker' | 'taker';
};
export declare function calculateLocalBitcoinsBuyMarzha({ localBitcoinsAdPrice, btcPriceOnExchange, usdPrice, localBitcoinsOutgoingFee, exchangeTradingFee, btcPurchasedCount, // Если мы считаем маржу от покупки одного битка, если мы уже купили, то считаем без учета комиссии локала
transactionType, }: BuyMarzhaProps): ProfitObject;
declare type SellMarzhaProps = {
    localBitcoinsAdPrice: number;
    btcPriceOnExchange: number;
    usdPrice: number;
    localBitcoinsDepositFee: number;
    exchangeTradingFee: number;
    exchangeOutgoingFee: number;
    btcPurchasedCount?: number;
    transactionType?: 'maker' | 'taker';
};
export declare function calculateLocalBitcoinsSellMarzha({ localBitcoinsAdPrice, btcPriceOnExchange, usdPrice, localBitcoinsDepositFee, exchangeTradingFee, exchangeOutgoingFee, btcPurchasedCount, transactionType, }: SellMarzhaProps): ProfitObject;
export {};
//# sourceMappingURL=index.d.ts.map