'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ChevronRight, ChevronDown, Download, FileCode2, Terminal } from 'lucide-react'
import { qualificationData, skillData, contactPrimary } from '@/constants'

const COLORS = {
    keyword: 'text-purple-500 dark:text-purple-400',
    string: 'text-emerald-600 dark:text-emerald-400',
    number: 'text-amber-600 dark:text-amber-400',
    property: 'text-sky-600 dark:text-sky-400',
    type: 'text-yellow-600 dark:text-yellow-400',
    comment: 'text-gray-400 dark:text-gray-500 italic',
    bracket: 'text-gray-500 dark:text-gray-400',
    plain: 'text-foreground',
    fn: 'text-blue-600 dark:text-blue-400',
}

function Token({ type, value }) {
    return <span className={COLORS[type] || COLORS.plain}>{value}</span>
}

function buildResumeLines() {
    const lines = []
    let lineNum = 1

    const push = (tokens, indent = 0) => {
        lines.push({ num: lineNum++, tokens, indent })
    }

    push([{ type: 'comment', value: '// resume.ts — Abhishek Agarwal' }])
    push([{ type: 'comment', value: '// Last updated: May 2026' }])
    push([])

    push([
        { type: 'keyword', value: 'interface ' },
        { type: 'type', value: 'Experience' },
        { type: 'bracket', value: ' {' },
    ])
    push([{ type: 'property', value: 'company' }, { type: 'plain', value: ': ' }, { type: 'type', value: 'string' }], 1)
    push([{ type: 'property', value: 'role' }, { type: 'plain', value: ': ' }, { type: 'type', value: 'string' }], 1)
    push([{ type: 'property', value: 'period' }, { type: 'plain', value: ': ' }, { type: 'type', value: 'string' }], 1)
    push([{ type: 'property', value: 'highlights' }, { type: 'plain', value: ': ' }, { type: 'type', value: 'string[]' }], 1)
    push([{ type: 'bracket', value: '}' }])
    push([])

    push([
        { type: 'keyword', value: 'const ' },
        { type: 'fn', value: 'abhishek' },
        { type: 'plain', value: ' = ' },
        { type: 'bracket', value: '{' },
    ])

    push([{ type: 'property', value: 'name' }, { type: 'plain', value: ': ' }, { type: 'string', value: '"Abhishek Agarwal"' }, { type: 'plain', value: ',' }], 1)
    push([{ type: 'property', value: 'title' }, { type: 'plain', value: ': ' }, { type: 'string', value: '"Full-Stack Software Engineer"' }, { type: 'plain', value: ',' }], 1)
    push([{ type: 'property', value: 'location' }, { type: 'plain', value: ': ' }, { type: 'string', value: '"Bengaluru, India"' }, { type: 'plain', value: ',' }], 1)

    const email = contactPrimary?.find(c => c.label === 'Email')?.text || 'abhishek4075@gmail.com'
    push([{ type: 'property', value: 'email' }, { type: 'plain', value: ': ' }, { type: 'string', value: `"${email}"` }, { type: 'plain', value: ',' }], 1)
    push([{ type: 'property', value: 'website' }, { type: 'plain', value: ': ' }, { type: 'string', value: '"abhishekagarwal.info"' }, { type: 'plain', value: ',' }], 1)
    push([])

    // Experience — collapsible section marker
    push([{ type: 'comment', value: '// --- Experience ---' }])
    push([{ type: 'property', value: 'experience' }, { type: 'plain', value: ': [' }], 1)

    const expData = qualificationData?.[0]?.data || []
    expData.forEach((exp, i) => {
        push([{ type: 'bracket', value: '{' }], 2)
        push([{ type: 'property', value: 'company' }, { type: 'plain', value: ': ' }, { type: 'string', value: `"${exp.company}"` }, { type: 'plain', value: ',' }], 3)
        push([{ type: 'property', value: 'role' }, { type: 'plain', value: ': ' }, { type: 'string', value: `"${exp.role}"` }, { type: 'plain', value: ',' }], 3)
        push([{ type: 'property', value: 'period' }, { type: 'plain', value: ': ' }, { type: 'string', value: `"${exp.years}"` }, { type: 'plain', value: ',' }], 3)
        push([{ type: 'property', value: 'highlights' }, { type: 'plain', value: ': [' }], 3)
        exp.highlights.forEach((h) => {
            push([{ type: 'string', value: `"${h}"` }, { type: 'plain', value: ',' }], 4)
        })
        push([{ type: 'plain', value: '],' }], 3)
        push([{ type: 'bracket', value: '}' }, { type: 'plain', value: i < expData.length - 1 ? ',' : '' }], 2)
    })
    push([{ type: 'plain', value: '],' }], 1)
    push([])

    // Skills
    push([{ type: 'comment', value: '// --- Skills ---' }])
    push([{ type: 'property', value: 'skills' }, { type: 'plain', value: ': {' }], 1)
    skillData.forEach((group) => {
        const key = group.title.toLowerCase().replace(/[^a-z0-9]/g, '_')
        const vals = group.data.map(d => `"${d.name}"`).join(', ')
        push([{ type: 'property', value: key }, { type: 'plain', value: ': [' }, { type: 'string', value: vals }, { type: 'plain', value: '],' }], 2)
    })
    push([{ type: 'plain', value: '},' }], 1)
    push([])

    push([{ type: 'comment', value: '// --- Meta ---' }])
    push([{ type: 'property', value: 'yearsOfExperience' }, { type: 'plain', value: ': ' }, { type: 'number', value: '5' }, { type: 'plain', value: ',' }], 1)
    push([{ type: 'property', value: 'openToWork' }, { type: 'plain', value: ': ' }, { type: 'keyword', value: 'true' }, { type: 'plain', value: ',' }], 1)
    push([{ type: 'property', value: 'noticePeriod' }, { type: 'plain', value: ': ' }, { type: 'string', value: '"Negotiable"' }, { type: 'plain', value: ',' }], 1)
    push([{ type: 'property', value: 'preferredRoles' }, { type: 'plain', value: ': [' }, { type: 'string', value: '"SDE II"' }, { type: 'plain', value: ', ' }, { type: 'string', value: '"SDE III"' }, { type: 'plain', value: ', ' }, { type: 'string', value: '"Staff Engineer"' }, { type: 'plain', value: '],' }], 1)

    push([{ type: 'bracket', value: '} as const' }])
    push([])
    push([{ type: 'keyword', value: 'export default ' }, { type: 'fn', value: 'abhishek' }])

    return lines
}

