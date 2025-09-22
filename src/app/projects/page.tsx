import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Task Manager",
    description: "A simple productivity app for managing daily tasks.",
    tech: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "E-commerce Store",
    description: "A demo online shop with cart and checkout.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            description={p.description}
            tech={p.tech}
          />
        ))}
      </div>
    </section>
  );
}
