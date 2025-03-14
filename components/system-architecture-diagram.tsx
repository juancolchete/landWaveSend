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
        <CardTitle>System Architecture</CardTitle>
        <CardDescription>How WaveSend components work together</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mermaid">
          {`
          graph TD
            User[("👤 User")] -->|Accesses| App["📱 WaveSend App"]
            App -->|Sends message| Twilio["🔄 Twilio API"]
            App -->|Uses| Tech["Technologies Used"]
            App -->|Interface| Tech
            
            subgraph Tech ["🔧 Technologies"]
              Backend["⚙️ Backend<br/>Node.js"] --- Frontend["🎨 Frontend<br/>React"]
              Backend -->|Processes| SMS["✉️ SMS"]
              Backend -->|Stores in| DB["💾 Database"]
              Backend -->|Hosted on| Vercel
              Frontend -->|Hosted on| Vercel
            end
            
            SMS -->|Delivers to| Blockchain[("⛓️ Blockchain")]
            
            style Tech fill:#f5f5f5,stroke:#ddd
            style App fill:#e8f4ff,stroke:#2196f3
            style Twilio fill:#ff5252,stroke:#d32f2f
            style Backend fill:#e8ffd8,stroke:#4caf50
            style Frontend fill:#ffe8fd,stroke:#9c27b0
            style Vercel fill:#f5f5f5,stroke:#333
            style Blockchain fill:#fff,stroke:#333
          `}
        </div>
      </CardContent>
    </Card>
  )
}

