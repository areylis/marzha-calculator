export type ProfitObject = {
  profitRub: number
  profitPercent: number
}

type BuyMarzhaProps = {
  localBitcoinsAdPrice: number
  btcPriceOnExchange: number
  usdPrice: number
  localBitcoinsOutgoingFee: number
  exchangeTradingFee: number
  btcPurchasedCount?: number
  transactionType?: 'maker' | 'taker'
}

export function calculateLocalBitcoinsBuyMarzha({
  localBitcoinsAdPrice,
  btcPriceOnExchange,
  usdPrice,
  localBitcoinsOutgoingFee,
  exchangeTradingFee,
  btcPurchasedCount = 1, // Если мы считаем маржу от покупки одного битка, если мы уже купили, то считаем без учета комиссии локала
  transactionType = 'maker',
}: BuyMarzhaProps): ProfitObject {
  const btcRubPriceOnExchange = btcPriceOnExchange * usdPrice
  const localBitcoinsTradingFee = transactionType === 'maker' ? 0.01 : 0 // 1% комиссии за сделки на локале
  const purchasedBitcoinsInRublesOnLocalBitcoins = localBitcoinsAdPrice * btcPurchasedCount

  const btcOutFromLocalBitcoins =
    btcPurchasedCount - btcPurchasedCount * localBitcoinsTradingFee - localBitcoinsOutgoingFee

  const btcInRubAfterSellOnExchange =
    (btcOutFromLocalBitcoins - btcOutFromLocalBitcoins * exchangeTradingFee) * btcRubPriceOnExchange

  const profitRub = btcInRubAfterSellOnExchange - purchasedBitcoinsInRublesOnLocalBitcoins
  const profitPercent = (profitRub / purchasedBitcoinsInRublesOnLocalBitcoins) * 100

  return { profitRub: parseFloat(profitRub.toFixed(2)), profitPercent: parseFloat(profitPercent.toFixed(2)) }
}

type SellMarzhaProps = {
  localBitcoinsAdPrice: number
  btcPriceOnExchange: number
  usdPrice: number
  localBitcoinsDepositFee: number
  exchangeTradingFee: number
  exchangeOutgoingFee: number
  btcPurchasedCount?: number
  transactionType?: 'maker' | 'taker'
}

export function calculateLocalBitcoinsSellMarzha({
  localBitcoinsAdPrice,
  btcPriceOnExchange,
  usdPrice,
  localBitcoinsDepositFee,
  exchangeTradingFee,
  exchangeOutgoingFee,
  btcPurchasedCount = 1,
  transactionType = 'maker',
}: SellMarzhaProps): ProfitObject {
  const btcRubPrice = btcPriceOnExchange * usdPrice
  const localBitcoinsTradingFee = transactionType === 'maker' ? 0.01 : 0 // 1% комиссии за сделки на локале
  const purchasedBitcoinsInRublesOnExchange = btcRubPrice * btcPurchasedCount

  const btcOutFromExchange = btcPurchasedCount - exchangeTradingFee * btcPurchasedCount - exchangeOutgoingFee

  const btcInLocalbitcoins = btcOutFromExchange - localBitcoinsDepositFee
  const rubbleInLocalBitcoins = btcInLocalbitcoins * localBitcoinsAdPrice

  const moneyAfterSellLocalBitcoins = rubbleInLocalBitcoins - rubbleInLocalBitcoins * localBitcoinsTradingFee

  const profitRub = moneyAfterSellLocalBitcoins - purchasedBitcoinsInRublesOnExchange
  const profitPercent = (profitRub / purchasedBitcoinsInRublesOnExchange) * 100

  return { profitRub: parseFloat(profitRub.toFixed(2)), profitPercent: parseFloat(profitPercent.toFixed(2)) }
}
