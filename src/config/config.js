import {
    FaJava, FaReact, FaHtml5, FaCss3Alt, FaAws, FaGitAlt, FaDatabase
} from "react-icons/fa";

import {
    SiLeetcode,
    SiJavascript,
    SiJest,
    SiTailwindcss,
    SiMysql,
    SiSqlite,
    SiHibernate,
    SiJunit5,
    SiThymeleaf,
    SiSpringsecurity,
    SiSpringboot,
    SiIntellijidea,
    SiEclipseide,
    SiVisualstudiocode,
    SiPostman,
    SiAndroidstudio,
    SiGit
} from "react-icons/si";

import {MdArchitecture} from "react-icons/md";
import myImage from '../assets/my-img.png';

export const username = `vishwajeetdev`;
export const instaUsername = 'hey.vp'
export const  leetcodeUsername = 'vishwajeet-dev'
export const name = "Vishwajeet Pratap Singh";
export const organization = `Maya Data Privacy`;
export const role = `SDE-1 at ${organization}`;
export const profileLink = `https://leetcode.com/u/vishwajeet-dev`;
export const leetcodeApi = `https://leetcode-stats-api.herokuapp.com/${leetcodeUsername}`;
export const gitHubApi = `https://api.github.com/users/${username}/repos`;
export const linkedin = `https://www.linkedin.com/in/${username}`;
export const github = `https://github.com/${username}`;
export const profileImage = myImage;
export const resume = "https://drive.google.com/file/d/1ES1_aBKl0fp3heBVTYLm83r1T_-s4eV3/view?usp=drivesdk";
export const leetcodeProfile = `https://leetcode.com/u/vishwajeet-dev`;
export const instagram = `https://instagram.com/${instaUsername}`;
export const email = "vishwajeet.devv@gmail.com";
export const contact = "9155676582";
export const githubToken="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"
export const githubCommitIndicatorUsername = "vishwajeet-singhh"



export const aboutMe = `Experienced in Java, Spring Boot, Hibernate, REST APIs, and Microservices, with a strong background in PostgreSQL, Oracle, SAP HANA, and cloud platforms like Azure. Skilled in building scalable backend systems, integrating Kafka for event-driven architectures, and implementing secure authentication mechanisms.

\n\nWorked extensively with Python for data detection and classification, optimizing large-scale data processing. Proficient in JavaScript, TypeScript, and React, delivering dynamic and responsive web applications. Hands-on experience with Docker, CI/CD pipelines, and performance monitoring using Prometheus and Grafana.

\n\nFocused on solving complex problems and building efficient, high-performance systems.`;




export const footerAbout = `I'm a dedicated software developer skilled in Java, Spring Boot, Hibernate, and REST APIs, with expertise in PostgreSQL, Oracle, SAP HANA, and tools like Docker, Kafka, and Prometheus. Passionate about building impactful projects and solving complex problems through efficient and scalable software solutions.`;


// list of skills
export const skills = [{name: "Java", icon: <FaJava/>}, {
    name: "JavaScript",
    icon: <SiJavascript/>
}, {name: "Spring Boot", icon: <SiSpringboot/>}, {name: "React.js", icon: <FaReact/>}, {
    name: "DSA",
    icon: <SiJest/>
}, {name: "HTML", icon: <FaHtml5/>}, {name: "CSS", icon: <FaCss3Alt/>}, {
    name: "Tailwind CSS",
    icon: <SiTailwindcss/>
}, {name: "MySQL", icon: <SiMysql/>}, {name: "SQL", icon: <SiSqlite/>}, {name: "AWS", icon: <FaAws/>}, {
    name: "Git",
    icon: <FaGitAlt/>
}, {name: "Hibernate", icon: <SiHibernate/>}, {name: "JUnit5", icon: <SiJunit5/>}, {
    name: "Thymeleaf",
    icon: <SiThymeleaf/>
}, {name: "Spring Security", icon: <SiSpringsecurity/>},];

//list of tools
export const toolsList = [{name: "SQL Workbench", icon: <FaDatabase/>}, {
    name: "IntelliJ IDEA",
    icon: <SiIntellijidea/>
}, {name: "Eclipse", icon: <SiEclipseide/>}, {name: "Spring Boot Tool Suite", icon: <SiSpringboot/>}, {
    name: "VS Code",
    icon: <SiVisualstudiocode/>
}, {name: "Postman", icon: <SiPostman/>}, {name: "Android Studio", icon: <SiAndroidstudio/>}, {
    name: "Git",
    icon: <SiGit/>
},];

//list of certifications
export const certifications = [{
    title: "Spring Boot",
    url: "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/137927/certificates/137999/7662983_137999.pdf?1680688572",
    icon: <SiSpringboot style={{color: '#6DB33F'}}/>, // Spring icon
}, {
    title: "Data Structures and Algorithms",
    url: "https://assets.nextleap.app/certificate/Cohort-5-9faa98583d17fdf3d8c761fba59ddd14.pdf",
    icon: <SiLeetcode className="text-yellow-600"/>, // LeetCode icon
}, {
    title: "System Design",
    url: "https://d3r0n59fu7ub44.cloudfront.net/certificates/courseCertificate/2024-02-02/course_64e39613c899c20312714e9e_user_64f82ae8af97410c0679de08.pdf",
    icon: <MdArchitecture className="text-purple-600"/>, // System Design icon
}, {
    title: "React.js",
    url: "https://www.mygreatlearning.com/certificate/PLWQVOVE",
    icon: <FaReact style={{color: '#6ccff6'}}/>, // Frontend Mentor icon
}, {
    title: "Frontend Developer Program",
    url: "https://www.edyoda.com/public-certificate/guddu1cse/1482",
    icon: <FaReact style={{color: '#6ccff6'}}/>, // Frontend Mentor icon
},];

//list of experiences
export const experiences = [{
    year: "2023",
    company: "Maya Data Privacy",
    duration: "Dec 2023 - Present",
    role: "Associate Developer Intern",
    description: [
        "Developed a secure license validation system using RSA cryptography, reducing the risk of invalid licenses by nearly 100%.",
        "Engineered a server monitoring system using Docker, Prometheus, and Grafana for real-time health tracking and alerting.",
        "Automated schema scanning for PostgreSQL, Oracle, and SAP HANA, saving 95% of manual efforts.",
        "Built RESTful APIs for large-scale data processing and secure data deletion using Spring Boot.",
        "Optimized data backup and restore processes with Kafka, ensuring minimal data loss and high availability."
    ]}
    /*{
    year: "2023",
    company: "Maya Data Privacy",
    duration: "Dec 2023 (1 Month)",
    role: "SDE Intern",
    description: "Implemented API endpoints and data processing pipelines, enhancing the back-end functionality and ensuring data integrity for various client projects.",
}*/
,];