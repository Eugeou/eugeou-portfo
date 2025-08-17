import { FaGraduationCap, FaBullseye, FaSmile } from "react-icons/fa";
import { BiUser } from "react-icons/bi";

export const imagesUp = [
    //PCS
    "/assets/hero-imgs/img-slide-up/pcs-01.png",
    "/assets/hero-imgs/img-slide-up/pcs-02.png",
    "/assets/hero-imgs/img-slide-up/pcs-03.png",
    //"/assets/hero-imgs/img-slide-up/pcs-04.png",
    //CRS
    "/assets/hero-imgs/img-slide-up/crs-01.png",
    "/assets/hero-imgs/img-slide-up/crs-02.png",
    "/assets/hero-imgs/img-slide-up/crs-03.png",
    "/assets/hero-imgs/img-slide-up/crs-04.png",
    //"/assets/hero-imgs/img-slide-up/crs-05.png",
    //BCS
    "/assets/hero-imgs/img-slide-up/bcs-01.png",
    "/assets/hero-imgs/img-slide-up/bcs-02.png",
    "/assets/hero-imgs/img-slide-up/bcs-03.png",
    //"/assets/hero-imgs/img-slide-up/bcs-04.png",
  ];
  
export const imagesDown = [
    //PRM
    "/assets/hero-imgs/img-slide-down/prm-01.png",
    "/assets/hero-imgs/img-slide-down/project-01.png",
    "/assets/hero-imgs/img-slide-down/prm-02.png",
    "/assets/hero-imgs/img-slide-down/project-02.png",
    "/assets/hero-imgs/img-slide-down/prm-03.png",
    "/assets/hero-imgs/img-slide-down/project-03.png",
    "/assets/hero-imgs/img-slide-down/prm-04.png",
    "/assets/hero-imgs/img-slide-down/project-04.png",
    "/assets/hero-imgs/img-slide-down/prm-05.png",
    "/assets/hero-imgs/img-slide-down/project-05.png",
  ];

export const sections = [
  "Home",
  "AboutMe",
  "MySkills",
  "Experience",
  "Projects",
  "ContactMe",
];

export const menuItems = [
  { id: "Home", label: "Home" },
  { id: "AboutMe", label: "About me" },
  { id: "MySkills", label: "My Skills" },
  { id: "Experience", label: "Experience" },
  { id: "Projects", label: "Projects" },
  { id: "ContactMe", label: "Contact me" },
];

export const aboutMeTabs = [
  {
    id: 0,
    label: "Personal Info",
    icon: <BiUser />,
    content: "Hi guys, my name is Nguyen Hoang Minh Quan. I'm an under-graduated student of The University of Information Technology. And I also known as a Frontend Developer.",
  },
  {
    id: 1,
    label: "Education",
    icon: <FaGraduationCap />,
    content: "I am currently pursuing a Bachelor's degree at The University of Information Technology. My focus is on Web Development and Software Engineering.",
  },
  {
    id: 2,
    label: "Objective",
    icon: <FaBullseye />,
    content: "Diligent and motivated individual with a foundation in frontend development, seeking an internship to apply skills in UI programming. Eager to gain hands-on experience, contribute to a skilled team, and deepen expertise in building reliable, scalable solutions. ",
  },
  {
    id: 3,
    label: "My Hobby",
    icon: <FaSmile />,
    content: "I enjoy coding, playing games, watching cartoons, and exploring new technologies in my free time.",
  },
];

export const myJobs = [
    "Frontend Engineer",
    "UI/UX Designer",
    "Software Engineer",
    "Frontend Developer",
];