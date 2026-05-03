export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Domain Protection
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Registrars From{' '}
          <span className="text-[#58a6ff]">Stealing Your Domain Ideas</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Some registrars register domains you search for before you can buy them. Domain Hijack Detector monitors availability across registrars and alerts you the moment suspicious registration activity is detected.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Monitoring — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {['Scheduled availability checks', 'Multi-registrar comparison', 'Instant email alerts', 'Hijack timeline reports', 'Unlimited domain watchlist'].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-extrabold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to catch hijackers</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited domains to monitor',
              'Checks every 15 minutes',
              'Compare 10+ major registrars',
              'Instant email + webhook alerts',
              'Hijack evidence reports',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does domain search hijacking work?</h3>
            <p className="text-[#8b949e] text-sm">Some registrars log domain searches and register desirable domains themselves before you complete your purchase, then resell them at inflated prices or through their premium marketplace. Our tool detects this by tracking availability changes immediately after your searches.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which registrars do you monitor?</h3>
            <p className="text-[#8b949e] text-sm">We check availability across 10+ major registrars including GoDaddy, Namecheap, Name.com, Dynadot, and more. By comparing results across registrars simultaneously, we can identify when one registrar registers a domain that others still show as available.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What happens when hijacking is detected?</h3>
            <p className="text-[#8b949e] text-sm">You receive an immediate email alert with a full timeline: when the domain was first searched, when it became unavailable, and which registrar registered it. This evidence can be used to report the registrar to ICANN or dispute the registration.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Domain Hijack Detector. All rights reserved.
      </footer>
    </main>
  )
}
