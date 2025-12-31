import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formats a number as a currency string using Intl.NumberFormat
// - Safely handles null/undefined/NaN by returning a fallback dash
// - Defaults to en-US and USD, but both can be customized
export function formatCurrency(
  value: number | string | null | undefined,
  options?: {
    currency?: string
    locale?: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
  }
): string {
  if (value === null || value === undefined) return "—"
  const num = typeof value === "string" ? Number(value) : value
  if (!isFinite(num)) return "—"

  const {
    currency = "USD",
    locale = "en-US",
    minimumFractionDigits,
    maximumFractionDigits,
  } = options || {}

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    // Only include fraction digit options if provided to avoid overriding currency defaults
    ...(minimumFractionDigits !== undefined ? { minimumFractionDigits } : {}),
    ...(maximumFractionDigits !== undefined ? { maximumFractionDigits } : {}),
  })

  return formatter.format(num)
}
