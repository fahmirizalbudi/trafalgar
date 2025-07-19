import type React from "react"

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    type?: 'button' | 'submit' | 'reset',
    className?: string
    variant?: 'normal' | 'outline'
}

const Button = (buttonProps: ButtonProps) => {
    const classes = [
        buttonProps.className,
        'button',
        buttonProps.variant === 'outline' && 'button--outline'
    ].filter(Boolean).join(' ')

    return (
        <button className={classes} onClick={buttonProps.onClick} type={buttonProps.type || 'button'}>{buttonProps.children}</button>
    )
}

export default Button