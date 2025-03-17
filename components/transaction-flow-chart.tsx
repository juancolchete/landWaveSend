"use client"
import Image from "next/image"

export default function TransactionFlowChart() {
  const data = [
    {
      name: "Transaction Speed",
      traditional: 70,
      wavesend: 85,
    },
    {
      name: "Data Size",
      traditional: 80,
      wavesend: 40,
    },
    {
      name: "Cost",
      traditional: 60,
      wavesend: 30,
    },
    {
      name: "Security",
      traditional: 90,
      wavesend: 90,
    },
  ]

  return (
    <Image src={"techwork.png"} width={1250} height={700}  alt="techwork" />
  )
}

