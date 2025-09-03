import React from "react";
import ProjectCard from "./project-card";
import HorizontalDivider from "../../../divider/horizontal";
import { SectionTitle } from "../../../section-title";
import ProjectCard2 from "./project-card/index2";

const HighlightedProjects = () => {
  return (
    <section className="container py-8">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider />
        <ProjectCard2 />
        <HorizontalDivider />
      </div>
    </section>
  );
};

export default HighlightedProjects;
