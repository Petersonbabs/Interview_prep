import InterviewsList from "@/app/_features/_interviews/components/InterviewsList"
import { Button } from "@/components/ui/button"
import { dummyInterviews } from "@/constants"
import Link from "next/link"

const page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get super-ready for your next Interview with AI.</h2>
          <p className="text-lg">Practice on real live-call interview questions, get instant feedback and improvement.</p>
          <Button className="btn-primary max-sm:w-full" asChild>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
      </section>

      {/* YOUR INTERVIEWS */}
      <section>
        <h2>Your Interviews</h2>
        <InterviewsList interviews={dummyInterviews} />
      </section>
      {/* END OF YOUR INTERVIEWS */}
      {/* OTHERS INTERVIEWS */}
      <section>
        <h2>Take an Interviews</h2>
        <InterviewsList interviews={dummyInterviews} />
      </section>
      {/* END OF OTHERS INTERVIEWS */}
    </>
  )
}

export default page
