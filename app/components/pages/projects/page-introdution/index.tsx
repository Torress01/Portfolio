import { HiArrowNarrowLeft } from "react-icons/hi";
import Link from "../../../link";
import { SectionTitle } from "../../../section-title";

export const PageIntrodution = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] flex flex-col items-center justify-center px-2">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi, como
          foram criados e as tecnologias utilizadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
        </Link>
      </div>
    </section>
  );
};
