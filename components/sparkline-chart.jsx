"use client"

import { useEffect, useRef } from "react"

export default function SparklineChart({ data, color = "#10B981", height = 50, width = 120 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current || !data || data.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

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

  return <canvas ref={canvasRef} height={height} width={width} className="inline-block" />
}
