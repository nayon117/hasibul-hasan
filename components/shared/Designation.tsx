"use client";
import { useTypewriter } from "react-simple-typewriter";
const Designation = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Hasibul Hasan",
      "a Frontend Developer",
      "a React & NextJs Developer",
      "a MERN Developer",
      "a Full Stack Developer",
    ],
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  return (
    <div className="pt-8 text-center">
      <h2 className="h1-bold text-dark100_light900">
        Hi, I&apos;m
        <span className="primary-text-gradient ml-2">{typeEffect}</span>
      </h2>
    </div>
  );
};
export default Designation;
