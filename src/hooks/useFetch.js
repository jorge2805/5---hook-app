import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({data:null, loading:true, error:null})

    const isMounted = useRef(true)
    useEffect(() => {
      return () => {
        isMounted.current = false
      }
    }, [])
    


    useEffect(() => {

        setState({data:null, loading:true, error:null});

      fetch(url)
      .then(response => response.json())
      .then( data => {        
        if (isMounted.current) {
          setState({
              data: data,
              loading: false,
              error: null
          }) 
        }
      });
    }, [url])
    

    return state;
}
