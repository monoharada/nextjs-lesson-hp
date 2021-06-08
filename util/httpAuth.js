import httpAuthCheck from './httpAuthCheck'
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