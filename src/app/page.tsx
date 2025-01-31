import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Startup Validator</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Start Validating</h2>
          <Button asChild size="lg" className="w-full mb-4">
            <Link href="/projects/new">Start New Project</Link>
          </Button>
          <Card>
            <CardHeader>
              <CardTitle>Active Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No active projects yet.</p>
            </CardContent>
          </Card>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Quick Idea Capture</h2>
          <Card>
            <CardHeader>
              <CardTitle>New Idea</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="idea-title">Title</Label>
                    <Input id="idea-title" placeholder="Enter your idea title" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="idea-description">Description</Label>
                    <Textarea id="idea-description" placeholder="Briefly describe your idea" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button>Save Idea</Button>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  )
}

