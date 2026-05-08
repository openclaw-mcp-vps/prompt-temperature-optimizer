export default function Home() {
  const faqs = [
    {
      q: 'Which LLM providers are supported?',
      a: 'OpenAI GPT-4o, Anthropic Claude, and Mistral are supported out of the box. You bring your own API keys.'
    },
    {
      q: 'How does the optimizer determine the best temperature?',
      a: 'It runs your prompt N times at each temperature step, scores responses for consistency and creativity using semantic similarity, then surfaces the setting that best matches your stated goal.'
    },
    {
      q: 'Can I export the results?',
      a: 'Yes. Every test run exports as JSON or CSV so you can drop the data into your own analytics pipeline.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI Prompt Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find the{' '}
          <span className="text-[#58a6ff]">perfect temperature</span>
          {' '}for every prompt
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing. Run systematic temperature sweeps across your prompts, measure consistency vs creativity, and get a data-backed recommendation in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="inline-block px-7 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start optimizing — $15/mo
          </a>
          <a
            href="#how-it-works"
            className="inline-block px-7 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            See how it works
          </a>
        </div>
        <p className="mt-4 text-xs text-[#484f58]">No credit card required for the first test run.</p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Paste your prompt', desc: 'Enter any prompt and choose a temperature range and step size.' },
            { step: '02', title: 'Run the sweep', desc: 'The optimizer fires your prompt across all temperature values and collects responses.' },
            { step: '03', title: 'Get your recommendation', desc: 'Review consistency scores, creativity metrics, and the optimal setting for your goal.' }
          ].map(({ step, title, desc }) => (
            <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] text-xs font-mono mb-2">{step}</div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold text-white mb-1">$15<span className="text-lg font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to tune prompts like a pro</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited temperature sweeps',
              'OpenAI, Anthropic & Mistral support',
              'Consistency & creativity scoring',
              'JSON / CSV export',
              'Dashboard with run history',
              'Email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Prompt Temperature Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
