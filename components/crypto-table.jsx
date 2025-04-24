"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Star, HelpCircle, ArrowUp, ArrowDown } from "lucide-react"
import { formatCurrency, formatNumber, formatPercentage } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SparklineChart from "@/components/sparkline-chart"

export default function CryptoTable({ cryptos }) {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const renderPercentageChange = (value) => {
    const isPositive = value >= 0
    const color = isPositive ? "text-green-500" : "text-red-500"
    const Icon = isPositive ? ArrowUp : ArrowDown

    return (
      <div className={`flex items-center ${color}`}>
        <Icon className="h-3 w-3 mr-1" />
        <span>{formatPercentage(Math.abs(value))}</span>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 dark:bg-gray-900">
              <TableHead className="w-12 text-gray-700 dark:text-gray-300">#</TableHead>
              <TableHead className="text-gray-700 dark:text-gray-300">Name</TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">Price</TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">1h %</TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">24h %</TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">7d %</TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-end">
                  Market Cap
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                          <HelpCircle className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Market Cap = Current Price x Circulating Supply</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-end">
                  Volume(24h)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                          <HelpCircle className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>A measure of how much of a cryptocurrency was traded in the last 24 hours.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">
                <div className="flex items-center justify-end">
                  Circulating Supply
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-5 w-5 ml-1">
                          <HelpCircle className="h-3 w-3" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>The amount of coins that are circulating in the market and are in public hands.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </TableHead>
              <TableHead className="text-right text-gray-700 dark:text-gray-300">Last 7 Days</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cryptos.map((crypto, index) => (
              <TableRow
                key={crypto.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-700"
              >
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 mr-2"
                      onClick={() => toggleFavorite(crypto.id)}
                    >
                      <Star
                        className={`h-4 w-4 ${favorites.includes(crypto.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    </Button>
                    {index + 1}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <img
                      src={crypto.image || "/placeholder.svg?height=24&width=24"}
                      alt={crypto.name}
                      className="w-6 h-6 mr-2"
                    />
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{crypto.name}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm">{crypto.symbol.toUpperCase()}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium text-gray-900 dark:text-white">
                  {formatCurrency(crypto.current_price)}
                </TableCell>
                <TableCell className="text-right">
                  {renderPercentageChange(crypto.price_change_percentage_1h_in_currency)}
                </TableCell>
                <TableCell className="text-right">
                  {renderPercentageChange(crypto.price_change_percentage_24h_in_currency)}
                </TableCell>
                <TableCell className="text-right">
                  {renderPercentageChange(crypto.price_change_percentage_7d_in_currency)}
                </TableCell>
                <TableCell className="text-right text-gray-900 dark:text-white">
                  {formatCurrency(crypto.market_cap)}
                </TableCell>
                <TableCell className="text-right">
                  <div className="text-gray-900 dark:text-white">
                    {formatCurrency(crypto.total_volume)}
                    <div className="text-gray-500 dark:text-gray-400 text-xs">
                      {formatNumber(crypto.total_volume / crypto.current_price)} {crypto.symbol.toUpperCase()}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="text-gray-900 dark:text-white">
                    {formatNumber(crypto.circulating_supply)} {crypto.symbol.toUpperCase()}
                    {crypto.max_supply && (
                      <div className="mt-1 bg-gray-200 dark:bg-gray-700 h-1.5 w-full rounded-full overflow-hidden">
                        <div
                          className="bg-blue-500 h-full rounded-full"
                          style={{ width: `${(crypto.circulating_supply / crypto.max_supply) * 100}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <SparklineChart
                    data={crypto.sparkline_in_7d?.price || []}
                    color={crypto.price_change_percentage_7d_in_currency >= 0 ? "#10B981" : "#EF4444"}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
