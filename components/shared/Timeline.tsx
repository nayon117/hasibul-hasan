"use client"
// import Image from 'next/image';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ experiences }: any) => {
    console.log(experiences)
  return (
    <section className=''>
       
      <div>
        {experiences.map((experience: any) => (
          <div
            key={experience.company_name}
            // date={experience.date}
            // icon={
            //   <div className="flex size-full items-center justify-center">
               
            //     <Image
            //       width={50}
            //       height={50}
            //       src={experience.icon.src} // Update to access the src property of the icon object
            //       alt={experience.company_name}
            //     />
            //   </div>
            // }
            // iconStyle={{ background: experience.iconBg }}
            // contentStyle={{
            //   borderBottom: "8px ",
            //   borderStyle: "solid",
            //   borderBottomColor: experience.iconBg,
            //   boxShadow: "none",
            // }}
          >
            <div>
              <h3 className="text-xl font-semibold text-black">
                {experience.title}gsg
              </h3>
              <p
                className="text-dark200_light800 font-medium"
                style={{ margin: 0 }}
              >
                {experience.company_name}
              </p>
            </div>

            <ul className="my-5 ml-5 list-disc space-y-2">
              {experience.points.map((point: any, index: number) => (
                <li
                  key={`experience-point-${index}`}
                  className="pl-1 text-sm font-normal text-black"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Timeline;
