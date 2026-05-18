import { useQuery } from '@tanstack/react-query';

// Mock API call
const fetchPricingPlans = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return [
    {
      id: 'basic',
      name: 'Starter',
      price: '$49',
      features: ['Up to 1,000 contacts', 'Basic automation', 'Email support'],
      recommended: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '$149',
      features: ['Up to 10,000 contacts', 'Advanced workflows', 'Priority support', 'Loan CRM module'],
      recommended: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      features: ['Unlimited contacts', 'Custom integrations', 'Dedicated manager', 'SLA'],
      recommended: false
    }
  ];
};

export const usePricing = () => {
  return useQuery({
    queryKey: ['pricing'],
    queryFn: fetchPricingPlans,
  });
};
