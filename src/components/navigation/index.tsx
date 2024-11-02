import { Social } from "../social";

const NavigationBar = () => {
    return (
        <nav className="bg-stone-900 h-screen pt-8 flex flex-col text-center justify-between">
            <div>
                <a className="block py-2 m-2 text-white rounded transition hover:bg-emerald-300 hover:text-stone-900" href="#top">Me</a>
                <a className="block py-2 m-2 text-white rounded transition hover:bg-orange-300 hover:text-stone-900" href="#projects">Projects</a>
            </div>
            <div>
                <Social />
            </div>
        </nav>
    )
}

export { NavigationBar };