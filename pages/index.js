import Layout from "../components/Layout";

import httpAuthCheck from '../util/httpAuthCheck'

export async function getServerSideProps(ctx) {
  const {req, res} = ctx
  await httpAuthCheck(req, res)

  if (!req.headers.authorization) {
    res.end('<html>Unauthorized</html>')
  }
  return {
    props: {}
  }
}

export default function Home() {
  return (
   <Layout title="Home">
    <p className="text-4xl">Hello Next.js</p>
   </Layout>

  )
}
