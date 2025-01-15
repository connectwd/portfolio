import React from 'react'

type Props = {
    tech: string,
    index: number
}

const TechBubble = ({ tech, index }: Props) => {
    return (
        <span
            key={index}
            className="techLi text-sm px-3 py-1 rounded-full"
        >
            {tech}
        </span>
    )
}

export default TechBubble