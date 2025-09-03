import React from "react";
import { SectionTitle } from "../../../section-title";
import SchoolItem from "./school-item";

const SchoolHistory = () => {
  return (
    <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-4">
        <SchoolItem />
      </div>

      <div className="max-w-[420px]">
        <SectionTitle subtitle="escolaridade" title="Formação acadêmica" />
        <p className="text-gray-400 mt-6">
          Lugares que passei e adquiri conhecimento.
        </p>
      </div>
    </section>
  );
};

export default SchoolHistory;
