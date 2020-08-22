import React from 'react'
import Link from 'next/link'

const ButtonLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    target: string
    prefetch?: boolean
  }
> = ({ href, target, children, prefetch = false }) => {
  return (
    <Link href={href} prefetch={prefetch}>
      <a
        className='block w-auto text-lg font-bold text-primary-on hover:text-white-100 bg-transparent hover:bg-primary-hover border-primary-on border hover:border-primary-hover focus:outline-none focus:border-primary-focus focus:border-dotted active:outline-none active:shadow active:text-primary-active rounded-tl-xxl rounded-br-xxl px-6 py-2 mt-4 '
        href={href}
        target={target}>
        {children}
      </a>
    </Link>
  )
}
export default ButtonLink
