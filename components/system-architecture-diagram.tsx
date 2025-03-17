"use client"

import { useEffect } from "react"
import mermaid from "mermaid"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SystemArchitectureDiagram() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "neutral",
      securityLevel: "loose",
    })
    mermaid.run()
  }, [])

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle className="flex items-center justify-center ">System Architecture</CardTitle>
        <CardDescription className="flex items-center justify-center ">How WaveSend components work together</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mermaid flex items-center justify-center ">
          {`flowchart TD
 subgraph subGraph0["📱WAVESEND APP 🌊"]
        Frontend["🖌FRONTEND REACT"]
        User[("👤USER")]
        SMS["📨SMS"]
        Twilio["🔧TWILIO API"]
        Backend["🔧BACKEND NODE.JS"]
        Blockchain["📜 Scroll BLOCKCHAIN"]
  end
    User --ACCESS --> Frontend
    Frontend --SIGN TXN --> SMS
    SMS --SEND SIGNED TXN --> Twilio
    Twilio --WEBHOOK --> Backend
    Backend --CALLBACK --> Twilio
    Backend --DELIVERS TO --> Blockchain
    Blockchain --GET DATA --> Backend
    Twilio --RETURN TXN DATA --> SMS

    Blockchain@{ shape: cyl}
    style Frontend fill:#ebdef0,stroke:#8e44ad,stroke-width:2px
    style User fill:#f9f9f9,stroke:#333,stroke-width:2px
    style SMS fill:#3498db,stroke:#2980b9,stroke-width:2px
    style Twilio fill:#e74c3c,stroke:#c0392b,stroke-width:2px
    style Backend fill:#d5f5e3,stroke:#1abc9c,stroke-width:2px
    style Blockchain fill:#f9f9f9,stroke:#333,stroke-width:2px
    style subGraph0 fill: white


          `}
        </div>
      </CardContent>
    </Card>
  )
}

