function Footer() {
  const socialLinks = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/flowherenow/',
      icon: '◎',
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/people/Flowherenow/61555636925222/',
      icon: 'f',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@Flowherenow11',
      icon: '▶',
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-10 text-sm text-slate-600 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Just Breathe Retreat. Hosted by Pooja in Naukuchiatal.</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#pricing" className="hover:text-brand-navy">Pricing</a>
          <a href="#faq" className="hover:text-brand-navy">FAQs</a>
          <a href="#contact" className="hover:text-brand-navy">Contact</a>
          <a href="#host" className="hover:text-brand-navy">Host</a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-semibold text-brand-navy transition hover:border-brand-teal hover:text-brand-teal"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
