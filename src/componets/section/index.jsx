
export default function Section({ title, text, imagLink, link }) {
    return (
        <div className="section__projects-box">
        <a href={link} target="_blank" className="project">
          <div className="project__pic">
            <img className="projects__image" src={imagLink} alt="project"/>
          </div>
          <div className="project__box">
            <h3 className="project__title">{title}</h3>
            <p className="project__text">{text}</p>
          </div>
        </a>
      </div>
    )
}