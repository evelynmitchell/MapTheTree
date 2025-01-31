"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewProject() {
  const [step, setStep] = useState(1)
  const router = useRouter()
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    techStack: "",
    targetUser: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProjectData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit project data
      console.log("Project data:", projectData)
      router.push("/projects")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            Step {step} of 3: {step === 1 ? "Technical Idea Input" : step === 2 ? "AI Analysis" : "Hypothesis Builder"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <form className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={projectData.title}
                  onChange={handleInputChange}
                  placeholder="Enter project title"
                />
              </div>
              <div>
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={projectData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your project in detail"
                />
              </div>
              <div>
                <Label htmlFor="techStack">Technology Stack/Requirements</Label>
                <Input
                  id="techStack"
                  name="techStack"
                  value={projectData.techStack}
                  onChange={handleInputChange}
                  placeholder="Enter technology stack"
                />
              </div>
              <div>
                <Label htmlFor="targetUser">Initial Target User Description</Label>
                <Textarea
                  id="targetUser"
                  name="targetUser"
                  value={projectData.targetUser}
                  onChange={handleInputChange}
                  placeholder="Describe your target user"
                />
              </div>
            </form>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <p>AI Analysis Dashboard (Placeholder)</p>
              <ul className="list-disc list-inside">
                <li>Technical feasibility score</li>
                <li>Market opportunity assessment</li>
                <li>Potential customer segments</li>
                <li>Key risks and assumptions</li>
              </ul>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <p>Hypothesis Builder (Placeholder)</p>
              <ul className="list-disc list-inside">
                <li>Auto-generated initial hypotheses</li>
                <li>Ability to add/edit hypotheses</li>
                <li>Priority ranking for testing</li>
                <li>Status tracking</li>
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext}>{step === 3 ? "Finish" : "Next"}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

