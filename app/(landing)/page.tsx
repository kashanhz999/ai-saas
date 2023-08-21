import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <p>Landing Page (unprotected)</p>
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
      </div>
      <div>
        <Link href="/sign-up">
          <Button>
            Register
          </Button>
        </Link>
      </div>
      
    </div>

  )
}
