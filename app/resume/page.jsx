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
"and 4-month intensive bootcamp. I'm a highly motivated individual with a strong foundation in web development "+
"technologies like React.js, TypeScript and Next.js and backend development with Python and Django. My skills also "+
"include version control with Git and database management with MySQL and SQLite. I love the challenge of solving "+
"complex problems with creative solutions. I'm actively seeking an entry-level software engineering role to leverage my "+
"skills and contribute to a dynamic team.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Malik Pinkerton"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+44) 780 421 6940"
    },
    {
      fieldName: "Email",
      fieldValue: "m.pinkerton7@outlook.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year"
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
      description: "Completed course over 2 months learning best practises and strategies for information security",
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
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
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
    {
      icon: <FaFigma />,
      name: "Figma",
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
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    
    </motion.div>
  )
}

export default Resume