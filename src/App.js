import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";

function App() {
  // definir la categoría
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const llamadoApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${categoria}&apiKey=77ce03b4cf3b48468a8e3831bf25b50f`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    llamadoApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />

      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
