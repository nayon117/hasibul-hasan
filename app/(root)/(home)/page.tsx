import Designation from "@/components/shared/Designation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <section className="">
      <div className="">
        <div>
          <Image
            src="/profile.png"
            width={150}
            height={150}
            alt="Hasibul Hasan"
            className="mx-auto rounded-full"
          />
        </div>
        <div>
          <Designation />
        </div>

        <div className="text-dark400_light800 mt-8 flex flex-col">
          <p className="h3-bold text-dark300_light700 mb-4">Overview:</p>
          <p>
            👋 Hey there! I am a passionate MERN Stack developer specializing in
            crafting immersive digital experiences. With expertise in React,
            Tailwind CSS, and Firebase, I bring dynamic and responsive
            applications to life.{" "}
          </p>

          <p className="my-5">
            🔥 Proficient in Next.js, Shadcn, clerk, Express.js, MongoDB, Mongoose, I excel in
            backend development, ensuring efficient server-side operations and
            robust database management.
          </p>

          <p>
            🏆 Certified Meta Frontend Developer and Programming Hero graduate,
            I am dedicated to pushing boundaries and staying ahead in
            technology.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <a href="/Hasibul Hasan's Resume.pdf" download>
              <Button className="btn primary-gradient mt-6 uppercase text-white">
                <FaDownload className="mr-2" />
                Resume
              </Button>
            </a>
          </div>
          <div className="flex-1 ">
            <div className="flex items-center justify-end gap-4">
              <Link href="https://github.com/nayon117" target="_blank">
                <FaGithub className=" text-3xl text-gray-700 dark:text-gray-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hasibulhasannayon/"
                target="_blank"
              >
                <FaLinkedin className="text-3xl text-blue-600" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100063569796707"
                target="_blank"
              >
                <FaFacebook className="text-3xl text-blue-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
