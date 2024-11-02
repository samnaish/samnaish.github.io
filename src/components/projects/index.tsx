import { Project } from "../Project";
import { Section } from "../section";
import { TitleComponent } from "../Title";

const Projects = () => {
    return (
        <Section id="projects" className="p-16 bg-stone-50">
            <TitleComponent title="Projects" />
            <p className="mb-6">These are some of my projects...</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Project
                    title="Portfolio"
                    description="Built using react and tailwindcss. Deployed to Github Pages."
                    image="/images/portfolio.png"
                    link="https://github.com/samnaish/samnaish.github.io"
                />
                <Project
                    title="Tribute Page"
                    description="HTML and CSS project for freecodecamp. A Stan Lee (Ex-CEO of Marvel studios) tribute page."
                    image="https://i.kinja-img.com/gawker-media/image/upload/bgmeeufntw5hjah5ofhs.jpg"
                    link="https://codepen.io/samnaish/pen/bQPpyJ?editors=1100"
                />
                <Project
                    title="Login Page"
                    description="HTML and CSS"
                    image="/images/login.png"
                    link="https://codepen.io/samnaish/pen/dKqZMx"
                />
                <Project
                    title="Blog Template"
                    description="HTML and CSS"
                    image="/images/blog.png"
                    link="https://codepen.io/samnaish/pen/yxYebG?editors=1100"
                />
                <Project
                    title="JS Calculator"
                    description="HTML, CSS, and JS"
                    image="/images/calc.png"
                    link="https://codepen.io/samnaish/pen/MMKVzv"
                />
            </div>
        </Section>
    )
}

export { Projects };