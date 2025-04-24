"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCryptoData, updateCryptoData } from "@/lib/features/crypto/cryptoSlice"
import { selectAllCryptos } from "@/lib/features/crypto/cryptoSelectors"
import CryptoTable from "@/components/crypto-table"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import LoadingSpinner from "@/components/loading-spinner"
import ErrorMessage from "@/components/error-message"

export default function Home() {
  const dispatch = useDispatch()
  const cryptos = useSelector(selectAllCryptos)
  const status = useSelector((state) => state.crypto.status)
  const error = useSelector((state) => state.crypto.error)
  const [isLoading, setIsLoading] = useState(true)

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

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Cryptocurrency Market</h1>

          {isLoading ? (
            <LoadingSpinner />
          ) : status === "failed" ? (
            <ErrorMessage message={error} />
          ) : cryptos.length === 0 ? (
            <ErrorMessage message="No cryptocurrency data available. Please try again later." />
          ) : (
            <CryptoTable cryptos={cryptos} />
          )}
        </main>
      </div>
    </ThemeProvider>
  )
}
