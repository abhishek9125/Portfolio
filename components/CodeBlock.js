function CodeBlock({ title, lines }) {
    return (
        <div className="rounded-2xl border border-border/70 bg-secondary dark:bg-[#14151f] overflow-hidden">
            {title && (
                <div className="px-4 py-2 border-b border-white/10 text-xs text-white/50 font-mono">
                    {title}
                </div>
            )}
            <pre className="p-4 overflow-x-auto text-sm leading-relaxed font-mono">
                <code>
                    {lines.map((line, i) => (
                        <div key={i} className="whitespace-pre">
                            {line.tokens.map((token, j) => (
                                <span key={j} className={tokenClass(token.type)}>
                                    {token.value}
                                </span>
                            ))}
                        </div>
                    ))}
                </code>
            </pre>
        </div>
    );
}

function tokenClass(type) {
    const map = {
        keyword: 'text-[#c792ea]',
        string: 'text-[#c3e88d]',
        comment: 'text-white/40',
        fn: 'text-[#82aaff]',
        plain: 'text-white/85',
        number: 'text-[#f78c6c]',
    };
    return map[type] || map.plain;
}

export default CodeBlock;
