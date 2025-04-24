import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value) {
  if (!value && value !== 0) return "N/A"

  // Format based on value size
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`
  } else if (value >= 1) {
    return `$${value.toFixed(2)}`
  } else {
    // For very small values like $0.00001234
    return `$${value.toFixed(8)}`
  }
}

export function formatNumber(value) {
  if (!value && value !== 0) return "N/A"

  // Format based on value size
  if (value >= 1e9) {
    return `${(value / 1e9).toFixed(2)}B`
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(2)}M`
  } else if (value >= 1e3) {
    return `${(value / 1e3).toFixed(2)}K`
  } else {
    return value.toLocaleString()
  }
}

export function formatPercentage(value) {
  if (!value && value !== 0) return "N/A"
  return `${value.toFixed(2)}%`
}
