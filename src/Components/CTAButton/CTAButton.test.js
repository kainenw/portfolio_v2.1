import { render, screen, fireEvent } from '@testing-library/react';
import CTAButton from './CTAButton';

describe('CTAButton', () => {
  test('renders as a button with default props', () => {
    render(<CTAButton>Test Button</CTAButton>);
    
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('cta-button', 'cta-primary', 'cta-medium');
  });

  test('renders as a link when href is provided', () => {
    render(<CTAButton href="/test">Test Link</CTAButton>);
    
    const link = screen.getByRole('link', { name: /test link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
    expect(link).toHaveClass('cta-button', 'cta-primary', 'cta-medium');
  });

  test('applies variant classes correctly', () => {
    render(<CTAButton variant="secondary">Secondary Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('cta-secondary');
  });

  test('applies size classes correctly', () => {
    render(<CTAButton size="large">Large Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('cta-large');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<CTAButton onClick={handleClick}>Click Me</CTAButton>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(<CTAButton className="custom-class">Custom Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  test('handles disabled state', () => {
    render(<CTAButton disabled>Disabled Button</CTAButton>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('passes through additional props', () => {
    render(<CTAButton data-testid="test-button">Test Button</CTAButton>);
    
    const button = screen.getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });
});
