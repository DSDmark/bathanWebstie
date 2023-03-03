import { Navbar } from "./components/"
import { Note, Reel, Banner } from "./features/"
import { Layout } from "./utils/"

function App() {
  return (
    <>
      <Layout>
        <Note />
        <Navbar />
        <Reel />
        <Banner />
      </Layout>
    </>
  )
}

export default App
