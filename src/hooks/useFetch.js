import { useState, useEffect } from 'react'

// define custom hook for fetch
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const controller = new AbortController()

        const fetchData = async () => {

            // indicate fetch is pending
            setIsPending(true)

            try {
                // try and fetch
                console.log('URL : ' + url)
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal: controller.signal
                })
                console.log(response)

                // check response
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const json = await response.json()

                // fetch has completed
                setIsPending(false)

                console.log(json)
                
                // update state
                setData(json)
                
                // clear errors
                setError(null)
            
            } catch (err) {
            
                if (err.name === "AbortError") {
                    // failed so no longer pending
                    setIsPending(false)

                    console.log('fetch aborted')
                }
                
                else {
                    // failed so no longer pending
                    setIsPending(false)

                    // set error
                    setError('Error fetching data')

                    console.log(err.message)
                }

            }

        }

        fetchData()

        // clean-up function, run if a component using this hook is unloaded
        return () => {
            controller.abort()
        }

    }, [url]) // useEffect updates when url is changed

    return { data, isPending }
}