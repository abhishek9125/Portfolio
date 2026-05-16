function LogoMark({ className = 'h-full w-full' }) {
    return (
        <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden
        >
            <path
                d="M0 12.2C0 6.9 3.2 2.3 8.2 1.1C17 0 31 0 37.3 3.6C43 6.8 42.6 18.8 41.1 26.9C39.6 34.6 33.1 40 25.4 40H6.3C2.8 40 0 37.2 0 33.7V12.2Z"
                fill="#FE705A"
            />
            <text
                x="20"
                y="26"
                fill="white"
                fontSize="15"
                fontWeight="700"
                fontFamily="system-ui, -apple-system, sans-serif"
                textAnchor="middle"
                letterSpacing="-0.5"
            >
                AA
            </text>
        </svg>
    )
}

export default LogoMark
