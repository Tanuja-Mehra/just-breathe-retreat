function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#069494]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-3 text-xl font-bold tracking-wide text-white">
          <img src="assets/icons/brand-mark.ico" alt="flowherenow brand mark" className="h-12 w-12 rounded-full object-cover" />
          <span>Flowherenow</span>
        </a>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#location" className="hover:text-brand-teal">Location</a>
          <a href="#highlights" className="hover:text-brand-teal">Highlights</a>
          {/* <a href="#schedule" className="hover:text-brand-teal">Schedule</a> */}
          <a href="#gallery" className="hover:text-brand-teal">Gallery</a>
          <a href="#contact" className="hover:text-brand-teal">Contact</a>
          {/* <a href="#pricing" className="hover:text-brand-teal">Pricing</a> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
