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
export const leetcodeUsername = 'vishwajeet-dev'
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
export const githubToken = "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"
export const githubCommitIndicatorUsername = "vishwajeet-singhh"


export const aboutMe = `Experienced in Java, Spring Boot, Hibernate, REST APIs, and Microservices, with a strong background in PostgreSQL, Oracle, SAP HANA, and cloud platforms like Azure. Skilled in building scalable backend systems, integrating Kafka for event-driven architectures, and implementing secure authentication mechanisms.

\nWorked extensively with Python for data detection and classification, optimizing large-scale data processing. Proficient in JavaScript, TypeScript, and React, delivering dynamic and responsive web applications. Hands-on experience with Docker, CI/CD pipelines, and performance monitoring using Prometheus and Grafana.

\nFocused on solving complex problems and building efficient, high-performance systems.`;


export const footerAbout = "Experienced in Java, Spring Boot, Hibernate, REST APIs, and Microservices, with a strong background in PostgreSQL, Oracle, SAP HANA, and cloud platforms like Azure. Skilled in building scalable backend systems, integrating Kafka for event-driven architectures, and implementing secure authentication mechanisms.";



// list of skills
export const skills = [{name: "Java", icon: <FaJava/>}, {
    name: "JavaScript", icon: <SiJavascript/>
},
    {name: "Spring Boot", icon: <SiSpringboot/>},
    {name: "React.js", icon: <FaReact/>}, {
        name: "DSA", icon: <SiJest/>
    },
    {name: "HTML", icon: <FaHtml5/>}, {name: "CSS", icon: <FaCss3Alt/>}, {
        name: "Tailwind CSS", icon: <SiTailwindcss/>
    }, {name: "MySQL", icon: <SiMysql/>}, {name: "SQL", icon: <SiSqlite/>}, {name: "AWS", icon: <FaAws/>}, {
        name: "Git", icon: <FaGitAlt/>
    }, {name: "Hibernate", icon: <SiHibernate/>}, {name: "JUnit5", icon: <SiJunit5/>}, {
        name: "Thymeleaf", icon: <SiThymeleaf/>
    }, {name: "Spring Security", icon: <SiSpringsecurity/>},];

//list of tools
export const toolsList = [{name: "SQL Workbench", icon: <FaDatabase/>}, {
    name: "IntelliJ IDEA",
    icon: <SiEclipseide/>
}, {name: "Eclipse", icon: <SiEclipseide/>}, {name: "Spring Boot Tool Suite", icon: <SiSpringboot/>}, {
    name: "VS Code",
    icon: <SiVisualstudiocode/>
}, {name: "Postman", icon: <SiPostman/>}, {name: "Android Studio", icon: <SiAndroidstudio/>}, {
    name: "Git",
    icon: <SiGit/>
},];

//list of certifications
export const certifications = [
    {
        title: "Java",
        icon: <FaJava style={{color: '#E76F00'}}/>, // Spring icon
    },

    {
        title: "Spring Boot",
        icon: <SiSpringboot style={{color: '#6DB33F'}}/>, // System Design icon
    },


    {
        title: "Data Structures and Algorithms",
        icon: <SiLeetcode className="text-yellow-600"/>, // LeetCode icon
    },

    {
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
        "Integrated additional parameters for detection, including IBAN, addresses, and credit card details, using a Python library to process millions of records and enhance automated data classification.",
        "Designed and prepared reports for user access, company reporting, and privacy auditing, ensuring integrity through digital signatures to prevent modification.",
        "Implemented a condition in AI-Safe to exclude popular names from anonymization and provide Wikipedia references.",
        "Developed a profile page with backend APIs for password resets and profile edits, incorporating CAPTCHA and OTP for enhanced security.",
        "Achieved nearly 100% reduction in the risk of invalid licenses in on-premises applications by implementing RSA cryptography and digital signatures.",
        "Engineered an advanced server monitoring system with Docker, Spring Actuator, Prometheus, Grafana, and Alert Manager for real-time health tracking and email alerts.",
        "Automated PII detection, transforming a manual data classification process into a fully automated solution, saving 95% of user effort.",
        "Designed a scalable backup system handling up to 1 billion records, integrating Kafka for real-time synchronization.",
        "Built a high-performance RESTful API with Spring Boot for large-scale data cleaning and deletion, optimizing performance by 30%.",
        "Automated schema scanning across Oracle, PostgreSQL, and HANA databases, handling 100,000+ tables and significantly improving data management efficiency.",
        "Increased application security by 70% by developing a Java Mail Server for email authentication, enhancing user and system security."
    ]
}
    /*{
    year: "2023",
    company: "Maya Data Privacy",
    duration: "Dec 2023 (1 Month)",
    role: "SDE Intern",
    description: "Implemented API endpoints and data processing pipelines, enhancing the back-end functionality and ensuring data integrity for various client projects.",
}*/
    ,];