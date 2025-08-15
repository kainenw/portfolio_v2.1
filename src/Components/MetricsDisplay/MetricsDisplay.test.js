import { render, screen } from '@testing-library/react';
import MetricsDisplay from './MetricsDisplay';

const mockMetrics = [
  {
    value: 35,
    type: 'percentage',
    label: 'Conversion Rate Increase',
    description: 'Improved user flow and CTA placement',
    icon: 'increase'
  },
  {
    value: 2500,
    type: 'number',
    label: 'New Users',
    description: 'Monthly active users gained',
    icon: 'users'
  },
  {
    value: 98,
    type: 'percentage',
    label: 'User Satisfaction',
    description: 'Based on usability testing',
    icon: 'target'
  }
];

describe('MetricsDisplay', () => {
  it('renders metrics correctly', () => {
    render(<MetricsDisplay metrics={mockMetrics} />);
    
    expect(screen.getByText('+35%')).toBeInTheDocument();
    expect(screen.getByText('Conversion Rate Increase')).toBeInTheDocument();
    expect(screen.getByText('2,500')).toBeInTheDocument();
    expect(screen.getByText('New Users')).toBeInTheDocument();
    expect(screen.getByText('+98%')).toBeInTheDocument();
    expect(screen.getByText('User Satisfaction')).toBeInTheDocument();
  });

  it('renders with horizontal layout by default', () => {
    const { container } = render(<MetricsDisplay metrics={mockMetrics} />);
    
    const metricsDisplay = container.querySelector('.metrics-display');
    expect(metricsDisplay).toHaveClass('horizontal');
  });

  it('renders with vertical layout when specified', () => {
    const { container } = render(<MetricsDisplay metrics={mockMetrics} layout="vertical" />);
    
    const metricsDisplay = container.querySelector('.metrics-display');
    expect(metricsDisplay).toHaveClass('vertical');
  });

  it('renders with grid layout when specified', () => {
    const { container } = render(<MetricsDisplay metrics={mockMetrics} layout="grid" />);
    
    const metricsDisplay = container.querySelector('.metrics-display');
    expect(metricsDisplay).toHaveClass('grid');
  });

  it('applies variant class when specified', () => {
    const { container } = render(<MetricsDisplay metrics={mockMetrics} variant="highlight" />);
    
    const metricsDisplay = container.querySelector('.metrics-display');
    expect(metricsDisplay).toHaveClass('highlight');
  });

  it('formats currency values correctly', () => {
    const currencyMetrics = [
      {
        value: 50000,
        type: 'currency',
        label: 'Revenue Generated',
        icon: 'award'
      }
    ];
    
    render(<MetricsDisplay metrics={currencyMetrics} />);
    expect(screen.getByText('$50,000')).toBeInTheDocument();
  });

  it('handles missing or invalid metrics gracefully', () => {
    const { container } = render(<MetricsDisplay metrics={null} />);
    expect(container.firstChild).toBeNull();
    
    const { container: container2 } = render(<MetricsDisplay metrics={[]} />);
    expect(container2.querySelector('.metrics-display')).toBeInTheDocument();
  });

  it('renders descriptions when provided', () => {
    render(<MetricsDisplay metrics={mockMetrics} />);
    
    expect(screen.getByText('Improved user flow and CTA placement')).toBeInTheDocument();
    expect(screen.getByText('Monthly active users gained')).toBeInTheDocument();
    expect(screen.getByText('Based on usability testing')).toBeInTheDocument();
  });

  it('renders icons for each metric', () => {
    const { container } = render(<MetricsDisplay metrics={mockMetrics} />);
    
    const icons = container.querySelectorAll('.metric-icon svg');
    expect(icons).toHaveLength(3);
  });
});
