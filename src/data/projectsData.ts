type Project = {
    title: string
    tech: string[]
    description: string
    github: string
}
  
const projects: Project[] = [
    {
      title: 'YelpCamp',
      tech: ['javascript', 'Mapbox', 'Cloudinary', 'MongoDB', 'multer', 'Passport'],
      description: `web application allows users to publish, find and review camping sites using a map powered by Mapbox. The app also includes user authentication, so users can create an account and leave reviews of the camping sites they have visited.`,
      github: 'https://github.com/alfh00/YelpCamping'
    },
    {
      title: 'JustStramIt',
      tech: ['Html', 'CSS', 'javascript', 'Frontend'],
      description: `This project is a web application that fetches movie data from an API and displays it in various sections on the website. It allows users to scroll through movie categories, view details about individual movies, and interact with a floating movie window.`,
      github: 'https://github.com/alfh00/P06-juststreamit'
    },
    {
      title: 'Lemon Art',
      tech: ['javascript', 'Node', 'Express', 'JWT'],
      description: `Content Management for  marketing agency to showcase their Work, prject and case study`,
      github: 'https://github.com/alfh00/Lemon'
    },
    {
      title: 'Gudlift',
      tech: ['Python', 'Flask'],
      description: `This is a proof of concept (POC) project to show a light-weight version of our competition booking platform. The aim is the keep things as light as possible, and use feedback from the users to iterate.`,
      github: 'https://github.com/alfh00/gudlft'
    },
    {
      title: 'Wig',
      tech: ['javascript', 'React', 'Node', 'Express', 'MongoDb'],
      description: `This web app is designed for HR departments to store and manage job status information. It allows HR professionals to easily track the progress of open job positions and manage the hiring process.`,
      github: 'https://github.com/alfh00/wig'
    },
    {
      title: 'Book Scrapper',
      tech: ['Python', 'BeatifulSoup', 'CSV'],
      description: `This project provides a convenient way to gather comprehensive details about various books available on the website, including titles, authors, prices, availability, more. `,
      github: 'https://github.com/alfh00/P02-Scrapper'
    },
    {
      title: 'Litrevu',
      tech: ['Python', 'Django', 'pep8'],
      description: `A social media for book readers to request, review and share opinion about books`,
      github: 'https://github.com/alfh00/litrevu'
    },
    {
      title: 'SoftDesk',
      tech: ['Python', 'Django', 'Django Rest Framework'],
      description: `SoftDesk API allows you to manage projects, issues, and comments. It provides functionalities for support management like creating projects, adding contributors, creating and updating issues, and adding, updating, and deleting comments.`,
      github: 'https://github.com/alfh00/SoftDesk'
    },
    {
      title: 'AlgoInvest',
      tech: ['Python', 'Django', 'Django Rest Framework'],
      description: `AlgoInvest This project implements various algorithms for portfolio optimization. The goal is to select a combination of stocks from a given list while staying within a budget constraint, in order to maximize the total return on investment (ROI).`,
      github: 'https://github.com/alfh00/algoinvest'
    },
    {
      title: 'Chess Tournament Manager',
      tech: ['Python', 'OOP', 'MVC'],
      description: `This is a tournament management system implemented in Python using the curses library. Using Swiss Algoithm allows users to create and manage tournaments, track players, and record match results.`,
      github: 'https://github.com/alfh00/P04-ChessTournamentManager'
    },
    {
      title: 'Epic Events',
      tech: ['Python', 'Postgres', 'SQLAlchemy', 'Alembic', 'Clean', 'Hexagonal', 'Architecture', 'Pytest'],
      description: `This CLI CRM software will facilitate the collection and processing of client and event data, improving communication across different departments within the company.`,
      github: 'https://github.com/alfh00/epic-events'
    },
    {
      title: 'Lettings',
      tech: ['Python', 'Django', 'Gitlab-Ci', 'AWS', 'Migration', 'Scaling', 'Pytest'],
      description: `This CLI CRM software will facilitate the collection and processing of client and event data, improving communication across different departments within the company.`,
      github: 'https://github.com/alfh00/lettings'
    },
]

export default projects