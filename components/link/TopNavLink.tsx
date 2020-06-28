import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const TopNavLink: React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    prefetch?: boolean
  }
> = ({ href = '/', className, children, prefetch = false }) => {
  const router = useRouter()

  let style =
    'flex flex-col items-center text-center appearance-none my-1 py-1 px-2 mr-4 font-hairline text-gray-500 hover:text-secondary-on border-transparent border border-dotted focus:outline-none focus:border-secondary-focus focus:border-dotted active:outline-none active:shadow-none active:text-secondary-active grow ' +
    (className || '')
  if (router.pathname === href) {
    style = `${style} text-secondary-active font-medium`
  }

  return (
    <Link href={href} prefetch={prefetch}>
      <a className={style} href={href} tabIndex={0}>
        {children}
      </a>
    </Link>
  )
}
export default TopNavLink
