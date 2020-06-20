import Head from 'next/head'
import Header from 'components/Header';
import Footer from 'components/Footer';
import Tile from 'components/Tile';

const projects = [
  { 
    src: '/nolack.png', 
    title: 'Nolack', 
    description: 'A website for connecting those in need of health products and those who seek to provide',
    id: 'project1',
  },
  { 
    src: '/otsukaichain.png', 
    title: 'OtsukaiChain', 
    description: 'A website for connecting those in need of health products and those who seek to provide',
    id: 'project2',
  },
  { 
    src: '/describe.png', 
    title: 'Nolack', 
    description: 'A website for connecting those in need of health products and those who seek to provide',
    id: 'project3',
  }
]

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shunya Watanabe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main>
        <section id="hero">
          <div id="hero-content">
            <h1 className="title">
              Shunya Watanabe <br/> Full-Stack Developer
            </h1>
            <h3>
              I strive to code beautifully and efficiently.
            </h3>
          </div>
          <img src="/shunya.jpg" id="personal-photo"/>
        </section>

        <section id="about-me">
          <header>
            <h5>About me</h5>
            <h2>Hello there! I’m Shunya Watanabe. I code to create something new!</h2>
          </header>
          <div>
            <p>
              Having graduated New York University Abu Dhabi with a Bachelor of Science in Computer Science, 
              I went on to become a Technical Consultant at PwC Digital in Dubai. I like to code both inside 
              and outside work, and I am most comfortable in using React for front-end and Firebase for 
              back-end.
            </p>
            <p>
              I like to learn about the latest technologies and use them to solve problems.
            </p>
          </div>
        </section>

        <section id="latest-works">
          <h2>Latest Works</h2>
          <div id="projects-container">
            {projects.map(project=>(
              <Tile 
                src={project.src}
                title={project.title}
                description={project.description} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
