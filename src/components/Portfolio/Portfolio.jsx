import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://arsenyukrainsky.github.io/how-to-learn/">
            Статичный сайт
            <p className="portfolio__icon">↗</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://arsenyukrainsky.github.io/russian-travel/">
            Адаптивный сайт
            <p className="portfolio__icon">↗</p>
          </a>
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://mesto.app.nomoredomains.club/">
            Одностраничное приложение
            <p className="portfolio__icon">↗</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio
