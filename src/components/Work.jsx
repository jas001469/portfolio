import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/project1.png',
    title: 'CampQuest',
    tags: ['MERN Stack', 'ExpressJS','NodeJS', 'MongoDB','Authentication','API'],
    projectLink:'https://github.com/jas001469/Camp-Quest'
  },
  {
    imgSrc: '/images/project2.png',
    title: 'Expense Tracker App',
    tags: ['Graphs', 'React', 'Development', 'API'],
    projectLink: 'https://expense-tracker-7cgpz1xhn-jas001469.vercel.app/'
  },
  {
    imgSrc: '/images/project3.avif',
    title: 'Crypto - Info  app',
    tags: ['Development', 'API', 'React', 'Graphs'],
    projectLink: 'https://crypto-cjhg6o754-jas001469.vercel.app/'
  },
//   {
//     imgSrc: '/images/project-4.jpg',
//     title: 'Real state website',
//     tags: ['Web-design', 'Development'],
//     projectLink: 'https://github.com/codewithsadee-org/wealthome'
//   },
//   {
//     imgSrc: '/images/project-5.jpg',
//     title: 'eCommerce website',
//     tags: ['eCommerce', 'Development'],
//     projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
//   },
//   {
//     imgSrc: '/images/project-6.jpg',
//     title: 'vCard Personal portfolio',
//     tags: ['Web-design', 'Development'],
//     projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
//   },
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