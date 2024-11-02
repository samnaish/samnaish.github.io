import { GithubIcon } from "../Github";

const Social = () => {
  return (
    <ul className="">
      <li>
        <a href="https://github.com/samnaish" target="_blank" className="inline-block mx-2 fill-white transition hover:fill-stone-900 hover:bg-white p-4 rounded">
          <GithubIcon />
        </a>
      </li>
    </ul>
  )
}

export { Social };