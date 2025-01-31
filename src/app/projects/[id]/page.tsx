import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProjectDashboard({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project Dashboard: {params.id}</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Project Status</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">In Progress</p>
            <progress className="w-full mt-2" value="60" max="100"></progress>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Next Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Conduct 3 more customer interviews</li>
              <li>Analyze feedback from initial prototype</li>
              <li>Refine value proposition based on insights</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Key Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Customer Interviews: 7</li>
              <li>Hypothesis Validated: 2</li>
              <li>Pivot Points: 1</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Completed customer interview #7</li>
              <li>Updated project hypothesis</li>
              <li>Refined target market segment</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <Button>Export Project Data</Button>
      </div>
    </div>
  )
}

