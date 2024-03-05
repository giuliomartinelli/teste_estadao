import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

function List() {
    
    const [data, setData] = useState([]);
    const url = window.location.origin+'/';
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3020/articles/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Erro ao buscar os dados da API');
            }


            const list = await fetch('http://localhost:3020/articles');
            if (!list.ok) {
                throw new Error('Erro ao buscar os dados da API');
            }
            const jsonList = await list.json();
            setData(jsonList);
        } catch (error) {
            console.error(error);
        }
      };

      const handleCreate = async () => {
        navigate('/create')
      };

      const handleUpdate = async (id) => {
        navigate(`/update/${id}`)
      };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3020/articles');
            if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error(error);
        }
        };
        fetchData();
    }, []);

    return (
      <div className="list-container">
        <h2>CRUD - Notícias</h2>
        <button onClick={() => handleCreate()}>Criar</button>
        <div className="list">
          {data.map(item => (
            <div key={item._id} className="list-item">
              
                <div>
                    <h3>{item.title}</h3>
                    <p>Criado em: {format(new Date(item.createdAt), 'dd/MM/yyyy')}</p>
                    <p>{url+item.slug}</p>
                </div>
                <div className="buttons">
                    <button className='update' onClick={() => handleUpdate(item._id)}>Atualizar</button>
                    <button className='delete' onClick={() => handleDelete(item._id)}>Deletar</button>
                </div>

            </div>
          ))}
        </div>
      </div>
  );
}

export default List;
