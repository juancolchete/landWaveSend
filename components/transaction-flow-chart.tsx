"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ArrowRight, CheckCircle, MessageSquare, ShieldCheck } from "lucide-react"

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
    <Card className="p-6">
      <div className="mb-6 text-center">
        <h3 className="text-lg font-medium">Transaction Process Flow</h3>
        <p className="text-sm text-muted-foreground">How WaveSend enables offline blockchain transactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <MessageSquare className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-medium mb-1">Initiate Transaction</h4>
          <p className="text-xs text-muted-foreground">User sends an SMS with transaction details</p>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
          <div className="h-6 w-6 md:hidden"></div>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-medium mb-1">Verify Signature</h4>
          <p className="text-xs text-muted-foreground">System verifies the transaction's authenticity</p>
        </div>

        <div className="flex items-center justify-center">
          <ArrowRight className="h-6 w-6 text-muted-foreground hidden md:block" />
          <div className="h-6 w-6 md:hidden"></div>
        </div>

        <div className="flex flex-col items-center text-center p-4 border rounded-lg">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <h4 className="font-medium mb-1">Process Transaction</h4>
          <p className="text-xs text-muted-foreground">Decodes data and updates blockchain state</p>
        </div>
      </div>

      <div className="w-full aspect-[2/1]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "Performance Score", angle: -90, position: "insideLeft" }} />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="traditional"
              name="Traditional Online Transactions"
              fill="rgba(99, 132, 255, 0.5)"
              stroke="rgb(99, 132, 255)"
              strokeWidth={1}
            />
            <Bar
              dataKey="wavesend"
              name="WaveSend SMS Transactions"
              fill="rgba(75, 192, 192, 0.5)"
              stroke="rgb(75, 192, 192)"
              strokeWidth={1}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 text-sm text-center text-muted-foreground">
        <p>WaveSend optimizes transaction processing while maintaining blockchain security</p>
      </div>
    </Card>
  )
}

