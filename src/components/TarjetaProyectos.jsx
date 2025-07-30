function projectCard({ title, description, tech, image, repo, demo }) {
  return (
    <div className="border rounded-xl p-4 shadow bg-white dark:bg-gray-800">
      <img src={image} alt={title} className="rounded mb-2" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {tech.map((t, i) => (
          <span key={i} className="bg-gray-200 px-2 py-1 rounded text-sm">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-4">
        <a href={demo} target="_blank" className="text-blue-600 underline">
          Demo
        </a>
        <a href={repo} target="_blank" className="text-blue-600 underline">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default projectCard;
