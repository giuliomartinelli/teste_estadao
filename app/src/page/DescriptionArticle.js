import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

function DescriptionArticle() {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const url = window.location.origin+'/';

  useEffect(() => {
      const fetchData = async () => {
      try {
          const response = await fetch(`http://localhost:3020/articles/slug/${slug}`);
          console.log(response)
          if (!response.ok) {
          throw new Error('Erro ao buscar os dados da API');
          }
          const jsonData = await response.json();
          
          setData(
            { 
              ...jsonData,
              createdAt: format(new Date(await jsonData.createdAt), 'dd/MM/yyyy')
          });
      } catch (error) {
          console.error(error);
      }
      };

      fetchData();
  }, []);

  return (
    <section key={slug} className="article">
      <h3>{data.title}</h3>
      <p>Criado em: {data.createdAt}</p>
      <p> 
        URL: {url+data.slug}
      </p>
      <p> 
        {data.description}
      </p>
      <a href={url} className='prev'>voltar</a>
    </section>
  );
}

export default DescriptionArticle;
