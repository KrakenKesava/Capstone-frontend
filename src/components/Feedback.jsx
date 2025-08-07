import React from 'react';

const Feedback = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Frontend Developer",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "GitDeploy completely transformed our deployment workflow. What used to take hours now takes minutes. The zero-config setup is a game changer!",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "DevOps Engineer",
      company: "CloudScale Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The automatic environment detection saved us countless hours of manual configuration. Our team productivity has increased by 300%.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Full Stack Developer",
      company: "Startup Labs",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "I love how I can deploy directly from my Git commits. The speed and reliability are unmatched. GitDeploy is now essential to our workflow.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "InnovateX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Security and performance were our main concerns. GitDeploy exceeded expectations on both fronts. Enterprise-grade without the complexity.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Product Manager",
      company: "DigitalFlow",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      content: "The real-time monitoring and analytics give us insights we never had before. It's like having a DevOps expert on our team 24/7.",
      rating: 5
    },
    {
      name: "Alex Thompson",
      role: "Software Engineer",
      company: "CodeCraft",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "From prototype to production in under 30 seconds. GitDeploy makes deployment so simple that even our junior developers can handle it confidently.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50k+", label: "Developers Trust Us" },
    { number: "1M+", label: "Successful Deployments" },
    { number: "99.9%", label: "Uptime Guaranteed" },
    { number: "30s", label: "Average Deploy Time" }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Loved by developers
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> worldwide</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their deployment experience with GitDeploy.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=6366f1&color=ffffff&size=48`;
                  }}
                />
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to transform your deployment workflow?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of developers who deploy faster and more reliably with GitDeploy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-600 hover:border-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-purple-500/10">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
