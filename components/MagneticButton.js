'use client'

import { useRef, useState, useCallback } from 'react'

export default function MagneticButton({ children, className = '', strength = 0.25 }) {
    const ref = useRef(null)
    const [pos, setPos] = useState({ x: 0, y: 0 })

    const handleMove = useCallback(
        (e) => {
            const rect = ref.current?.getBoundingClientRect()
            if (!rect) return
            setPos({
                x: (e.clientX - rect.left - rect.width / 2) * strength,
                y: (e.clientY - rect.top - rect.height / 2) * strength,
            })
        },
        [strength]
    )

    const reset = useCallback(() => setPos({ x: 0, y: 0 }), [])

    return (
        <div
            ref={ref}
            className={`hidden sm:inline-block ${className}`}
            onMouseMove={handleMove}
            onMouseLeave={reset}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
        >
            {children}
        </div>
    )
}
