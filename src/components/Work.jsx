import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/EdTrellis13.png',
    title: 'EdTrellis - Official Job Portal',
    tags: ['NextJS','TypeScript' ,'ExpressJS', 'API', 'MongoDB', 'Auth'],
    projectLink: 'https://edtrellis.com/'
  },
  {
    imgSrc: '/images/project.png',
    title: 'Official IEEE GTBIT SB Website',
    tags: ['React', 'TailwindCSS', 'Firebase', 'Vercel'],
    projectLink: 'https://ieeegtbit.com/'
  }
  ,{
    imgSrc: '/images/Alertify.png',
    title: 'Alertify - Scam Alert System',
    tags: ['Python','LLMs', 'Machine Learning','NodeJS', 'MongoDB','ReactJS','ExpressJS'],
    projectLink:'https://github.com/jas001469/Alertify'
  },
  {
    imgSrc: '/images/project1.png',
    title: 'CampQuest',
    tags: ['MERN Stack', 'ExpressJS','NodeJS', 'MongoDB','Authentication','API'],
    projectLink:'https://github.com/jas001469/Camp-Quest'
  },
  {
    imgSrc: '/images/project3.png',
    title: 'RealTime-Chat-App',
    tags: ['Socket.io', 'NodeJS', 'Tailwindcsss','React','ExpressJS','MongoDB','JWT','Full Stack'],
    projectLink: 'https://github.com/jas001469/fullStack-Chat-App'
  },
  {
    imgSrc: '/images/project2.png',
    title: 'BorrowEase',
    tags: ['Graphs', 'React','NodeJS', 'ExpressJS','API','JWT'],
    projectLink: 'https://borrow-ease-five.vercel.app/'
  }
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes=""
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work
