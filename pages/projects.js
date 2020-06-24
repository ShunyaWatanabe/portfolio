import Head from 'next/head'
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Project from 'components/Project';

export default function Projects() {
  return (
    <div className="container" id="projects-page">
      <Head>
        <title>Shunya Watanabe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header hideNavLinks />

      <main>
        <Sidebar />
        <Project 
          title="OtsukaiChain" 
          description="Description here" 
          src="/otsukaichain/main.png"
          >
          <h1>more text</h1>
          <h3>Exercitation ullamco officia ex aliquip non magna ut nisi ex Lorem nisi. Id qui dolor ut anim ea. Occaecat duis consectetur laborum adipisicing nisi. Proident non magna officia id consectetur non adipisicing labore minim fugiat Lorem dolore occaecat.</h3>
        </Project>
        title, description, src, children
      </main>

      <Footer />
    </div>
  )
}
