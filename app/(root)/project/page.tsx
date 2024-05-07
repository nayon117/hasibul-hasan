import { projects } from "@/constants";
import { arrow } from "../../../public/icons";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <section className="">
      <h1 className="h1-bold text-dark100_light900">
        My <span className="primary-text-gradient">Projects</span>
      </h1>

      <p className="text-dark200_light900 mt-2 leading-relaxed">
        I have embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className="my-20 flex flex-wrap gap-16">
        {projects.map((project) => (
          <div className="w-full lg:w-[400px]" key={project.name}>
            <div className="block-container size-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front flex-center rounded-xl">
                <Image
                  width={26}
                  height={26}
                  src={project.iconUrl}
                  alt="threads"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-dark100_light900 text-2xl font-semibold">
                {project.name}
              </h4>
              <p className="text-dark400_light800 mt-2">
                {project.description}
              </p>
              <div className=" mt-5 flex items-center gap-2">
                <Link
                  href={project.link}
                  target="_blank"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <Image
                  src={arrow}
                  width={24}
                  height={24}
                  alt="arrow"
                  className="size-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
