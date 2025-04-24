import { createSelector } from "@reduxjs/toolkit"

// Select all cryptos
export const selectAllCryptos = createSelector(
  (state) => state.crypto.data,
  (cryptos) => cryptos || [],
)

// Select crypto by id
export const selectCryptoById = createSelector([selectAllCryptos, (_, id) => id], (cryptos, id) =>
  cryptos.find((crypto) => crypto.id === id),
)

// Select top gainers (24h)
export const selectTopGainers = createSelector(selectAllCryptos, (cryptos) =>
  [...cryptos]
    .sort((a, b) => b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency)
    .slice(0, 5),
)

// Select top losers (24h)
export const selectTopLosers = createSelector(selectAllCryptos, (cryptos) =>
  [...cryptos]
    .sort((a, b) => a.price_change_percentage_24h_in_currency - b.price_change_percentage_24h_in_currency)
    .slice(0, 5),
)
