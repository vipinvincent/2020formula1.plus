import React from 'react'
import Link from 'next/link'

const TopNav: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    target: string
    prefetch?: boolean
  }
> = ({ href, target, children, prefetch = false }) => {
  return (
    <Link href={href} prefetch={prefetch}>
      <a
        className='text-lg font-light text-primary-on hover:text-primary-hover border-transparent border-b border-dotted hover:border-primary-hover focus:outline-none focus:border-primary-focus focus:border-dotted active:outline-none active:shadow-none active:text-primary-active '
        href={href}
        target={target}>
        {children}
      </a>
    </Link>
  )
}
export default TopNav
