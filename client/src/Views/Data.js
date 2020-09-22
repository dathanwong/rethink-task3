import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const Data = (props) => {

    const [data, setData] = useState(null);

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/data/'+props.id)
            .then((results) =>{
                console.log(results.data);
                setData(results.data);
            })
    }, [props.id])

    if(data === null) return <div>Loading...</div>;

    return ( 
        <div className="container">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data._id}</td>
                        <td>{data.name}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}
 
export default Data;