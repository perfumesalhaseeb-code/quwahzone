import React from 'react'

export default function Button({ text = "button", onClick, disabled }: { text: string, onClick: () => void, disabled: boolean }) {
    return (
        <button className='p-2 pl-8 pr-8 font-bold bg-[var(--color-orange)] text-white rounded'
            onClick={onClick} disabled={disabled}>{text}</button>
    )
}
