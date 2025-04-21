
import { useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError()

  return (
    <>
      <header></header>
      <main>
        <h3>{error.status}</h3>
        <h3>{error.message}</h3>
        <h3>{error.statusText}</h3>
      </main>
    </>
  )
}

export default Error