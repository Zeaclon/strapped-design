import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import bullSkull from './assets/bull-skull.svg'

const depop = 'https://www.depop.com/strappedvintage_co/'
const ebay = 'https://www.ebay.com.au/usr/strappedv_39'
const instagram = 'https://www.instagram.com/strappedvintage.co'

function App() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06])
  const skullY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

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
        <motion.img className="hero-skull" src={bullSkull} alt="Detailed bull skull with upturned horns" style={{ y: skullY }} />
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
          <img className="split-skull" src={bullSkull} alt="" aria-hidden="true" />
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
        <div className="poster-type">STRAPPED</div>
        <p>VINTAGE / WESTERN / SECONDHAND</p>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-word">STRAPPED</div>
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
