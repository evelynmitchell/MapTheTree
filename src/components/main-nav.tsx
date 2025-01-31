import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">Startup Validator</span>
          </Link>
          <nav className="flex gap-6">
            <Link href="/projects" className="flex items-center text-sm font-medium text-muted-foreground">
              Projects
            </Link>
            <Link href="/discovery" className="flex items-center text-sm font-medium text-muted-foreground">
              Discovery
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="mr-2">
              Sign In
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

