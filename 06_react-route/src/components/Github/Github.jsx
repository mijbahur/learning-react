// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState({});

    // useEffect(() =>{
    //     async function fetchGithubUser() {
    //         const response = await fetch("https://api.github.com/users/mijbahur");
    //         const result = await response.json();

    //         setData(result)            
    //     }
    //     fetchGithubUser()              
    // }, [])
    // console.log(data);
    // useEffect (() => {
    //     fetch('https://api.github.com/users/mijbahur')
    //     .then(response => response.json())
    //     .then(data => {
            console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return (
        <div className='text-center m-4 text-3xl'>
            Github Follower: {data?.followers}
        </div>
    );
};

export default Github;