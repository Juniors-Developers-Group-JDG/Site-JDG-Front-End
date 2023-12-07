import { Bars3Icon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import RouterLinks from '../RouterLinks'
import { NavbarTypeProps } from './types'

const Navbar = ({ openModal }: NavbarTypeProps) => {
  const path = usePathname()

  const menuItems = [
    { href: '/', text: 'Início' },
    { href: path === '/' ? '#about-us' : '/#about-us', text: 'Sobre' },
    { href: '/opportunities', text: 'Vagas' },
    { href: '/blog', text: 'Blog' },
    { href: path === '/' ? '#projects' : '/#projects', text: 'Projetos' },
  ]

  return (
    <nav className="flex items-center justify-between">
      <ul className="hidden md:flex md:items-center md:justify-between">
        {menuItems.map((item, index) => (
          <li key={index} className="m-2 p-2">
            <RouterLinks href={item.href} text={item.text} />
          </li>
        ))}
      </ul>

      <Bars3Icon
        data-testid="svg-close-modal"
        className="h-6 w-6 cursor-pointer text-white md:hidden"
        onClick={openModal}
      />
    </nav>
  )
}

export default Navbar
