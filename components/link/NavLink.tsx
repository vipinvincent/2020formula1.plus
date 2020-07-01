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
      <a className=' ' href={href} target={target}>
        {children}
      </a>
    </Link>
  )
}
export default NavLink
