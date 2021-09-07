import './AboutProject.css'
import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
const AboutProject = () => {
  return (
    <section className="about-project">
      <SectionTitle title="О проекте" />
      <ul className="about-project__container">
        <li className="about-project__element">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__content">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </li>
        <li className="about-project__element">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__content">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__progress-bar">
        <figure className="about-project__progress-bar-area">
          <p className="about-project__progress-bar-section">1 неделя</p>
          <figcaption className="about-project__progress-bar-caption">Back-end</figcaption>
        </figure>
        <figure className="about-project__progress-bar-area about-project__progress-bar-area_front">
          <p className="about-project__progress-bar-section about-project__progress-bar-section_front">
            4 недели
          </p>
          <figcaption className="about-project__progress-bar-caption">Front-end</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default AboutProject
