import NavigationBar from "./componets/navigation/Index";
import Section from "./componets/section/index";
import "./index.css"

import './App.css'

function App() {
          
  return (

  <body>
    <NavigationBar />
    <main id="splash" className="section section--splash">
      <h1 className="section__title">Sam Naish</h1>
      <h2 className="section__subtitle">Junior Web Developer</h2>
    </main>
    <section className="section" id="about">
      <h2 className="section__heading">About Me</h2>
      <p className="section__content">I work in a secondary school as a LSA, which is a type of teaching assistant, but with younger poeple with learning difficulties. I thounght it would be cool to improve my web development skills.</p>
    </section>
    <section className="section section--lighter" id="projects">
      <h2 className="section__heading">What I've been up to:</h2>
      <p className="section__content">These are some of my projects...</p>
      <div className="section__projects">
        <Section 
        title= "Tribute Page" 
        link="https://codepen.io/samnaish/pen/bQPpyJ?editors=1100" 
        imagLink="https://i.kinja-img.com/gawker-media/image/upload/bgmeeufntw5hjah5ofhs.jpg"
        text="Ever since I heard about what happened to our lord and Savior Stan Lee (Ex-CEO of Marvel studios). I thought it would be nice to create a tribute page as any Marvel fan should."
        />
        <div className="section__projects-box">
          <a href="https://codepen.io/samnaish/pen/dKqZMx" target="_blank" className="project project--invert">
            <div className="project__pic">
              <img className="projects__image" src="https://snag.gy/jac5mv.jpg" alt="project" />
            </div>
            <div className="project__box">
              <h3 className="project__title">Login Page</h3>
              <p className="project__text"> I thought it would be useful to create a sample login page, so that other developers could save time and effort.</p>
            </div>
          </a>
        </div>

        <div className="section__projects-box">
          <a href="https://codepen.io/samnaish/pen/yxYebG?editors=1100" target="_blank" className="project">
            <div className="project__pic">
              <img className="projects__image" src="https://snag.gy/hIAxsj.jpg" alt="project"/>
            </div>
            <div className="project__box">
              <h3 className="project__title">Webpage Design</h3>
              <p className="project__text">I thought this would be useful for a page mainly for articles or even blogs.</p>
            </div>
          </a>
        </div>

        <div className="section__projects-box">
          <a href="https://codepen.io/samnaish/pen/MMKVzv" target="_blank" className="project project--invert">
            <div className="project__pic">
              <img className="projects__image" src="https://snag.gy/S9Fbe1.jpg" alt="project"/>
            </div>
            <div className="project__box">
              <h3 className="project__title">JavaScript Calculator</h3>
              <p className="project__text">Though this project was a challenging one. I felt that is was still benefical to have a go at.</p>
            </div>
          </a>
        </div>
      </div>

      <a href="https://codepen.io/samnaish/" className="section__show-all" target="_blank">Show all</a>
    </section>
    <section className="section" id="profiles">
      <h2 className="section__heading">My Profiles</h2>
      <p className="section__content">
        <ul className="section__contacts">
          <li><a href="https://github.com/samnaish" target="_blank" className="section__contact-detail">GitHub</a></li>
          <li><a href="https://codepen.io/samnaish/" target="_blank" className="section__contact-detail">Codepen</a></li>
        </ul>
      </p>
    </section>

  </body>



  )
}

export default App
