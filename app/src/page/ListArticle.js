import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

function ListArticle() {
    
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState([]);
    const url = window.location.origin+'/';
    useEffect(() => {
        setMsg(false);
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3020/articles');
            console.log(response)
            if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API');
            }
            const jsonData = await response.json();
            
            if(!jsonData[0]){ 
              setMsg(true);
            }  
            setData(jsonData);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="list-container">
          <h2>Notícias</h2>
          {msg && <p>Nenhuma notícia cadastrada</p>}
          <div className="list">
            {data.map(item => (
              <div key={item._id} className="list-item">
                <a href={url+item.slug}>
                <div>
                  <h3>{item.title}</h3>
                  <p>Criado em: {format(new Date(item.createdAt), 'dd/MM/yyyy')}</p>
                  <p>{url+item.slug}</p>
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
  );
}

export default ListArticle;
