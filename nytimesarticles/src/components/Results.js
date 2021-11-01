import React, {useEffect, useState}from 'react';
import './css/Styles.css';

const Results= ()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=wOvranaebS0fZYSYy6oPnPLhIKk4kALO')
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data.results);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
      }, []);
    
      if (loading) {
        return <p data-testid="content">Data is loading...</p>;
      }
    
      return (
        <div className='card'>
         <h2>NY Times Most Read</h2>
          {data.map((item) => (
            <div className='container'>
            <div key={item.id} style={{margin:'1rem'}}>{item.title}</div>
            <div key={item.id} style={{display:'inline-block',marginLeft:40, color:'grey'}}>{item.byline}</div>
            <div key={item.id} style={{display:'inline-block',marginLeft:40, color:'grey'}}>{item.published_date}</div>
            </div>
          ))}
        </div>
      );
    
};

export default Results;