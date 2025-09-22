type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
};

export default function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <div className="p-4 border rounded-lg hover:shadow-md transition bg-white dark:bg-gray-800">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="flex gap-2 flex-wrap text-sm">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
