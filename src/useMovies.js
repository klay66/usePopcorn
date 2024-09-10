import React, { useEffect, useState } from 'react'
const KEY = "68ad5927";

export default function useMovies(query, callback) {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(
        function () {
            callback?.()

            const controller = new AbortController();

            async function fetchMovies() {
                try {
                    setIsLoading(true)
                    setError("")
                    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    )

                    if (!res.ok) throw new Error("something went wrong witch fetching movies")

                    const data = await res.json();
                    if (data.Response === "False") throw new Error
                        ("movie not found")
                    setMovies(data.Search)
                    setError("")

                } catch (err) {

                    if (err.name !== "AbortError") {
                        console.log(err.message)
                        setError(err.message)
                    }
                } finally {
                    setIsLoading(false)
                }
            }

            if (!query.length) {
                setMovies([])
                setError("")
                return
            }

            // handleCloseMovie()
            fetchMovies()

            return function () {
                controller.abort()
            };

        }, [query])
    return { isLoading, movies, error }
}
