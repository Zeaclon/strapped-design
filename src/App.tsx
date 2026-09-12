import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const depop = 'https://www.depop.com/strappedvintage_co/'
const ebay = 'https://www.ebay.com.au/usr/strappedv_39'
const instagram = 'https://www.instagram.com/strappedvintage.co'

function SkullMark({ small = false }: { small?: boolean }) {
  return (
    <svg className={small ? 'skull skull--small' : 'skull'} viewBox="0 0 320 260" aria-hidden="true">
      {/* Anatomical longhorn bull skull: symmetrical, elongated, upturned horns, stark stencil treatment. */}
      <g className="skull-art">
        <path className="skull-horns" d="M91 125C65 124 39 116 24 97C10 79 8 53 17 29C21 18 28 9 38 2C30 17 30 33 38 46C49 63 66 70 99 67M229 125C255 124 281 116 296 97C310 79 312 53 303 29C299 18 292 9 282 2C290 17 290 33 282 46C271 63 254 70 221 67" />
        <path className="skull-fill" d="M160 49C128 49 102 61 89 82C76 102 78 132 89 151C98 166 111 176 127 184L123 228L143 228L150 199H170L177 228H197L193 184C209 176 222 166 231 151C242 132 244 102 231 82C218 61 192 49 160 49Z" />
        <path className="skull-cut" d="M111 96C123 82 143 79 155 94L146 126C132 131 118 126 109 114Z" />
        <path className="skull-cut" d="M209 96C197 82 177 79 165 94L174 126C188 131 202 126 211 114Z" />
        <path className="skull-cut" d="M147 136L160 120L173 136L168 174H152Z" />
        <path className="skull-cut" d="M126 166L141 158L146 191L129 199Z" />
        <path className="skull-cut" d="M194 166L179 158L174 191L191 199Z" />
        <path className="skull-line" d="M103 78C121 64 139 60 160 60C181 60 199 64 217 78M116 143C128 154 143 160 160 160C177 160 192 154 204 143M136 184L133 214M184 184L187 214" />
      </g>
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
