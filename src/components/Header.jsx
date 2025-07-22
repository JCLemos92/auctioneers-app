import logo from '../assets/img/logo.svg';

export const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-secondary-color px-10 py-4 shadow-sm">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-3 text-text-primary">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h2 className="text-text-primary text-2xl font-bold leading-tight tracking-[-0.015em]">
            Auctioneers
          </h2>
        </div>
        <nav className="flex items-center gap-8">
          <a
            className="text-text-primary text-base font-medium leading-normal hover:text-primary-color transition-colors"
            href="/"
          >
            Home
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
