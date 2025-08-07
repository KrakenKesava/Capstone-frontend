import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Hobby",
      price: "Free",
      period: "forever",
      description: "Perfect for personal projects and learning",
      features: [
        "3 deployments per month",
        "1GB bandwidth",
        "Community support",
        "Basic analytics",
        "SSL certificates"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "For professional developers and small teams",
      features: [
        "Unlimited deployments",
        "100GB bandwidth",
        "Priority support",
        "Advanced analytics",
        "Custom domains",
        "Environment variables",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For large teams with advanced requirements",
      features: [
        "Everything in Pro",
        "Unlimited bandwidth",
        "24/7 phone support",
        "SLA guarantee",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-purple-900/20 to-gray-900 border-purple-500 scale-105'
                  : 'bg-gray-900 border-gray-700 hover:border-gray-600'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            All plans include 14-day free trial. No credit card required.
          </p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <span>💳 No setup fees</span>
            <span>📞 Cancel anytime</span>
            <span>🔒 SOC 2 compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
