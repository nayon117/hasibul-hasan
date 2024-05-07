import Timeline from "@/components/shared/Timeline";
import { skills, experiences } from "@/constants";
import Image from "next/image";


const About = () => {
  return (
    <section className="">

      {/* skills part */}
      <div className="flex flex-col py-10">
        <h3 className="h1-bold text-dark100_light900">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container size-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front flex items-center justify-center rounded-xl">
                <Image
                  width={50}
                  height={50}
                  src={skill.imageUrl}
                  alt={skill.name}
                  // className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* experience part */}
      <div className="py-16">
        <h3 className="primary-text-gradient">Education</h3>
        <div className="mt-5 flex flex-col text-slate-500">
          <p>Here is a glimpse of my educational journey so far:</p>
        </div>

        {/* time line */}
        <div className="mt-12 flex">
         <Timeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
};
export default About;
