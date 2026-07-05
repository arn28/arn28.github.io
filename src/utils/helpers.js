export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}

/**
 * Compute the difference between given month/year and now.
 * @param {number} month 1-based month (1 = January)
 * @param {number} year full year (e.g. 2024)
 * @returns {string} Spanish human-readable difference, e.g. "1 año 2 meses" or "en 1 año 2 meses"
 */
export const diffYearsMonths = (month, year) => {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth1 = now.getMonth() + 1 // convert to 1-based

  const totalMonths = (currentYear - year) * 12 + (currentMonth1 - month)

  const isFuture = totalMonths < 0
  const absMonths = Math.abs(totalMonths)

  const years = Math.floor(absMonths / 12)
  const months = absMonths % 12

  const yearLabel = years === 1 ? "año" : "años"
  const monthLabel = months === 1 ? "mes" : "meses"

  const pieces = []
  if (years > 0) pieces.push(`${years} ${yearLabel}`)
  if (months > 0) pieces.push(`${months} ${monthLabel}`)

  // If both are zero, show zero months
  const body = pieces.length > 0 ? pieces.join(" ") : `0 meses`

  return isFuture ? `en ${body}` : body
}
