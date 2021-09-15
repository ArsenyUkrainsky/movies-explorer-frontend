import SectionTitle from '../SectionTitle/SectionTitle'
import './AboutMe.css'
import myPhoto from '../../images/photo.jpg'

const AboutMe = () => {
  return (
    <section className="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__container">
        <div className="about-me__content">
          <h3 className="about-me__subtitle">Арсений</h3>
          <p className="about-me__text">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__info">Я начинающий Фронтенд-разработчик</p>
          <ul className="about-me__links">
            <li className="about-me__list">
              <a className="about-me__link" target="_blank" href="https://t.me/uArseny" rel="noreferrer">
                Telegram
              </a>
            </li>
            <li className="about-me__list">
              <a
                className="about-me__link"
                target="_blank"
                href="https://github.com/ArsenyUkrainsky"
                rel="noreferrer">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" src={myPhoto} alt="me" />
      </div>
    </section>
  )
}
export default AboutMe
