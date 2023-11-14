'use client'

import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../Navbar'
import logo from '@/assets/jdg.png'
import WhatsappIcon from '@/assets/whatsapp.svg'
import NavbarMobile from '../NavbarMobile'
import { useToggle } from '@/hooks/useToggle'

import { whatsappNumber, whatsappText } from '@/utils/constants'

const Header = () => {
  const { modal, openModal, closeModal } = useToggle()

  return (
    <header className="container fixed z-50 flex h-20 w-full items-center justify-between bg-primary transition-all">
      <Link href="/" className="flex" data-testid="logo-link">
        <figure className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary">
          <Image
            src={logo}
            alt="logo"
            className="h-full w-full object-cover p-1"
          />
        </figure>
      </Link>

      <Navbar openModal={openModal} />
      <NavbarMobile modal={modal} closeModal={closeModal} />

      <Link
        target="_blank"
        aria-label="Chat on WhatsApp"
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
        className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#1BD741] md:flex"
      >
        <Image
          src={WhatsappIcon}
          alt="Chat on Whatsapp"
          width={32}
          height={32}
        />
      </Link>
    </header>
  )
}

export default Header
