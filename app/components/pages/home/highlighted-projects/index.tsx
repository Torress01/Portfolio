import React from "react";
import ProjectCard from "./project-card";
import Link from "../../../link";
import { HiArrowNarrowRight } from "react-icons/hi";
import HorizontalDivider from "../../../divider/horizontal";
import { SectionTitle } from "../../../section-title";

const HighlightedProjects = () => {
  return (
    <section className="container py-8">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard />
        <HorizontalDivider />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HighlightedProjects;
