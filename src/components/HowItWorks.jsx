import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Paste Git Commit",
      description: "Simply paste your Git repository URL or specific commit hash into our platform.",
      icon: "📋",
      visual: (
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <div className="text-green-400 text-sm font-mono mb-2">$ git clone https://github.com/user/repo</div>
          <div className="text-gray-400 text-sm font-mono">Cloning into 'repo'...</div>
          <div className="text-blue-400 text-sm font-mono">✓ Repository cloned successfully</div>
        </div>
      )
    },
    {
      step: "02",
      title: "Auto Docker Setup",
      description: "Our smart detection analyzes your code and automatically generates optimized Docker configuration.",
      icon: "🐳",
      visual: (
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <div className="text-purple-400 text-sm font-mono mb-2">🔍 Detecting framework...</div>
          <div className="text-yellow-400 text-sm font-mono mb-1">📦 React.js detected</div>
          <div className="text-green-400 text-sm font-mono mb-1">🐳 Generating Dockerfile...</div>
          <div className="text-blue-400 text-sm font-mono">✅ Docker setup complete</div>
        </div>
      )
    },
    {
      step: "03",
      title: "Instant Deployment",
      description: "Your app is containerized, built, and deployed to a live URL in under 30 seconds.",
      icon: "🚀",
      visual: (
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
          <div className="text-orange-400 text-sm font-mono mb-2">🏗️ Building container...</div>
          <div className="text-yellow-400 text-sm font-mono mb-1">📤 Deploying to edge...</div>
          <div className="text-green-400 text-sm font-mono mb-1">🌐 Live at: app-xyz.gitdeploy.com</div>
          <div className="text-blue-400 text-sm font-mono">⚡ Deployed in 28s</div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From Git commit to live deployment in three simple steps. No configuration, no complexity.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="text-5xl mr-4">{step.icon}</div>
                    <div>
                      <div className="text-purple-400 font-bold text-lg mb-1">Step {step.step}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {step.description}
                  </p>
                  
                  {/* Additional info for each step */}
                  {index === 0 && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-white font-semibold mb-2">✅ Supported Sources:</div>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>• GitHub, GitLab, Bitbucket repositories</div>
                        <div>• Direct Git URLs (HTTP/SSH)</div>
                        <div>• Specific commits, branches, or tags</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-white font-semibold mb-2">🔧 Auto-detected Frameworks:</div>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>• React, Vue, Angular, Svelte</div>
                        <div>• Node.js, Python, Ruby, Go</div>
                        <div>• Static sites (HTML/CSS/JS)</div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                      <div className="text-white font-semibold mb-2">🌟 Deployment Features:</div>
                      <div className="text-sm text-gray-400 space-y-1">
                        <div>• Global CDN with 99.9% uptime</div>
                        <div>• Auto SSL certificates</div>
                        <div>• Custom domains support</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
                    
                    {/* Main visual container */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700">
                      {step.visual}
                      
                      {/* Progress indicator */}
                      <div className="mt-4 flex items-center">
                        <div className="flex-1 bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${((index + 1) / steps.length) * 100}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-gray-400 text-sm">
                          {index === 0 && "Initializing..."}
                          {index === 1 && "Processing..."}
                          {index === 2 && "Complete!"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector arrow (except for last step) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="text-purple-400 text-2xl animate-bounce">
                    ↓
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to deploy in 30 seconds?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of developers who have simplified their deployment workflow.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Try GitDeploy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
