import { useEffect, useState} from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const URL2 = "https://corsanywhere.herokuapp.com/www.thecocktaildb.com/api/json/v1/1/random.php"

    useEffect(() => {
        setLoading(true);
        axios.get(url).then((response) => {
            setData(response.data);
        }).catch(err => {
            setError(err)
        }).finally(() => {
            setLoading(false)
        });
    }, [url])

    const refetch = () => {
        axios.get(URL2).then((response) => {
            setData(response.data);
        }).catch(err => {
            setError(err)
        });
    }
    
    return { data, loading, error, refetch };
}

export default useFetch