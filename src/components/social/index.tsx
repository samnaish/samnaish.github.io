import { GithubIcon } from "../Github";

const Social = () => {
  return (
    <ul className="">
      <li>
        <a href="https://github.com/samnaish" target="_blank" className="inline-block mx-2 fill-white transition hover:fill-stone-900 hover:bg-white md:p-4 rounded">
          <GithubIcon className="size-12 md:size-16" />
        </a>
      </li>
    </ul>
  )
}

export { Social };