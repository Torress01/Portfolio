import Link from "../../../link";
import { ProjectCard } from "./project-card";

export const ProjectsList = () => {
  return (
    <section className="container grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6 mb-16">
      <Link href="/projects/portfolio">
        <ProjectCard />
      </Link>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  );
};
