'use client'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 480)
        onScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!visible) return null

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-5 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 safe-area-inset-bottom"
            style={{ marginBottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
    )
}

export default BackToTop
