import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DeploymentGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deployment Guide</CardTitle>
        <CardDescription>Follow these steps to deploy WaveSend</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">1. Environment Setup</h3>
          <div className="rounded-md bg-muted p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Copy environment sample</p>
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <Copy className="h-3.5 w-3.5" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <pre className="mt-2 overflow-x-auto text-xs">
              <code className="text-muted-foreground">cp env.sample .env</code>
            </pre>
          </div>
          <p className="text-sm text-muted-foreground">Edit environment variables following these tips:</p>
          <div className="rounded-md bg-muted p-4">
            <pre className="overflow-x-auto text-xs">
              <code className="text-muted-foreground">
                NEXT_PUBLIC_PVK_DEPLOYER=[ETH private key] TWILLIO_TOKEN=Basic [encoded base64 user:secret]
                TWILLIO_ACCOUNT=[twillio account id] NEXT_PUBLIC_TWILLIO_NUMBER=[twillio number formatted]
              </code>
            </pre>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">2. Local Development</h3>
          <Tabs defaultValue="yarn">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="yarn">Yarn</TabsTrigger>
              <TabsTrigger value="npm">NPM</TabsTrigger>
            </TabsList>
            <TabsContent value="yarn" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Install dependencies</p>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <pre className="mt-2 overflow-x-auto text-xs">
                  <code className="text-muted-foreground">yarn install</code>
                </pre>
              </div>
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Build application</p>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <pre className="mt-2 overflow-x-auto text-xs">
                  <code className="text-muted-foreground">yarn build</code>
                </pre>
              </div>
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Test locally</p>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <pre className="mt-2 overflow-x-auto text-xs">
                  <code className="text-muted-foreground">yarn dev</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="npm" className="space-y-4">
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Install dependencies</p>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <pre className="mt-2 overflow-x-auto text-xs">
                  <code className="text-muted-foreground">npm install</code>
                </pre>
              </div>
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Build application</p>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <pre className="mt-2 overflow-x-auto text-xs">
                  <code className="text-muted-foreground">npm run build</code>
                </pre>
              </div>
              <div className="rounded-md bg-muted p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Test locally</p>
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <pre className="mt-2 overflow-x-auto text-xs">
                  <code className="text-muted-foreground">npm run dev</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">3. Docker Deployment</h3>
          <div className="rounded-md bg-muted p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Build your image</p>
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <Copy className="h-3.5 w-3.5" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <pre className="mt-2 overflow-x-auto text-xs">
              <code className="text-muted-foreground">
                docker build . -f ./Dockerfile -t yourregistry/wavesend:latest
              </code>
            </pre>
          </div>
          <div className="rounded-md bg-muted p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Upload to your registry</p>
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <Copy className="h-3.5 w-3.5" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
            <pre className="mt-2 overflow-x-auto text-xs">
              <code className="text-muted-foreground">docker push yourregistry/wavesend:latest</code>
            </pre>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">4. Final Configuration</h3>
          <div className="rounded-md bg-muted p-4">
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Deploy app in a cloud and point a DNS to it</li>
              <li>Configure Twilio webhook to call /api/relay</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

