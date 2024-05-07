import { blogsArray } from "@/constants";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogsArray?.map((blog) => (
          <Card key={blog.id}>
            <CardHeader>
              <Image src={blog.image} alt="Blog Image" width={250} height={250} />
              <CardTitle className="text-dark200_light800 pt-6">
                {blog.title}
              </CardTitle>
              <CardDescription className="text-dark300_light700">
                {blog.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="mx-auto">
              <Link href={blog.link} target="_blank">
                <Button className="btn primary-gradient mx-auto mt-6 text-center uppercase text-white">
                  Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
export default Blog;
