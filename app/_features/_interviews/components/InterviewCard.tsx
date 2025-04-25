import TechStackIcons from "@/components/commons/TechStack"
import { Button } from "@/components/ui/button"
import { getRandomInterviewCover } from "@/lib/utils"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"

const InterviewCard = ({techstack, type, id, createdAt, role, userId}:InterviewCardProps) => {
    const interviewId = id
    const feedback = null as Feedback | null
    const normalizeType = /mix/gi.test(type) ? "mixed" : type
    const formatedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY")
    
  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
            <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
                <p className="badge-text">{normalizeType}</p>
            </div>
            <Image src={getRandomInterviewCover()} width={90} height={90} alt="company logo" className="rounded-full object-fit size-[90px]"/>
            <h3>{role} Interview</h3>
            <div className="flex gap-5 mt-3">
                <div className="flex gap-2">
                    <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
                    <p>{formatedDate}</p>
                </div>
                <div className="flex gap-2">
                    <Image src="/star.svg" alt="star" width={22} height={200}/>
                    <p>{feedback?.totalScore || "---"}/100</p>
                </div>
            </div>
            <p className="line-clamp-2 mt-5">
                {feedback?.finalAssessment || "You haven't taken this interview yet. Take it now to improve your skills."}
            </p>
        </div>

        <div className="flex justify-between items-center">
            <TechStackIcons techStack={techstack}/>
            <Button className="btn-primary" asChild>
                <Link href={feedback ? `/interview/${interviewId}/feeback` : `/interview/${interviewId}`}>{feedback ? "Check Feedback" : "Start Interview"}</Link>
            </Button>
        </div>

      </div>
    </div>
  )
}

export default InterviewCard
