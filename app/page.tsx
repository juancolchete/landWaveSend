import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, MessageSquare, Shield, Smartphone, WifiOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import TransactionFlowChart from "@/components/transaction-flow-chart"
import RoadmapTimeline from "@/components/roadmap-timeline"
import SystemArchitectureDiagram from "@/components/system-architecture-diagram"
import DeploymentGuide from "@/components/deployment-guide"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold">WaveSend</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#technology"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Technology
              </Link>
              <Link
                href="#roadmap"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Roadmap
              </Link>
              <Link
                href="#deploy"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Deploy
              </Link>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Money moves offline, with just a text.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A revolutionary digital wallet that enables blockchain transactions via SMS, making it ideal for
                    areas with unreliable infrastructure, crisis situations, and disasters.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[280px] h-[560px] sm:w-[320px] sm:h-[640px] rounded-xl overflow-hidden border-8 border-foreground/10 shadow-xl">
                  <Image
                    src="https://github.com/dannilobr/WS/blob/main/wave%20send%20app.jpg?raw=true"
                    alt="WaveSend App Interface"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Overview</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WaveSend ensures financial access even when the internet is unavailable. Developed on the Scroll
                  network, our platform offers a transparent, efficient, and automated solution for those who need to
                  perform offline transactions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Enables blockchain transactions via SMS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Ideal for areas with unreliable infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Critical for crisis situations and disasters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Transparent, efficient, and automated platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Reaches 1.7 billion people with limited internet access</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-lg">
                    <div className="grid grid-cols-2 gap-4 p-6">
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4 shadow-sm">
                        <WifiOff className="h-8 w-8 text-primary" />
                        <span className="text-sm font-medium">Offline Access</span>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4 shadow-sm">
                        <MessageSquare className="h-8 w-8 text-primary" />
                        <span className="text-sm font-medium">SMS Powered</span>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4 shadow-sm">
                        <Globe className="h-8 w-8 text-primary" />
                        <span className="text-sm font-medium">Global Reach</span>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-background p-4 shadow-sm">
                        <Shield className="h-8 w-8 text-primary" />
                        <span className="text-sm font-medium">Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Main Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WaveSend offers unique features for both consumers and payment services
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-primary" />
                    For Consumers
                  </CardTitle>
                  <CardDescription>Features that empower individual users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Keep Connection</h3>
                    <p className="text-sm text-muted-foreground">
                      Send and receive money using basic mobile phones in regions with intermittent or no internet.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Beyond Disasters</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintain access to financial services via SMS during natural disasters or crises when data
                      networks fail.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">General Inclusion</h3>
                    <p className="text-sm text-muted-foreground">
                      Reaches 1.7 billion people with limited internet access but basic phone ownership.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Low Tech Accessibility</h3>
                    <p className="text-sm text-muted-foreground">
                      No need for smartphones or stable data—just a simple phone with SMS capability.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    Payment Services
                  </CardTitle>
                  <CardDescription>Benefits for payment service providers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Global Impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Expands the reach of digital payments to underserved areas, leveraging the 98% global SMS
                      availability.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Whole Enhancement</h3>
                    <p className="text-sm text-muted-foreground">
                      Enhances the resilience of the payment ecosystem by functioning independently of internet
                      connectivity.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Financial Inclusion</h3>
                    <p className="text-sm text-muted-foreground">
                      Promotes financial inclusion, broadening the user base without requiring advanced technology.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Barrierless</h3>
                    <p className="text-sm text-muted-foreground">
                      Reduces dependency on expensive hardware or data plans, lowering barriers to entry for digital
                      transactions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technologies Used</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WaveSend leverages cutting-edge technologies to provide a seamless offline transaction experience
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Solidity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Programming language for smart contracts that power the WaveSend platform.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Base188 Encoding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A custom, optimized encoding system that compresses transaction data into a compact format suitable
                    for SMS transmission.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Scroll Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Offers scalability, low cost, and high transaction speed for the WaveSend platform.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Twilio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Webhook (SMS API) - An automated system that triggers the sending of messages.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">NextJS</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Applied in the webapp for a seamless user experience.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Secure, automated contracts that handle transaction verification and processing.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <SystemArchitectureDiagram />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The transaction process is simple, secure, and efficient
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <TransactionFlowChart />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Development Roadmap</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our journey to revolutionize offline transactions
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <RoadmapTimeline />
            </div>
          </div>
        </section>

        {/* Deployment Section */}
        <section id="deploy" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Deploy WaveSend</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these steps to deploy your own instance of WaveSend
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <DeploymentGuide />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Revolution</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of the movement to bring financial access to everyone, everywhere, even offline.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg">
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Contribute
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 WaveSend. All rights reserved. Licensed under the MIT License.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/juancolchete/waveSend"
              className="text-sm font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            <Link href="#" className="text-sm font-medium underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

