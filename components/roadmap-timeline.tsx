import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"

export default function RoadmapTimeline() {
  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="absolute left-0 top-0 ml-[11px] h-full w-[1px] bg-border" />

        <div className="relative mb-8 flex items-start">
          <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <CheckCircle className="h-4 w-4" />
          </div>
          <Card className="ml-10 w-full">
            <CardContent className="p-6">
              <div className="mb-2 flex items-center">
                <h3 className="text-lg font-semibold">Phase 1: Deploy</h3>
                <span className="ml-auto text-sm text-muted-foreground">Current</span>
              </div>
              <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-1">
                <li>Full deployment on Scroll Sepolia</li>
                <li>Support for ERC-20 tokens</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="relative mb-8 flex items-start">
          <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Clock className="h-4 w-4" />
          </div>
          <Card className="ml-10 w-full">
            <CardContent className="p-6">
              <div className="mb-2 flex items-center">
                <h3 className="text-lg font-semibold">Phase 2: Expansion</h3>
                <span className="ml-auto text-sm text-muted-foreground">Upcoming</span>
              </div>
              <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-1">
                <li>Expansion to additional blockchain networks</li>
                <li>Support for NFTs</li>
                <li>Expasion to Lightning Network</li>
                <li>Native bridge with Scroll Network</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="relative mb-8 flex items-start">
          <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Clock className="h-4 w-4" />
          </div>
          <Card className="ml-10 w-full">
            <CardContent className="p-6">
              <div className="mb-2 flex items-center">
                <h3 className="text-lg font-semibold">Phase 3: Partnership</h3>
                <span className="ml-auto text-sm text-muted-foreground">Future</span>
              </div>
              <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-1">
                <li>Partnership with companies to pay with QR CODE</li>
                <li>Non Custodial wallet abstraction with phone number with Fireblocks</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="relative flex items-start">
          <div className="absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Clock className="h-4 w-4" />
          </div>
          <Card className="ml-10 w-full">
            <CardContent className="p-6">
              <div className="mb-2 flex items-center">
                <h3 className="text-lg font-semibold">Phase 4: LoRa Integration</h3>
                <span className="ml-auto text-sm text-muted-foreground">Future</span>
              </div>
              <ul className="ml-6 list-disc text-sm text-muted-foreground space-y-1">
                <li>Implementation of LoRa technology for long-range communication</li>
                <li>Development of LoRa-compatible hardware for areas without phone coverage</li>
                <li>Hybrid SMS/LoRa communication protocols for maximum resilience</li>
                <li>Field testing in remote regions with limited infrastructure</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

