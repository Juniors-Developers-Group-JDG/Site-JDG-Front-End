'use client'
import FooterLogo from '../FooterLogo'
import FooterContainer from '../FooterContainer'
import FooterNavLinks from '../FooterNavLinks'
import FooterSocialLinks from '../FooterSocialLinks'
import FooterCopyright from '../FooterCopyright'
import { SlSocialLinkedin } from 'react-icons/sl'
import { MdWhatsapp, MdOutlineMailOutline } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { whatsappNumber, whatsappText } from '@/utils/constants'
import { HiArrowUp } from 'react-icons/hi'

const Footer = () => {
  const path = usePathname()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer
      id="contact"
      className="bg-gradient-footer relative flex w-full items-center justify-center bg-primary pt-20"
    >
      <FooterContainer>
        <section className="flex w-full flex-wrap items-center justify-between md:items-start">
          <FooterLogo />
          <aside className="md:mt0 mt-10 flex flex-wrap items-start justify-start md:flex-nowrap md:justify-around">
            <FooterNavLinks
              title="Links"
              links={[
                {
                  name: 'Início',
                  href: '/',
                },
                {
                  name: 'Sobre',
                  href: `${path === '/' ? '#about-us' : '/#about-us'}`,
                },
                {
                  name: 'Blog',
                  href: '/blog',
                },
                {
                  name: 'Projetos',
                  href: `${path === '/' ? '#projects' : '/#projects'}`,
                },
              ]}
            />

            <FooterNavLinks
              title="Vagas"
              links={[
                {
                  name: 'Front-End',
                  href: '/vacancies',
                },
                {
                  name: 'Back-End',
                  href: '/vacancies',
                },
                {
                  name: 'Mobile',
                  href: '/vacancies',
                },
                {
                  name: 'UX/UI',
                  href: '/vacancies',
                },
              ]}
            />

            <FooterNavLinks
              title="Empresa"
              links={[
                {
                  name: 'Privacidade',
                  href: '#',
                },
                {
                  name: 'Termos e condições de uso',
                  href: '#',
                },
                {
                  name: 'Direitos reservados',
                  href: '#',
                },
              ]}
            />
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
        <span
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-12 right-6 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-400 p-2 hover:opacity-50"
        >
          <HiArrowUp size={20} />
        </span>
      </FooterContainer>
    </footer>
  )
}

export default Footer
