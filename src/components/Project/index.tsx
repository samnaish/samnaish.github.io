type ProjectProps = {
  title: string;
  image: string;
  description: string;
  link: string;
}


const Project = ({ title, image, description, link }: ProjectProps) => {
  return (
    <div className="flex flex-col p-4 bg-white rounded">
      <img className="w-full mb-6 max-h-48 object-cover" src={image} alt="project image preview" />
      <div className="text-lg mb-2">{title}</div>
      <div className="mb-4 text-sm grow">{description}</div>
      <a href={link} className="self-start inline-block bg-stone-900 text-white text-sm py-2 px-4 rounded hover:bg-stone-800 transition">View Project</a>
    </div>
  )
}

export { Project };