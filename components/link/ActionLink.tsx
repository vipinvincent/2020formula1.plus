import React from 'react'
import Link from 'next/link'

const ActionLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    target: string
    prefetch?: boolean
  }
> = ({ href, target, children, prefetch = false }) => {
  return (
    <Link href={href} prefetch={prefetch}>
      <a
        className='text-3xl font-black leading-tight text-primary-on hover:text-primary-hover border-transparent border-b border-dotted hover:border-primary-hover focus:outline-none focus:border-primary-focus focus:border-dotted active:outline-none active:-none active:text-primary-active '
        href={href}
        target={target}>
        {children}
      </a>
    </Link>
  )
}
export default ActionLink