function ResumeCode() {
    const [copied, setCopied] = useState(false)
    const [collapsedSections, setCollapsedSections] = useState(new Set())
    const lines = buildResumeLines()

    const sections = {
        'Experience': { startComment: '// --- Experience ---', endComment: '// --- Skills ---' },
        'Skills': { startComment: '// --- Skills ---', endComment: '// --- Meta ---' },
        'Meta': { startComment: '// --- Meta ---', endComment: null },
    }

    const sectionRanges = {}
    Object.entries(sections).forEach(([name, { startComment, endComment }]) => {
        const startIdx = lines.findIndex(l => l.tokens.some(t => t.value === startComment))
        let endIdx
        if (endComment) {
            endIdx = lines.findIndex(l => l.tokens.some(t => t.value === endComment))
        } else {
            endIdx = lines.length
        }
        if (startIdx >= 0) {
            sectionRanges[name] = { start: startIdx, end: endIdx }
        }
    })

    const toggleSection = (name) => {
        setCollapsedSections(prev => {
            const next = new Set(prev)
            if (next.has(name)) next.delete(name)
            else next.add(name)
            return next
        })
    }

    const isLineHidden = (idx) => {
        for (const [name, range] of Object.entries(sectionRanges)) {
            if (collapsedSections.has(name) && idx > range.start && idx < range.end) {
                return true
            }
        }
        return false
    }

    const isSectionHeader = (idx) => {
        for (const [name, range] of Object.entries(sectionRanges)) {
            if (idx === range.start) return name
        }
        return null
    }

    const plainText = lines.map(l => {
        const indent = '  '.repeat(l.indent)
        return indent + l.tokens.map(t => t.value).join('')
    }).join('\n')

    const handleCopy = useCallback(async () => {
        await navigator.clipboard.writeText(plainText)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }, [plainText])

    return (
        <div className="w-full">
            {/* Editor chrome */}
            <div className="rounded-xl border border-border/60 bg-white dark:bg-[#1e1e2e] shadow-2xl overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-[#181825] border-b border-border/40">
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="w-3 h-3 rounded-full bg-yellow-400" />
                            <span className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="flex items-center gap-1.5 ml-3 text-xs text-muted-foreground">
                            <FileCode2 size={13} />
                            <span>resume.ts</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground px-2.5 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                        >
                            {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>

                {/* Tab bar */}
                <div className="flex items-center gap-0 bg-gray-100/60 dark:bg-[#1a1a2e] border-b border-border/30 px-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white dark:bg-[#1e1e2e] border-x border-t border-border/30 rounded-t-md -mb-px relative z-10">
                        <Terminal size={12} className="text-primary" />
                        <span>resume.ts</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground">
                        package.json
                    </div>
                </div>

                {/* Code area */}
                <div className="overflow-x-auto max-h-[70vh] overflow-y-auto scrollbar-hide">
                    <pre className="font-mono text-[13px] leading-6 p-0">
                        <code>
                            {lines.map((line, idx) => {
                                if (isLineHidden(idx)) return null

                                const sectionName = isSectionHeader(idx)
                                const isCollapsed = sectionName && collapsedSections.has(sectionName)
                                const indent = '  '.repeat(line.indent)

                                return (
                                    <motion.div
                                        key={line.num}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: idx * 0.008, duration: 0.3 }}
                                        className="flex hover:bg-primary/[0.03] dark:hover:bg-white/[0.02] group"
                                    >
                                        <span className="select-none w-12 shrink-0 text-right pr-4 text-gray-300 dark:text-gray-600 text-xs leading-6 border-r border-border/20">
                                            {line.num}
                                        </span>
                                        <span className="pl-4 flex-1 whitespace-pre">
                                            {sectionName ? (
                                                <button
                                                    onClick={() => toggleSection(sectionName)}
                                                    className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                                                >
                                                    {isCollapsed ? (
                                                        <ChevronRight size={12} className="text-muted-foreground" />
                                                    ) : (
                                                        <ChevronDown size={12} className="text-muted-foreground" />
                                                    )}
                                                    {indent}
                                                    {line.tokens.map((t, ti) => (
                                                        <Token key={ti} {...t} />
                                                    ))}
                                                    {isCollapsed && (
                                                        <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-sans">
                                                            collapsed
                                                        </span>
                                                    )}
                                                </button>
                                            ) : (
                                                <>
                                                    {indent}
                                                    {line.tokens.map((t, ti) => (
                                                        <Token key={ti} {...t} />
                                                    ))}
                                                </>
                                            )}
                                        </span>
                                    </motion.div>
                                )
                            })}
                        </code>
                    </pre>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-1.5 bg-primary text-primary-foreground text-[11px]">
                    <div className="flex items-center gap-3">
                        <span>TypeScript</span>
                        <span>UTF-8</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span>{lines.length} lines</span>
                        <span>Ln {lines.length}, Col 1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumeCode
