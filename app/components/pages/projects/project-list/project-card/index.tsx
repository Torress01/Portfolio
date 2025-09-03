import Image from "next/image";

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-amber-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="https://c7fc8402.delivery.rocketcdn.me/wp-content/uploads/2023/12/software.jpg"
          alt="projeto"
          unoptimized
          className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>

      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-amber-500 transition-all">
          Portfolio
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Portfolio pessoal para recrutadores e visitantes!
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Next.js, Typescript, Hygraph CMS
        </span>
      </div>
    </div>
  );
};
