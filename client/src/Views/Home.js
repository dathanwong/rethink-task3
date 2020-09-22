import React from 'react';
import { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import Axios from 'axios';
import { useEffect } from 'react';
import { Link, navigate } from '@reach/router';

const Home = (props) => {

    const [value, setValue] = useState("");
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [pageItems, setPageItems] = useState([]);

    useEffect(() =>{
        Axios.get('http://localhost:8000/api/data/page/'+page)
            .then((results) =>{
                console.log(results.data);
                setPageItems(results.data);
            })
            .catch(err =>{
                console.log(err);
            })
    }, [page])

    //Handle the search
    function handleSubmit(e){
        e.preventDefault();
        Axios.get('http://localhost:8000/api/data/name/'+value)
            .then((result) =>{
                console.log(result);
                if(result.data != null){
                    navigate('http://localhost:3000/'+result.data._id);
                }else{
                    alert("Data not found");
                }
            })
    }

    function nextPage(){
        setPage(page+1);
    }

    function prevPage(){
        if(page > 0) setPage(page-1);
    }

    //Get new autocomplete options
    function onChangeHandler(e){
        setValue(e.target.value);
        Axios.post('http://localhost:8000/api/data/suggestions', {search: e.target.value})
            .then(result =>{
                setItems(result.data);
            })
            .catch(err =>{
                console.log(err);
            })
    }

    return (
        <div className="container">
            <div className="row my-3">
                <form className="col" onSubmit={handleSubmit}>
                        <Autocomplete
                            getItemValue={(item) => item.name}
                            items={items}
                            renderItem={(item, isHighlighted) =>
                                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.name}
                                </div>
                            }
                            value={value}
                            onChange={(e) => onChangeHandler(e)}
                            onSelect={(val) => setValue(val)}
                        />
                        <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>
            <div className="row my-3">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        pageItems.map((data) => 
                            <tr>
                                <td>
                                    <Link to={"/"+data._id}>{data.name}</Link>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div className="row my-3 justify-content-between">
                {
                    page > 0 ? <button onClick={prevPage} className="col-1 btn btn-secondary">Prev</button> : <button className="col-1 btn btn-secondary" disabled>Prev</button>
                }
                {
                    pageItems.length === 0 ? <button disabled onClick={nextPage} className="col-1 btn btn-secondary">Next</button> : <button onClick={nextPage} className="col-1 btn btn-secondary">Next</button>
                }
                
            </div>
        </div> 
        
        
        

     );
}
 
export default Home;