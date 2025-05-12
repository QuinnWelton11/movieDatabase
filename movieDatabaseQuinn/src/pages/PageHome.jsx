import { useEffect } from "react"
import { useState } from "react"
import { getPopularMovies } from "../utilities/api"

function PageHome() {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        getPopularMovies()
        .then((date) => {
            console.log(data);
        })
    }, [])

  return (
    <div>PageHome</div>
  )
}

export default PageHome