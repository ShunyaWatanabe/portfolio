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
        <Project title="TAMM">
          <h5>lorem</h5>
        </Project>
      </main>

      <Footer />
    </div>
  )
}
