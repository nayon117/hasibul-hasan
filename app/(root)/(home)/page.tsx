import { Button } from "@/components/ui/button";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="">
      <div className="">
        <div>
          <Image
            src="/profile.png"
            width={200}
            height={200}
            alt="Hasibul Hasan"
            className="mx-auto rounded-full"
          />
        </div>

        <div className="text-dark400_light800 mt-5 flex flex-col">
          <p className="h3-bold text-dark300_light700 mb-4">Overview:</p>
          <p>
            👋 Hey there! I am a passionate MERN Stack developer specializing in
            crafting immersive digital experiences. With expertise in React,
            Tailwind CSS, and Firebase, I bring dynamic and responsive
            applications to life.{" "}
          </p>

          <p className="my-5">
            🔥 Proficient in Node.js, Express.js, and MongoDB, I excel in
            backend development, ensuring efficient server-side operations and
            robust database management.
          </p>

          <p>
            🏆 Certified Meta Frontend Developer and Programming Hero graduate,
            I am dedicated to pushing boundaries and staying ahead in
            technology.
          </p>
        </div>
        <a href="/Hasibul Hasan's Resume.pdf" download>
          <Button className="btn primary-gradient mt-6 uppercase text-white">
            Download Resume
          </Button>
        </a>
      </div>
    </section>
  );
};
export default HomePage;
