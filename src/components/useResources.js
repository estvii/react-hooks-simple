import { useState, useEffect} from 'react';
import axios from 'axios';

const useResources = (resource) => {

    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        
        setResources(response.data);
    };

    useEffect(() => {
        fetchResource(resource)
    }, [resource])

    // Alternatively you can do this 
    // Which is similar to (() => console.log('hi))() involves the function right away
    // useEffect(() => {
    //     (async (resource) => {
    //         const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    //         setResources(response.data);
    //     })(resource);
    // }, [resource])

    return resources;

}

export default useResources;
