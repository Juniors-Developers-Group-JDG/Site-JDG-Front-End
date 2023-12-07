'use client'
import { MdOutlineMailOutline, MdWhatsapp } from 'react-icons/md'
import { SlSocialLinkedin } from 'react-icons/sl'
import FooterContainer from '../FooterContainer'
import FooterCopyright from '../FooterCopyright'
import FooterLogo from '../FooterLogo'
import FooterNavLinks from '../FooterNavLinks'
import FooterSocialLinks from '../FooterSocialLinks'

import { whatsappNumber, whatsappText } from '@/utils/constants'
import { useEffect, useState } from 'react'
import { HiArrowUp } from 'react-icons/hi'
import { links, opportunities, terms } from './constants'

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100
      setShowScrollToTop(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer
      id="contact"
      className="bg-gradient-footer relative flex w-full items-center justify-center bg-primary pt-20"
    >
      <FooterContainer>
        <section className="flex w-full flex-wrap items-center justify-between md:items-start">
          <FooterLogo />
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <FooterNavLinks title="Links" links={links} />

            <FooterNavLinks title="Vagas" links={opportunities} />

            <FooterNavLinks title="Empresa" links={terms} />
          </aside>
        </section>
        <FooterSocialLinks
          socialMedia={[
            {
              social_name: '+55 (11) 94700-7927',
              href: `https://wa.me/${whatsappNumber}?text=${whatsappText}`,
              icon: MdWhatsapp,
            },
            {
              social_name: 'emailaddress@mail.com',
              href: '#',
              icon: MdOutlineMailOutline,
            },
            {
              social_name: 'linkedin.com/company/juniors-developers-group/',
              href: 'https://www.linkedin.com/company/juniors-developers-group/mycompany/',
              icon: SlSocialLinkedin,
            },
          ]}
        />
        <FooterCopyright />
        {showScrollToTop && (
          <span
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-12 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-400 p-2 hover:opacity-50"
          >
            <HiArrowUp size={20} />
          </span>
        )}
      </FooterContainer>
    </footer>
  )
}

export default Footer
