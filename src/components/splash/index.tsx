import { Section } from "../section";


const Splash = () => {
  return (
    <Section id="top" className="bg-emerald-500">
      <main className="relative p-6 md:p-16 h-screen grid place-content-center ">
        <div className="container">
          <div>
            <button className="absolute top-8 right-8 md:top-16 md:right-16 bg-stone-900 text-white py-2 px-4 rounded hover:bg-stone-800 transition" onClick={() => {
              alert("Coming Soon");
            }}>
              My CV
            </button>
          </div>
          <h1 className="text-8xl">Sam Naish</h1>
          <h2 className="text-4xl">Junior Web Developer</h2>
          <p className="max-w-96 py-8">
            I'm a London based junior developer. I am currently working in a special needs school as a Support Assistant but I am open to opportunities.
          </p>
          <a
            className="inline-block bg-stone-900 text-white py-2 px-4 rounded hover:bg-stone-800 transition"
            href="mailto:sam.naish92@gmail.com">Contact Me</a>
        </div>
      </main>
    </Section>
  )
}

export { Splash };
