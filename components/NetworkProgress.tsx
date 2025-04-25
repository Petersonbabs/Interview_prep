import { ReactNode } from 'react'
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NetworkProgress = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <ProgressBar 
                height="4px"
                color="#fffd00"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </div>
    )
}

export default NetworkProgress
