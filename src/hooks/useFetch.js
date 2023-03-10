import { useState, useEffect } from 'react'

import { log } from '../utils/logger'

// define custom hook for fetch
export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        log('useFetch url - ', url)
        
        const controller = new AbortController()

        const fetchData = async () => {

            // indicate fetch is pending
            setIsPending(true)

            try {
                // try and fetch
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    signal: controller.signal
                })

                log('fetch response - ', response)

                // check response
                if (!response.ok) {
                    throw new Error(response.statusText)
                }

                const json = await response.json()

                // fetch has completed
                setIsPending(false)

                log('fetch json - ', json)
                
                // update state
                setData(json)
                
                // clear errors
                setError(null)
            
            } catch (err) {
            
                if (err.name === "AbortError") {
                    log('fetch aborted')
                }
                
                else {
                    // failed so no longer pending
                    setIsPending(false)

                    // set error
                    setError('Error fetching data')

                    log('fetch error - ' + err.message)
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
