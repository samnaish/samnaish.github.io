import NavigationBar from "./componets/navigation/Index";
import Splash from "./componets/splash/index";
import Projects from "./componets/projects/index";
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
    <Projects/>
    <Footer />

  </body>



  )
}

export default App
