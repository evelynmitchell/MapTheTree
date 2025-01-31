import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function CustomerDiscovery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Customer Discovery Guide</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Interview Questions Template</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>What's the biggest challenge you face in [problem area]?</li>
              <li>How are you currently solving this problem?</li>
              <li>What do you like and dislike about your current solution?</li>
              <li>If you had a magic wand, how would you solve this problem?</li>
              <li>How much time/money do you spend on this problem currently?</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Interview Scheduling</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="interviewee">Interviewee Name</Label>
                <Input id="interviewee" placeholder="Enter interviewee name" />
              </div>
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>
              <Button>Schedule Interview</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Insights Capture</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="insights">Key Insights</Label>
                <Textarea id="insights" placeholder="Enter key insights from the interview" />
              </div>
              <div>
                <Label htmlFor="action-items">Action Items</Label>
                <Textarea id="action-items" placeholder="List any action items or follow-ups" />
              </div>
              <Button>Save Insights</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Progress Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Interviews Conducted: 0</p>
              <p>Key Learnings: 0</p>
              <progress className="w-full" value="0" max="100"></progress>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

