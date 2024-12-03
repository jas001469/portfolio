import { ButtonPrimary } from "./Button";


const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Skills',
    href: '#skill'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/jas001469'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jas-singh-ajmani'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/jas001469'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/js.ajmani'
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/jas001469/'
  }
];


const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] ">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href="mailto:jas001469@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes=""
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 ">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          {/* <a
            href="/"
            className="logo"
          >
            <img
              src="/images/picwithoutbg.png"
              width={40}
              height={40}
              alt="Logo"
            />
          </a> */}
            
          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">Jas Singh Ajmani.</span> All rights reserved 
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer