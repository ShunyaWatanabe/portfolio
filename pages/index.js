import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shunya Watanabe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Home page
        </h1>
      </main>

      <footer>
        <h5>Created by Shunya Watanabe</h5>
      </footer>
    </div>
  )
}
