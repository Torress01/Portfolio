import React from "react";
import { SectionTitle } from "../../../section-title";
import ExperienceItem from "./experience-item";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row"
    >
      <div className="max-w-[420px]">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="text-gray-400 mt-6">
          Em busca contínua de novos desafios e projetos inovadores para aplicar
          minhas habilidades e gerar resultados.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <ExperienceItem />
      </div>
    </section>
  );
};

export default WorkExperience;
