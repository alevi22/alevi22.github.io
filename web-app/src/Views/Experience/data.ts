import { ExperienceItem } from "../../Types";
import {
    evergy2021Photo,
    evergyLogo,
    garmin2022Photo,
    garmin2023Photo,
    garminLogo,
    nelnetDesignStudio2021Photo,
    nelnetDesignStudio2022Photo,
    nelnetLogo,
    zoom2020Photo,
    zoomLogo,
} from "./Assets";

/**
 * Data for the website's Experience section
 */
const experienceData: ExperienceItem[] = [
    {
        id: "garmin-2023",
        title: "Software Engineer",
        organization: "Garmin",
        href: "https://www.garmin.com/en-US/company/about-garmin/",
        startDate: "August 2023",
        location: "Olathe, KS",
        responsibilities: [
            "Develop new features, improvements, and bug fixes for the Garmin Connect web application, enhancing the user experience for 25 million customers",
        ],
        technologies: [
            "React.js",
            "JavaScript",
            "HTML/CSS",
            "Node.js",
            "GraphQL",
        ],
        photo: garmin2023Photo,
        photoPosition: "50% 30%",
        logo: garminLogo,
        color: { lightTheme: "#000000", darkTheme: "#FFFFFF" },
    },
    {
        id: "nelnet-design-studio-2022",
        title: "Development Manager Intern",
        organization: "Nelnet",
        organizationNote: "via UNL Design Studio Capstone",
        href: "https://nelnetinc.com/nelnet-diversified-services/",
        startDate: "August 2022",
        endDate: "May 2023",
        location: "Lincoln, NE",
        responsibilities: [
            "Led and mentored a team of 5 developers in UI/UX design, agile processes, software engineering, and software architecture",
            "Developed a web application to consolidate loan program data from 10+ systems into 1 central knowledgebase, eliminating inconsistencies and enabling call center agents to quickly find answers to customer questions",
        ],
        technologies: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "React.js",
            "HTML/CSS",
            "AWS",
        ],
        photo: nelnetDesignStudio2022Photo,
        photoPosition: "33% 38%",
        logo: nelnetLogo,
        color: { lightTheme: "#8DC319" },
    },
    {
        id: "garmin-2022",
        title: "Software Engineer Intern",
        organization: "Garmin",
        href: "https://www.garmin.com/en-US/company/about-garmin/",
        startDate: "May 2022",
        endDate: "August 2022",
        location: "Olathe, KS",
        responsibilities: [
            "Created a user interface and API endpoints to help engineers better identify components for new product designs, saving $100,000+ per year",
            "Enhanced internal application user experience for 5,000 users by streamlining data selection and navigation",
            "Developed webservices and implemented data validation to simplify product lifecycle management",
        ],
        technologies: [
            "Java",
            "Spring Boot",
            "JavaScript",
            "jQuery",
            "HTML/CSS",
            "Elasticsearch",
            "SQL",
        ],
        photo: garmin2022Photo,
        logo: garminLogo,
        color: { lightTheme: "#000000", darkTheme: "#FFFFFF" },
    },
    {
        id: "nelnet-design-studio-2021",
        title: "Software Developer Intern",
        organization: "Nelnet",
        organizationNote: "via UNL Design Studio Capstone",
        href: "https://nelnetinc.com/nelnet-business-services/",
        startDate: "September 2021",
        endDate: "May 2022",
        location: "Lincoln, NE",
        responsibilities: [
            "Developed a web application enabling universities to manage events, venues, and ticket sales, decreasing the event creation timeline from multiple days to under an hour",
            "Designed interactive wireframes and defined full-stack architecture to guide product development",
            "Mentored a first-year computer science student teammate in React.js front-end development",
        ],
        technologies: ["React.js", "TypeScript", "HTML/CSS", "Figma"],
        photo: nelnetDesignStudio2021Photo,
        logo: nelnetLogo,
        color: { lightTheme: "#8DC319" },
    },
    {
        id: "evergy-2021",
        title: "Application Developer Intern",
        organization: "Evergy",
        href: "https://www.evergy.com/about-evergy/company-overview",
        startDate: "June 2021",
        endDate: "August 2021",
        location: "Kansas City, MO",
        responsibilities: [
            "Created a chatbot empowering 2,000+ associates to find relevant information across multiple systems, including HR data, payroll, and policies and procedures",
            "Integrated internal project databases with an enhanced user interface for project managers in Jira, reducing the time needed to record project data by up to 90%",
        ],
        technologies: [
            "Power Virtual Agents",
            "Power Automate",
            "SQL",
            "Groovy",
            "Jira API",
            "SharePoint",
        ],
        photo: evergy2021Photo,
        logo: evergyLogo,
        color: { lightTheme: "#004E9A", darkTheme: "#317CC0" },
    },
    {
        id: "zoom-2020",
        title: "Technical Support Engineer Intern",
        organization: "Zoom",
        href: "https://explore.zoom.us/en/about/",
        startDate: "May 2020",
        endDate: "August 2020",
        location: "Overland Park, KS",
        responsibilities: [
            "Assisted over 500 customers via tickets, calls, chats, and social media to address questions, troubleshoot issues, resolve bugs, and consider feature requests",
            "Analyzed technical support procedures during the COVID-19 pandemic, including help center documentation and 60,000 support tickets, to present support leaders with ideas for improvement",
        ],
        photo: zoom2020Photo,
        photoPosition: "60% 25%",
        logo: zoomLogo,
        color: { lightTheme: "#0b5cff" },
    },
];

export default experienceData;
