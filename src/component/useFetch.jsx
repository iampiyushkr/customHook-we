import { useEffect, useState } from "react";

export function useFetch(url) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
                setIsLoading(false)
            })
            .catch((err) => {
                setIsError(true)
                setIsLoading(false)
        })
    }, [url])
    return {
        isLoading,
        isError,
        data
    }
}