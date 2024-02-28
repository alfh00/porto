type Project = {
    title: string
    tech: string[]
    description: string
    github: string
}
  
const projects: Project[] = [
    {
      title: 'Epic Events',
      tech: ['Python', 'Postgres', 'SQLAlchemy', 'Alembic', 'Clean', 'Hexagonal'],
      description: `This CLI CRM software will facilitate the collection and processing of client and event data, improving communication across different departments within the company.`,
      github: 'https://github.com/alfh00/epic-events'
    },
    {
      title: 'YelpCamp',
      tech: ['javascript', 'Mapbox','multer', 'Cloudinary', 'MongoDB', 'Passport'],
      description: `web application allows users to publish, find and review camping sites using a map powered by Mapbox. `,
      github: 'https://github.com/alfh00/YelpCamping'
    },
    {
      title: 'Lemon Art',
      tech: ['javascript', 'Node', 'Express', 'JWT'],
      description: `Content Management for  marketing agency to showcase their Works, projects and case study in order to reach a large audiance.`,
      github: 'https://github.com/alfh00/Lemon'
    },
    {
      title: 'Wig',
      tech: ['javascript', 'React', 'Node', 'Express', 'MongoDb'],
      description: `This web app is designed for HR departments to store and manage job status information track the progress of open job positions and manage the hiring process.`,
      github: 'https://github.com/alfh00/wig'
    },
    {
      title: 'Litrevu',
      tech: ['Python', 'Django', 'pep8'],
      description: `A sharing platform for book's readers to connect request, review and share opinion about books`,
      github: 'https://github.com/alfh00/litrevu'
    },
    {
      title: 'SoftDesk',
      tech: ['Python', 'Django', 'REST','Django Rest Framework'],
      description: `SoftDesk API allows you to manage projects, issues, and comments. It provides functionalities for support management`,
      github: 'https://github.com/alfh00/SoftDesk'
    },
    {
      title: 'AlgoInvest',
      tech: ['Python', 'Django', 'Django Rest Framework'],
      description: `AlgoInvest This project implements various algorithms for portfolio optimization from a large set of stocks in order to maximize the ROI.`,
      github: 'https://github.com/alfh00/algoinvest'
    },
    {
      title: 'Chess Tournament Manager',
      tech: ['Python', 'OOP', 'MVC'],
      description: `This is a tournament management system implemented in Python using the curses library. Using Swiss Algoithm allows users to create and manage tournaments, track players, and record match results.`,
      github: 'https://github.com/alfh00/P04-ChessTournamentManager'
    },
    {
      title: 'Gudlift',
      tech: ['Python', 'Flask'],
      description: `This is a proof of concept project to show a light-weight version of our competition booking platform. The aim is the keep things as light as possible, and use feedback from the users to iterate.`,
      github: 'https://github.com/alfh00/gudlft'
    },
]

export default projects