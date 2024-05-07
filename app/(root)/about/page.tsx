import dynamic from "next/dynamic";

import { skills } from "@/constants";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ComponentWithWindow = dynamic(
  () => import("../../../components/shared/Timeline"),
  {
    ssr: false,
  }
);

const About = () => {
  return (
    <section className="">
      {/* skills part */}
      <div className="flex flex-col py-10">
        <h1 className="h1-bold text-dark100_light900">
          My <span className="primary-text-gradient">Skills</span>
        </h1>

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
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* experience part */}
      <div className="py-16">
        <h1 className="h1-bold text-dark100_light900">
          My <span className="primary-text-gradient">Education</span>
        </h1>
        <div className="h3-bold text-dark300_light700 mt-5 flex flex-col">
          <p>Here is a glimpse of my educational journey so far:</p>
        </div>

        {/* time line */}
        <div className="mt-12 flex">
          <ComponentWithWindow />
        </div>
      </div>

      <div>
        <h1 className="h1-bold text-dark100_light900">Certifications</h1>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Image
                src="/phcertificate.jpg"
                alt="certificate"
                width={250}
                height={250}
              />
              <CardTitle className="text-dark200_light800 pt-6">
                Complete Web Course
              </CardTitle>
              <CardDescription className="text-dark300_light700">
                Certified in completed web development course by programming
                hero, showcasing proficiency in structuring content and styling
                web pages. Committed to delivering visually appealing and
                well-structured solutions.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto">
              <a href="/Hasibul Hasan's Resume.pdf" download>
                <Button className="btn primary-gradient mx-auto mt-6 text-center uppercase text-white">
                  View Certificate
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image src="/js.jpg" alt="certificate" width={250} height={250} />
              <CardTitle className="text-dark200_light800 pt-6">
                Javascript Course
              </CardTitle>
              <CardDescription className="text-dark300_light700">
                Earned Scrimba certification in JavaScript, demonstrating
                expertise in dynamic web development. Excited to apply advanced
                scripting skills for creating interactive and responsive web
                applications.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto">
              <a href="/js scrimba.pdf" download>
                <Button className="btn primary-gradient mx-auto mt-6 text-center uppercase text-white">
                  View Certificate
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Image
                src="/meta.jpg"
                alt="certificate"
                width={250}
                height={250}
              />
              <CardTitle className="text-dark200_light800 pt-6">
                Meta Frontend Developer
              </CardTitle>
              <CardDescription className="text-dark300_light700">
                Holder of the Meta Frontend Developer Certificate, showcasing
                mastery in creating innovative and user-centric web experiences.
                Equipped with the skills to build cutting-edge frontend
                solutions for a dynamic digital landscape.
              </CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto">
              <a href="/meta frontend developer certificate.pdf" download>
                <Button className="btn primary-gradient mx-auto mt-6 text-center uppercase text-white">
                  View Certificate
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default About;
