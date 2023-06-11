import { useState, useEffect} from 'react';

const useFetch = (url)=>{
    const [data, setData] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url,{signal : abortCont.signal})

        .then(res => {
            if(res.ok == false){
                throw Error('could not fetch data for that resource');
                setError()
            }
            return res.json();
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
            setError(null);
        })
        .catch((err)=>{
            if(err.name == 'AbortError')
            {
                console.log('Fetch Aboorted');
            }
            else{
                setError(err.message);
                setLoading(false);
            }
        })

        return ()=>{
            console.log("Cleanup");
            abortCont.abort(); 
        }
    },[url]);

    return {data, isLoading, error};
}

export default useFetch;