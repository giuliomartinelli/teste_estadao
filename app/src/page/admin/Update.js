import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 

function Update() {
    const { id } = useParams();
    const [formData, setFormData] = useState({ title: '', description: '', slug: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const url = window.location.origin+'/';

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!formData.title || !formData.description || !formData.slug) {
            setErrors({ message: 'Todos os campos são obrigatórios' });
            return;
        } else {
            try {
                const response = await fetch(`http://localhost:3020/articles/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados da API');
                }   
            } catch (error) {
                console.error(error);
            }

            setFormData({ title: '', description: '', slug: '' });
            setErrors({});
            navigate('/crud');
        }
    };


    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3020/articles/${id}`);

            if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API');
            }
            const jsonData = await response.json();
            setFormData(jsonData);
        } catch (error) {
            console.error(error);
        }
        };
  
        fetchData();
    }, []);
  
  

    return (
    <div className="form-container">
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        {errors.message && <div className="error-message">{errors.message}</div>}
        <label>
          Título:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          URL: <small>{url+formData.slug}</small>
          <input type="text" name="slug" value={formData.slug} onChange={handleChange} />
        </label>
        <label>
          Descrição:
          <textarea value={formData.description} name="description"  onChange={handleChange}>
          </textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
      <a href={url+'crud'}>voltar</a>
    </div>
  );
}

export default Update;
