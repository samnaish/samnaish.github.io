import { NavigationBar } from "./components/navigation";
import { Splash } from "./components/splash";
import { Projects } from "./components/projects";
// import Footer from "./componets/footer/index";

function App() {

  return (
    <main className="w-full min-h-screen bg-slate-50">
      <div className="fixed h-screen w-16 md:w-28">
        <NavigationBar />
      </div>
      <div className="ml-16 md:ml-28 ">
        <Splash />
        <Projects />
      </div>
      {/* <Footer /> */}
    </main>
  )
}


export default App
