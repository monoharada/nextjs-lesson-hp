// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

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
