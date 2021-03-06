import Link from 'next/link'

type Props = {
  children: JSX.Element | string
  className?: string
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export const Button = ({ children, onClick, className, href, target, rel }: Props) => {
  const classNames =
    'inline-flex items-center justify-center py-3 pl-5 pr-6 mx-auto transition duration-300 bg-teal-500 rounded-md hover:fill-zinc-800 fill-white group text-zinc-900 hover:bg-white ' +
    className

  const link =
    href?.substring(0, 1) === '/' ? (
      <Link href={href} passHref>
        <a className={classNames} href={href}>
          {children}
        </a>
      </Link>
    ) : (
      <a className={classNames} href={href} target={target} rel={rel} onClick={onClick}>
        {children}
      </a>
    )
  const button = (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  )

  return href ? link : button
}
