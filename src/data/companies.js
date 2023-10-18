//ToDO: Add achievements and reviews 
export const companies = [
    {
        id: 'comp1',
        companyName: 'EPAM Systems',
        companyLink: 'https://www.linkedin.com/company/epam-systems/',
        companyImg: '/images/companies/epam.jpg',
        position: 'Internship Trainee',
        startDate: 'September 1, 2018',
        endDate: 'March 30, 2019',
        description: ['Completed an internship at the largest company in Belarus on the basics of web programming, successfully completed tasks.'],
        skills: ['HTML', 'JavaScript', 'CSS'],
        projects: []
    },
    {
        id: 'comp2',
        companyName: 'IBA Group',
        companyLink: 'https://www.linkedin.com/company/iba-group/',
        companyImg: '/images/companies/IBAGroup.jpg',
        position: 'Software Engineer',
        startDate: 'October 1, 2018',
        endDate: 'July 1, 2022',
        description: [],
        skills: ['React', 'Redux', 'Node.js', 'SQL', 'TypeScript', 'Angular', 'Vue.js', 'Git', 'IBM Cognos Analytics', 'Scrum'],
        projects: [
            {
                projectId: 1,
                projectPosition: 'Internship Trainee',
                projectName: 'IBA Group',
                startDate: 'October 1, 2018',
                endDate: 'March 30, 2019',
                description: [
                    "About:",
                    "Developed a pet-project in Angular and Node.js under the guidance of a Senior Full-stack developer.",
                    "Responsibilities:",
                    "• developed components in Angular;",
                    "• developed design using Angular Material;",
                    "• developed a REST API for an application on Node.js;",
                    "• created a database using MongoDB and Mongoose",
                ],
                skills: [
                    'Node.js',
                    'Angular',
                    'TypeScript',
                    'Mongo DB'
                ]
            },
            {
                projectId: 2,
                projectPosition: 'Frontend Developer',
                projectName: 'Supplier Relationship Management System',
                startDate: 'February 1, 2019',
                endDate: 'September 30, 2019',
                description: [
                    "About:",
                    "Development of Supplier Relationship Management System. Application allows a company to track information about it’s product suppliers, create competitions between supplier to choose the best supplier for the product.",
                    "Responsibilities:",
                    "• created React components according to design;",
                    "• developed application logic using state management Redux;",
                    "• styled components with Bootstrap 3 and SCSS;",
                    "• fixed bugs if necessary;",
                    "• wrote unit tests using Jest;",
                    "• reviewed code;",
                    "• took part in agile methodology - scrum.",
                ],
                skills: [
                    'React',
                    'Node.js',
                    'Redux',
                    'Git',
                    'Jest'
                ]
            },
            {
                projectId: 3,
                projectPosition: 'Full-Stack Developer',
                projectName: 'Internal Startups',
                startDate: 'January 1, 2020',
                endDate: 'June 30, 2022',
                description: [
                    "Responsibilities:",
                    "• developed components using various JavaScript libraries (React, Vue.js, Durt/Flutter);",
                    "• developed application UI design;",
                    "• fixed errors;",
                    "• wrote unit tests in Jest;",
                    "• styled components using various Css libraries;",
                    "• developed REST API using Node.js and GraphQL;",
                    "• participated in various stages of scrum and trello;",
                    "• together with the team brainstormed with ideas for applications;",
                ],
                skills: [
                    'React',
                    'Node.js',
                    'Redux',
                    'Vue.JS',
                    'Durt',
                    'Flutter',
                    'Figma',
                    'MongoDB',
                    'GraphQL',
                    'AWS',
                    'Git',
                    'Scrum'
                ]
            },
            {
                projectId: 4,
                projectPosition: 'Frontend/IBM Cognos Developer',
                projectName: 'IBM *Contractor*',
                startDate: '',
                endDate: '',
                description: [
                    "About:",
                    "The Chief Data Office (CDO) has created a single, unified enterprise data infrastructure that integrates strategic data sources with cognitive, analytics, and cloud offerings. The platform and its services make possible unprecedented access to IBM's rich data resources, transforming our organization into a powerful cognitive business enterprise.",
                    "Responsibilities:",
                    "• Designed, implementated, deployed, tested and supported of CEDP DQ Dashboards and Reports;",
                    "• Participated in all stages of Scrum (meetings, planning, showcases, retrospectives, etc.);",
                    "• Runned DQ analysis and prepared Data Quality reports for key stakeholders and data owners;",
                    "• Used of Data Quality capabilities in InfoSphere Information Server;"
                ],
                skills: [
                    'JavaScript',
                    'Git',
                    'IBM Cognos Analytics',
                    'DB2 Warehouse',
                    'Cloud Pak For Data',
                    'IBM Cloud',
                    'Apache Hive',
                    'InfoSphere Information Server',
                    'InfoSphere Information Governance Catalog',
                    'InfoSphere Information Analyzer',
                    'Python'
                ]
            },
        ]
    },
    {
        id: 'comp3',
        companyName: 'UpWork',
        companyLink: 'https://www.linkedin.com/company/upwork/',
        companyImg: '/images/companies/upWork.jpg',
        position: 'Freelance Frontend/Full-Stack Developer',
        startDate: 'February 1, 2023',
        endDate: '',
        description: [],
        skills: ['React', 'Redux', 'Node.js', 'SQL'],
        projects: [
            {
                projectId: 1,
                projectPosition: 'Frontend Developer',
                projectName: 'Business Card Website For an Individual Entrepreneur ',
                startDate: 'January 1, 2023',
                endDate: 'March 1, 2023',
                description: [
                    "About:",
                    "An individual entrepreneur develops forged products from metal structures. The website allows to view agallery of completed products, prices, contact information for the entrepreneur and information about the team.",
                    "Responsibilities:",
                    "• Developed the application architecture;",
                    "• Developed the design in Figma;",
                    "• Modeled and created a database;",
                    "• Developed components using React and added the Redux state manager;",
                    "• Styled components using various Css libraries;",
                    "• Developed REST API using Node.js.",
                ],
                skills: [
                    'React',
                    'Redux',
                    'Node.js',
                    'Figma',
                    'MongoDB',
                ]
            },
            {
                projectId: 2,
                projectPosition: 'Frontend Developer',
                projectName: 'Financial Reporting System',
                startDate: 'April 1, 2023',
                endDate: 'September 1, 2023',
                description: [
                    "About:",
                    "A  financial reporting system has been developed for the company's internal use. The customer required an application to present financial indicators in a well structured form. The application allows to view data using various charts, tables, texts and with the ability to filter by different categories to view the data of interest.",
                    "Responsibilities:",
                    "• Developed components using React, TypeScript and added the Redux state manager;;",
                    "• Styled components using Scss;",
                    "• Developed REST API using Node.js.",
                ],
                skills: [
                    'React',
                    'Redux',
                    'TypeScript',
                    'Node.js',
                    'Figma',
                    'PostgresSQL',
                ]
            }
        ]
    }
];