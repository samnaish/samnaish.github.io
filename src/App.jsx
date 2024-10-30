import NavigationBar from "./componets/navigation/Index";
import Splash from "./componets/splash/index";
import Section from "./componets/section/index";
import Footer from "./componets/footer/index";
import "./index.css"

import './App.css'

function App() {
          
  return (

  <body>
    <NavigationBar />
    <Splash
    title="Sam Naish"
    subtitle="Junior Web Developer"
    heading="About Me"
    content= "I work in a secondary school as a LSA, which is a type of teaching assistant, but with younger poeple with learning difficulties. I thounght it would be cool to improve my web development skills."
    />
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
        <Section 
        title= "Login Page" 
        link="https://codepen.io/samnaish/pen/dKqZMx" 
        imagLink="https://snag.gy/jac5mv.jpg"
        text="I thought it would be useful to create a sample login page, so that other developers could save time and effort"
        />
        <Section 
        title= "Webpage Design" 
        link="https://codepen.io/samnaish/pen/yxYebG?editors=1100" 
        imagLink="https://snag.gy/hIAxsj.jpg"
        text="I thought this would be useful for a page mainly for articles or even blogs."
        />
        <Section 
        title= "JavaScript Calculator" 
        link="https://codepen.io/samnaish/pen/MMKVzv" 
        imagLink="https://snag.gy/S9Fbe1.jpg"
        text="Though this project was a challenging one. I felt that is was still benefical to have a go at."
        />
      </div>

      <a href="https://codepen.io/samnaish/" className="section__show-all" target="_blank">Show all</a>
    </section>
    <Footer />

  </body>



  )
}

export default App
