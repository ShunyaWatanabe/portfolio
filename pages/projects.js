import Head from 'next/head'
import Header from 'components/Header';
import Footer from 'components/Footer';

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Shunya Watanabe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <h1 className="title">
          Projects page
        </h1>
      </main>

      <Footer />
    </div>
  )
}
