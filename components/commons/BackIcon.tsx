"use client"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

const BackIcon = ({text}:{text?:string}) => {
    const router = useRouter()
    return (
      <div onClick={()=>{router.back()}} className="flex gap-2 px-2 items-center absolute top-[2rem] left-[1rem] text-[14px] cursor-pointer">
      <ArrowLeft  className="size-4"/>
      <span>{text}</span>
    </div>
  )
}

export default BackIcon
