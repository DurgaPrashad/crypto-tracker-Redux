import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// Fetch data from CoinGecko API
export const fetchCryptoData = createAsyncThunk("crypto/fetchCryptoData", async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h,24h,7d",
      { headers: { Accept: "application/json" } },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch crypto data")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching crypto data:", error)
    // Return empty array to prevent app from crashing
    return []
  }
})

// Simulate real-time price updates
export const updateCryptoData = createAsyncThunk("crypto/updateCryptoData", async (_, { getState }) => {
  const { crypto } = getState()

  // If no data yet, return empty array
  if (!crypto.data || crypto.data.length === 0) {
    return []
  }

  const updatedCryptos = crypto.data.map((coin) => {
    // Random price fluctuation between -0.5% and +0.5%
    const priceChange = coin.current_price * (Math.random() * 0.01 - 0.005)
    const newPrice = coin.current_price + priceChange

    // Update percentage changes
    const hourChange = coin.price_change_percentage_1h_in_currency + (Math.random() * 0.2 - 0.1)
    const dayChange = coin.price_change_percentage_24h_in_currency + (Math.random() * 0.2 - 0.1)
    const weekChange = coin.price_change_percentage_7d_in_currency + (Math.random() * 0.2 - 0.1)

    // Update volume
    const volumeChange = coin.total_volume * (Math.random() * 0.02 - 0.01)

    return {
      ...coin,
      current_price: newPrice,
      price_change_percentage_1h_in_currency: hourChange,
      price_change_percentage_24h_in_currency: dayChange,
      price_change_percentage_7d_in_currency: weekChange,
      total_volume: coin.total_volume + volumeChange,
    }
  })

  return updatedCryptos
})

const initialState = {
  data: [],
  status: "idle",
  error: null,
}

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoData.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCryptoData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchCryptoData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
      .addCase(updateCryptoData.fulfilled, (state, action) => {
        state.data = action.payload
      })
  },
})

export default cryptoSlice.reducer
