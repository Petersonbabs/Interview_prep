import { getTechLogos } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const TechStackIcons = async ({ techStack }: TechIconProps) => {
    const icons = await getTechLogos(techStack)
    return (
        <div className='flex items-center'>
            { icons.map(tech => (
                    <Image width={22} height={22} alt='icon' src={tech.url} className='-ml-1 border rounded-full ' key={tech.tech}/>
            ))}
        </div>
    )
}

export default TechStackIcons
