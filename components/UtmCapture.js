'use client'

import { useEffect } from 'react'
import { captureUtmFromUrl } from '@/lib/utm'

function UtmCapture() {
    useEffect(() => {
        captureUtmFromUrl();
    }, []);

    return null;
}

export default UtmCapture
