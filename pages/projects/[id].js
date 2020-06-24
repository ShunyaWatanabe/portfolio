import Head from 'next/head'
import Header from 'components/Header';
import Footer from 'components/Footer';
import Sidebar from 'components/Sidebar';
import Project from 'components/Project';

export default function Projects(props) {
  const { title, description, src, children } = props;
  return (
    <div className="container" id="projects-page">
      <Head>
        <title>Project: { title } </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header hideNavLinks />

      <main>
        <Sidebar />
        <Project 
          title={title} 
          description={description} 
          src={src}
        >
          { children }
        </Project>
      </main>

      <Footer />
    </div>
  )
}


export async function getStaticPaths() {
  // Return a list of possible value for id
  return {
    paths: ['tamm', 'nolack', 'otsukaichain', 'describe'].map(id => {
      return {
        params: {
          id,
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  let props;
  switch(params.id) {
    case 'nolack': 
      props = {
        title: 'Nolack',
        src: '/nolack/main.png'
      }
      break;
    case 'describe': 
      props = {
        title: 'Describe',
        src: '/describe/main.png'
      }
      break;
    case 'otsukaichain':
    default:
      props = {
        title: 'OtsukaiChain',
        src: '/otsukaichain/main.png'
      }
      break;
  }
  return {
    props,
  }
}