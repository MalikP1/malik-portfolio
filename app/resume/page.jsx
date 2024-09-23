"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
} from "react-icons/fa"

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiMysql,
  SiSqlite
} from "react-icons/si"

// about data

const about = {
  title: "About me",
  description: "Eager learner with a passion for technology, recently transitioned into software engineering after completing a 3-month "+
"and 4-month intensive bootcamp. I love the challenge of solving complex problems with creative solutions. I'm actively seeking an entry-level"+
" software engineering role to leverage my skills and contribute to a dynamic team.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Malik Pinkerton"
    },
    {
      fieldName: "Email",
      fieldValue: "m.pinkerton7@outlook.com"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 780 421 6940"
    },
    {
      fieldName: "Experience",
      fieldValue: "10 months"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
  ]
}

// experience data

const experience = {
  icon: "/assets/resume",
  title: "My experience",
  description: "Gained experience from various companies before transitioning into web development freelance whilst looking for a permanent position",
  items: [
    {
      company: "E D&R Cleaning Company",
      position: "Freelance Web Developer",
      duration: "June 2024 - August 2024"
    },
    {
      company: "NHS Histopathology",
      position: "Medical Laboratory Assistant",
      duration: "June 2022 - November 2023"
    },
    {
      company: "HAP Recruitment",
      position: "Covid Testing Operative",
      duration: "August 2020 - February 2022"
    },
    {
      company: "HAP Recruitment",
      position: "Events Bar Staff",
      duration: "June 2019 - March 2020"
    },
    {
      company: "University of East London",
      position: "Clearing Hotline Support",
      duration: "July 2018 - September 2018"
    },
  ]
}

// education data

const education = {
  icon: "/assets/resume",
  title: "My education",
  description: "From a finance background I have transitioned into Software Development",
  items: [
    {
      institution: "HyperionDev",
      title: "Software Engineering Bootcamp",
      qualification: "Diploma",
      description: "Learned, practised and built applications using Python, Django, SQL and SQLite",
      duration: "March 2024 - June 2024"
    },
    {
      institution: "BrainStation",
      title: "Software Engineering Bootcamp",
      qualification: "Diploma",
      description: "Learned, practised and built applications using React.js, JavaScript, HTML, CSS and MySQL",
      duration: "November 2023 - February 2024"
    },
    {
      institution: "Firebrand Training",
      title: "Certificate in Information Security Management Principles (CISMP)",
      qualification: "Certificate",
      description: "Learned best practises and strategies for information security",
      duration: "February 2022 - April 2022"
    },
    {
      institution: "Middlesex University",
      title: "BSc Banking and Finance",
      qualification: "Undergraduate degree",
      description: "Achieved a First Class Honours",
      duration: "September 2016 - May 2019"
    },
  ]
}

// skills data

const skills = {
  title: "My skills",
  description: "Through 10 months of taught training and independent learning, practise and building applications, I have gained the following skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <SiSqlite />,
      name: "SQLite",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[3.75rem]"
        >
          <TabsList className="flex flex-col w-full max-w-[23.75rem] mx-auto xl:mx-0
          gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[1.875rem] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[37.5rem] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875rem]">
                    {experience.items.map((item, index)=> {
                      return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[11.5rem] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[16.25rem] min-h-[3.75rem]
                        text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[0.375rem] h-[0.375rem] rounded-full
                          bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[1.875rem] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[37.5rem] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[25rem]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[1.875rem]">
                    {education.items.map((item, index)=> {
                      return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[25rem] py-6 px-10 rounded-xl
                        flex flex-col justify-center items-center lg:items-start
                        gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[16.25rem] min-h-[3.75rem]
                        text-center lg:text-left">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[0.5rem] h-[0.5rem] rounded-full
                          bg-accent"></span>
                          <p className="text-white/60 text-lg">{item.institution}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[0.5rem] h-[0.5rem] rounded-full
                          bg-accent"></span>
                          <p className="text-white/60 text-lg">{item.qualification}</p>
                        </div>
                        <div className="flex items-baseline gap-3">
                          {/* dot */}
                          <span className="w-[0.375rem] h-[0.375rem] rounded-full
                          bg-accent py-1 px-1"></span>
                          <p className="text-white/60">{item.description}</p>
                        </div>
                      </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[1.875rem]">
                <div className="flex flex-col gap-[1.875rem] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[37.5rem] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[1.875rem]">
                  {skills.skillList.map((skill, index)=> {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=> {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    
    </motion.div>
  )
}

export default Resume