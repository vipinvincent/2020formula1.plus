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
        className='border-transparent border border-dotted hover:border-primary-on text-primary-on hover:text-primary-hover hover:bg-black-5 focus:outline-none focus:border-secondary-focus focus:border-dotted active:outline-none active:-none px-2 rounded-md '
        href={href}
        target={target}>
        {children}
      </a>
    </Link>
  )
}
export default NavLink
