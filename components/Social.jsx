import Link from "next/link"

import {FaGithub, FaLinkedinIn} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/MalikP1"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/malik-pinkerton/"},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return (
                <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social