import React from 'react'
import Link from 'next/link'

const NavLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    target: string
    prefetch?: boolean
  }
> = ({ href, target, children, prefetch = false }) => {
  return (
    <Link href={href} prefetch={prefetch}>
      <a
        className='border-transparent border border-dotted hover:border-primary-on hover:bg-black-5 focus:outline-none focus:border-secondary-focus focus:border-dotted active:outline-none active:shadow-none px-2 rounded-tl-xl rounded-br-xl '
        href={href}
        target={target}>
        {children}
      </a>
    </Link>
  )
}
export default NavLink
