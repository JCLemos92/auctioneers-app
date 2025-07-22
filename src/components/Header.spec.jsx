import { render, screen } from '@testing-library/react';
import { Header } from './Header'

vi.mock('./../assets/img/logo.svg', () => ({
  default: 'mock-logo.svg',
}));

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the logo image with correct src and alt', () => {
    render(<Header />);
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'mock-logo.svg');
    expect(logo).toHaveClass('w-8', 'h-8');
  });

  it('renders the Auctioneers title', () => {
    render(<Header />);
    const title = screen.getByText('Auctioneers');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H2');
    expect(title).toHaveClass('text-text-primary', 'text-2xl', 'font-bold', 'leading-tight', 'tracking-[-0.015em]');
  });

  it('renders the Home link with correct href and classes', () => {
    render(<Header />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
    expect(homeLink).toHaveClass('text-text-primary', 'text-base', 'font-medium', 'leading-normal', 'hover:text-primary-color', 'transition-colors');
  });

  it('renders the header with correct classes', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('flex', 'items-center', 'justify-between', 'whitespace-nowrap', 'border-b', 'border-solid', 'border-secondary-color', 'px-10', 'py-4', 'shadow-sm');
  });
});