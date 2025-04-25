"use client"
import {useEffect, ReactNode} from "react"

const GlobalProvider = ({children}:{children:ReactNode}) => {
    useEffect(() => {
        document.querySelectorAll("img").forEach((img)=>{
            if(!img.hasAttribute("loading")){
                img.setAttribute("loading", "lazy")
            }
        })
    }, [])
    
  return (
    <div>
      {children}
    </div>
  )
}

export default GlobalProvider
