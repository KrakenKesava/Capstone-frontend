import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🐳",
      title: "One-click Docker Containerization",
      description: "Automatically containerize any Git repository with zero configuration. Our smart detection handles all the Docker setup for you."
    },
    {
      icon: "⚡",
      title: "Instant Local Deployment",
      description: "Deploy from any Git commit to a live, accessible URL in under 30 seconds. No manual server setup required."
    },
    {
      icon: "🔐",
      title: "Private Network Isolation",
      description: "Each deployment runs in an isolated environment with enterprise-grade security and private networking."
    },
    {
      icon: "📁",
      title: "Multi-version Support",
      description: "Deploy multiple versions simultaneously. Compare features, run A/B tests, or maintain staging environments effortlessly."
    },
    {
      icon: "🔄",
      title: "Auto-sync with Git",
      description: "Automatically deploy new commits, create preview environments for pull requests, and maintain version history."
    },
    {
      icon: "📊",
      title: "Real-time Monitoring",
      description: "Get detailed insights with performance metrics, error tracking, and usage analytics for all your deployments."
    }
  ];

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Features &
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Benefits</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to deploy faster and more reliably, with enterprise-grade features built for modern development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">30s</div>
            <div className="text-gray-400 text-sm">Average Deploy Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-400 text-sm">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
            <div className="text-gray-400 text-sm">Configuration Required</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
