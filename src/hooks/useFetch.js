import { useState, useEffect } from "react";

export default function useFetch(url, options) {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {


            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResult(json);
                setLoading(false);
            } catch (error) {
                setError(Error);
                setLoading(false);
            }

        })();


    }, [options, url]);
    return { loading, result, error };
}