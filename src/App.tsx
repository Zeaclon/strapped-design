import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const depop = 'https://www.depop.com/strappedvintage_co/'
const ebay = 'https://www.ebay.com.au/usr/strappedv_39'
const instagram = 'https://www.instagram.com/strappedvintage.co'

function SkullMark({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? 'skull skull--small' : 'skull'} viewBox="0 0 260 220" aria-hidden="true">
      {/* Proper longhorn/bull skull silhouette: heavy black stencil with tall upturned horns. */}
      <path
        className="skull-fill"
        d="M130 48C105 48 82 58 70 76C58 94 59 120 69 137C78 151 91 160 105 166L103 199H121L126 178H134L139 199H157L155 166C169 160 182 151 191 137C201 120 202 94 190 76C178 58 155 48 130 48Z"
      />
      <path
        className="skull-horns"
        d="M77 104C54 101 35 88 28 67C22 49 25 27 39 12C32 32 35 48 46 58C55 66 67 68 82 65M183 104C206 101 225 88 232 67C238 49 235 27 221 12C228 32 225 48 214 58C205 66 193 68 178 65"
      />
      <path className="skull-cut" d="M87 94C99 82 114 83 125 95L116 119C103 124 91 120 85 110Z" />
      <path className="skull-cut" d="M173 94C161 82 146 83 135 95L144 119C157 124 169 120 175 110Z" />
      <path className="skull-cut" d="M117 128L130 113L143 128L139 158H121Z" />
      <path className="skull-cut" d="M103 151L112 145L116 166L106 174Z" />
      <path className="skull-cut" d="M157 151L148 145L144 166L154 174Z" />
      <path className="skull-line" d="M93 78C105 69 116 66 130 66C144 66 155 69 167 78M99 137C108 145 119 149 130 149C141 149 152 145 161 137" />
    </svg>
  )
}

function App() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const skullY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])

  return (
    <main>
      <nav className="nav">
        <a href="#top" className="wordmark">STRAPPED</a>
        <div className="nav-links">
          <a href="#collection">Collection</a>
          <a href="#story">About</a>
          <a href={instagram} target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <a className="nav-shop" href={depop} target="_blank" rel="noreferrer">Shop the racks ↗</a>
      </nav>

      <section ref={heroRef} id="top" className="hero">
        <motion.div className="hero-photo" style={{ y: heroY, scale: heroScale }} />
        <div className="hero-wash" />
        <motion.div className="hero-skull" style={{ y: skullY }}><SkullMark /></motion.div>
        <div className="hero-copy">
          <p className="eyebrow">VINTAGE CLOTHING · COWBOY BOOTS · WESTERN WEAR</p>
          <h1><span>STRAPPED</span><em>VINTAGE</em></h1>
          <p className="hero-intro">Old pieces. Hard wear. Good stories.</p>
        </div>
        <div className="hero-bottom">
          <span>WESTERN GOODS / CURATED SECONDHAND</span>
          <span>SCROLL TO RIDE ↓</span>
        </div>
      </section>

      <section className="ticker" aria-label="Strapped categories">
        <div>VINTAGE CLOTHING</div><span>✦</span><div>COWBOY BOOTS</div><span>✦</span><div>WESTERN WEAR</div><span>✦</span><div>OLD SOUL / NEW OWNER</div><span>✦</span>
      </section>

      <section id="story" className="manifesto section">
        <div className="section-label">01 / THE STABLE</div>
        <div className="manifesto-grid">
          <div>
            <p className="display">WESTERN<br /><i>WITH HISTORY.</i></p>
          </div>
          <div className="manifesto-copy">
            <p>Strapped is a vintage clothing and western wear concept built around the pieces that still have something to say.</p>
            <p>Think worn denim, cowboy boots, old leather, western shirts and the odd treasure that deserves another life.</p>
            <a className="text-link" href={instagram} target="_blank" rel="noreferrer">Follow the archive on Instagram ↗</a>
          </div>
        </div>
      </section>

      <section id="collection" className="collection section">
        <div className="section-heading">
          <div className="section-label">02 / THE COLLECTION</div>
          <p>Selected pieces are listed online as they come through the racks.</p>
        </div>
        <div className="collection-grid">
          <article className="collection-card card-boot">
            <div className="card-image image-boot" />
            <div className="card-meta"><span>01</span><strong>BOOT ROOM</strong><span>WESTERN</span></div>
          </article>
          <article className="collection-card card-denim">
            <div className="card-image image-denim" />
            <div className="card-meta"><span>02</span><strong>DENIM &amp; LEATHER</strong><span>EVERYDAY</span></div>
          </article>
          <article className="collection-card card-shirt">
            <div className="card-image image-shirt" />
            <div className="card-meta"><span>03</span><strong>WESTERN SHIRTS</strong><span>ARCHIVE</span></div>
          </article>
        </div>
      </section>

      <section className="split-story">
        <div className="split-photo" />
        <div className="split-copy">
          <div className="section-label">03 / FIND YOURS</div>
          <h2>THE RACK<br /><i>IS MOVING.</i></h2>
          <p>New finds don't wait around. Browse the current selection online, or follow along for the next drop and market appearance.</p>
          <div className="actions">
            <a className="button button-dark" href={depop} target="_blank" rel="noreferrer">Shop Depop ↗</a>
            <a className="button button-outline" href={ebay} target="_blank" rel="noreferrer">Shop eBay ↗</a>
          </div>
        </div>
      </section>

      <section className="poster section">
        <motion.div
          className="poster-skull"
          animate={{ rotate: [0, 1, -1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        ><SkullMark /></motion.div>
        <div className="poster-type">STRAPPED</div>
        <p>VINTAGE / WESTERN / SECONDHAND</p>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div>
            <SkullMark small />
            <div className="footer-word">STRAPPED</div>
          </div>
          <div className="footer-links">
            <a href={depop} target="_blank" rel="noreferrer">Depop ↗</a>
            <a href={ebay} target="_blank" rel="noreferrer">eBay ↗</a>
            <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
          </div>
        </div>
        <div className="footer-bottom"><span>VINTAGE CLOTHING / COWBOY BOOTS / WESTERN WEAR</span><span>STRAPPED © 2026</span></div>
      </footer>
    </main>
  )
}

export default App
