export default function Splash({title, subtitle, heading, content}) {
    return (
    <>
    <main id="splash" className="section section--splash">
      <h1 className="section__title">{title}</h1>
      <h2 className="section__subtitle">{subtitle}</h2>
    </main>
    <section className="section" id="about">
      <h2 className="section__heading">{heading}</h2>
      <p className="section__content">{content}</p>
    </section>
    </>
    
    )
}