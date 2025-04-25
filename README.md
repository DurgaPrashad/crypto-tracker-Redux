# 🚀 Real-Time Cryptocurrency Price Tracker : 
https://crypto-tracker-redux.vercel.app/

A responsive React application that displays real-time cryptocurrency data with price updates, charts, and detailed information. This application simulates a professional cryptocurrency tracking platform like CoinMarketCap or CoinGecko.

Watch the overview of the Cryptocurrency Price Tracker here:  
https://drive.google.com/file/d/1HtuKuJfu0a5zA_AbGGIr_dtQbaRW3x5y/view?usp=drivesdk

![image](https://github.com/user-attachments/assets/776168cb-5b74-4577-bfd5-e5157b68f774)


## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Setup Instructions](#-setup-instructions)
- [Implementation Details](#-implementation-details)
- [API Integration](#-api-integration)
- [State Management](#-state-management)
- [UI/UX Design](#-uiux-design)
- [Performance Optimizations](#-performance-optimizations)
- [Error Handling](#-error-handling)
- [Future Enhancements](#-future-enhancements)
- [Troubleshooting](#-troubleshooting)

## ✨ Features

- **📊 Real-Time Data**: Live price updates every 2 seconds with API refreshes every 30 seconds
- **📈 Comprehensive Information**: 
  - Price with currency formatting
  - Percentage changes (1h, 24h, 7d)
  - Market cap
  - 24h trading volume
  - Circulating supply with progress bar
  - 7-day price charts
- **🎯 Visual Indicators**: 
  - Color-coded percentage changes (green for positive, red for negative)
  - Directional arrows for price movements
  - 7-day sparkline charts
  - Supply progress bars
- **🖱️ Interactive UI**: 
  - Star/favorite cryptocurrencies
  - Toggle between dark/light mode
  - Tooltips for information
- **📱 Responsive Design**: Works on mobile, tablet, and desktop devices
- **🔄 Fallback Mechanism**: Uses mock data if the API fails, ensuring the app always works
- **🛑 Error Handling**: Graceful error handling with user-friendly messages
- 
![image](https://github.com/user-attachments/assets/bc2df36b-de57-4f1b-a887-d7b9ada793eb)

## 🛠️ Tech Stack

### Core Technologies
- **⚛️ React**: UI library for building component-based interfaces  
- **▲ Next.js**: React framework for server-side rendering and routing  
- **📜 JavaScript (ES6+)**: Modern JavaScript syntax  
- **🔠 TypeScript**: Typed superset of JavaScript for better tooling and code reliability  
- **🔄 Redux Toolkit**: State management with simplified Redux setup  
- **🎨 Tailwind CSS**: Utility-first CSS framework for styling
<p align="center">
  <img src="https://github.com/user-attachments/assets/3d0aed4f-e792-4846-b17e-5da5c2b2e8ee" alt="IMG_4150" width="200"/>
  <img src="https://github.com/user-attachments/assets/84192217-027f-4ab7-b54f-839d02414a24" alt="IMG_4149" width="200"/>
  <img src="https://github.com/user-attachments/assets/dcb4e287-befa-4d2a-b5f0-8fb4f142aacc" alt="IMG_4151" width="200"/>
</p>


### UI Components
- **🧩 shadcn/ui**: High-quality UI components built with Radix UI and Tailwind
- **🔍 Lucide React**: Lightweight icon library
- **🌓 next-themes**: Theme management for Next.js

### Data Visualization
- **📊 HTML Canvas API**: For rendering sparkline charts

### API Integration
- **💰 CoinGecko API**: Free cryptocurrency data API
- **🔌 Fetch API**: For making HTTP requests

### Development Tools
- **🔍 ESLint**: JavaScript linting
- **✨ Prettier**: Code formatting
- **📦 npm/yarn**: Package management

## 📐 Architecture

The application follows a modern React architecture with Redux for state management:

### High-Level Architecture

```
User Interface (React Components)
        ↑↓
State Management (Redux Toolkit)
        ↑↓
Data Services (API Integration)
        ↑↓
External API (CoinGecko)
```

### Data Flow

1. **🔄 Data Fetching**:
   - Initial data is fetched from CoinGecko API on component mount
   - API is polled every 30 seconds for fresh data
   - Between API calls, simulated updates occur every 2 seconds

2. **🧠 State Management**:
   - All cryptocurrency data is stored in Redux
   - Components connect to Redux using useSelector hooks
   - Actions are dispatched for data fetching and updates

3. **⚡ Real-Time Updates**:
   - The `updateCryptoData` thunk simulates WebSocket behavior
   - It randomly adjusts prices, percentages, and volumes
   - Updates are dispatched to Redux every 2 seconds

4. **🖥️ Rendering**:
   - The CryptoTable component renders the data from Redux
   - SparklineChart renders 7-day price history using Canvas
   - Percentage changes are color-coded based on value

5. **🌓 Theme Management**:
   - Theme state is managed by next-themes
   - Components respond to theme changes with appropriate styling

## 📂 Project Structure

```
/
├── app/                    # Next.js app directory
│   ├── globals.css         # Global styles
│   ├── layout.jsx          # Root layout with Redux Provider
│   ├── page.jsx            # Main page component
│   └── providers.jsx       # Redux Provider wrapper
│
├── components/             # React components
│   ├── crypto-table.jsx    # Main cryptocurrency table
│   ├── error-message.jsx   # Error display component
│   ├── header.jsx          # App header with theme toggle
│   ├── loading-spinner.jsx # Loading indicator
│   ├── sparkline-chart.jsx # 7-day price chart component
│   ├── theme-provider.jsx  # Theme context provider
│   └── ui/                 # UI components from shadcn
│       ├── button.jsx      # Button component
│       ├── table.jsx       # Table component
│       └── tooltip.jsx     # Tooltip component
│
├── lib/                    # Utility functions and state management
│   ├── features/           # Redux features
│   │   └── crypto/         # Cryptocurrency feature
│   │       ├── cryptoSelectors.js # Redux selectors
│   │       └── cryptoSlice.js     # Redux slice with actions
│   ├── store.js            # Redux store configuration
│   └── utils.js            # Utility functions for formatting
│
├── public/                 # Static assets
│
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## 🚦 Setup Instructions

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DurgaPrashad/crypto-tracker-Redux.git
   cd crypto-price-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🔍 Implementation Details

### Real-Time Update Implementation

The application simulates real-time updates using two approaches:

1. **🔄 API Polling**: Fetches fresh data every 30 seconds from CoinGecko
2. **⚡ Simulated Updates**: Between API calls, prices and metrics are updated every 2 seconds with small random changes

```jsx
// From app/page.jsx
useEffect(() => {
  // Initial fetch
  dispatch(fetchCryptoData())
    .then(() => setIsLoading(false))
    .catch(() => setIsLoading(false))

  // Set up polling for updates every 30 seconds
  const intervalId = setInterval(() => {
    dispatch(fetchCryptoData())
  }, 30000)

  // Simulate more frequent price updates
  const priceUpdateInterval = setInterval(() => {
    dispatch(updateCryptoData())
  }, 2000)

  return () => {
    clearInterval(intervalId)
    clearInterval(priceUpdateInterval)
  }
}, [dispatch])
```

### Sparkline Chart Implementation

The sparkline charts are implemented using the HTML Canvas API:

```jsx
// From components/sparkline-chart.jsx
useEffect(() => {
  if (!canvasRef.current) return

  const canvas = canvasRef.current
  const ctx = canvas.getContext("2d")
  if (!ctx) return

  // Clear canvas
  ctx.clearRect(0, 0, width, height)

  // Set canvas dimensions
  canvas.width = width
  canvas.height = height

  // Handle empty or invalid data
  if (!data || !Array.isArray(data) || data.length === 0) {
    // Draw a flat line if no data
    ctx.beginPath()
    ctx.moveTo(0, height / 2)
    ctx.lineTo(width, height / 2)
    ctx.strokeStyle = color
    ctx.lineWidth = 1.5
    ctx.stroke()
    return
  }

  // Find min and max values
  const minValue = Math.min(...data)
  const maxValue = Math.max(...data)
  const range = maxValue - minValue

  // Calculate scaling factors
  const xScale = width / (data.length - 1)
  const yScale = range > 0 ? (height - 4) / range : 1

  // Start drawing path
  ctx.beginPath()
  ctx.moveTo(0, height - ((data[0] - minValue) * yScale + 2))

  // Draw line segments
  for (let i = 1; i < data.length; i++) {
    const x = i * xScale
    const y = height - ((data[i] - minValue) * yScale + 2)
    ctx.lineTo(x, y)
  }

  // Style and stroke the path
  ctx.strokeStyle = color
  ctx.lineWidth = 1.5
  ctx.stroke()
}, [data, color, height, width])
```

## 🌐 API Integration

The application uses the CoinGecko API to fetch cryptocurrency data:

```jsx
// From lib/features/crypto/cryptoSlice.js
export const fetchCryptoData = createAsyncThunk("crypto/fetchCryptoData", async () => {
  try {
    // Add cache-busting parameter to avoid rate limiting
    const timestamp = new Date().getTime()
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h,24h,7d&timestamp=${timestamp}`,
      {
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
        },
        cache: "no-store",
      },
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Failed to fetch crypto data: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching crypto data:", error)
    // If API fails, return mock data to prevent app from crashing
    return getMockData()
  }
})
```

### API Endpoints Used

- **GET /coins/markets**: Fetches a list of cryptocurrencies with market data
  - Parameters:
    - `vs_currency=usd`: Currency for price data
    - `order=market_cap_desc`: Sort by market cap
    - `per_page=10`: Number of results
    - `sparkline=true`: Include 7-day sparkline data
    - `price_change_percentage=1h,24h,7d`: Include percentage changes

### Rate Limiting Considerations

The CoinGecko API has rate limits for free tier usage. To handle this:

1. Cache-busting parameters are added to prevent 429 errors
2. Mock data is used as a fallback if the API fails
3. The polling interval is set to 30 seconds to stay within limits

## 🧠 State Management

The application uses Redux Toolkit for state management:

### Store Configuration

```jsx
// From lib/store.js
import { configureStore } from "@reduxjs/toolkit"
import cryptoReducer from "./features/crypto/cryptoSlice"

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
```

### Slice Definition

```jsx
// From lib/features/crypto/cryptoSlice.js
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
```

### Selectors

```jsx
// From lib/features/crypto/cryptoSelectors.js
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
```

## 🎨 UI/UX Design

### Theme Implementation

The application supports both light and dark modes:

```jsx
// From components/theme-provider.jsx
export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is only applied after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

### Responsive Design

The UI is fully responsive:
- 📱 Mobile: Scrollable table with optimized layout
- 📲 Tablet: Expanded view with more visible columns
- 🖥️ Desktop: Full table view with all information

### Accessibility Features

- ♿ Semantic HTML structure
- 🎨 Color contrast that meets WCAG guidelines
- 💬 Tooltips for additional information
- ⌨️ Keyboard navigation support

## ⚡ Performance Optimizations

1. **🧠 Memoized Selectors**: Using createSelector for efficient re-renders
2. **🔍 Conditional Rendering**: Loading states and error handling
3. **📊 Optimized Canvas Rendering**: Efficient drawing of sparkline charts
4. **⏱️ Debounced Updates**: Controlled update frequency

## 🛡️ Error Handling

The application implements robust error handling:

1. **🌐 API Failures**: 
   - Try/catch blocks around API calls
   - Fallback to mock data when API fails
   - User-friendly error messages

2. **🔍 Data Validation**:
   - Checks for null/undefined values
   - Fallbacks for missing data
   - Safe rendering patterns

3. **📱 UI Feedback**:
   - Loading indicators
   - Error messages
   - Empty state handling

## 🔮 Future Enhancements

1. **🔌 Real WebSocket Integration**: Replace simulated updates with real WebSocket connection to cryptocurrency exchanges
2. **🔍 Filtering and Sorting**: Add UI controls for filtering and sorting cryptocurrencies
3. **🔎 Search Functionality**: Allow users to search for specific cryptocurrencies
4. **📊 Detailed View**: Create a detailed page for each cryptocurrency with more information
5. **💼 Portfolio Tracking**: Allow users to create a portfolio to track their holdings
6. **🔔 Price Alerts**: Notify users when prices reach certain thresholds
7. **📈 Historical Data**: Add historical price charts with different time ranges
8. **📰 News Integration**: Add cryptocurrency news feed
9. **💱 Multiple Currencies**: Support for different fiat currencies (EUR, GBP, etc.)
10. **📱 Mobile App**: Convert to a Progressive Web App or native mobile app

## 🔧 Troubleshooting

### Common Issues

1. **⚠️ API Rate Limiting**:
   - The CoinGecko API has rate limits for free tier usage
   - If you see "Failed to fetch crypto data" errors, the app will use mock data
   - Consider upgrading to a paid API plan for production use

2. **🖼️ Canvas Rendering Issues**:
   - If charts don't render correctly, check browser compatibility
   - The app uses fallbacks for browsers that don't support Canvas

3. **⏱️ Performance Issues**:
   - If the app feels slow, try reducing the update frequency
   - Modify the interval in app/page.jsx to a higher value

### Support

For issues, questions, or feature requests, please open an issue on the GitHub repository.

---

## 📄 License

MIT License
