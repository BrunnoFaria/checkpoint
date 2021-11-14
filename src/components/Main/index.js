import { Component } from "react";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      projetos: [
        {
          id: 1,
          titulo: "Desenvolvedor Web, Tech Consulting. — Campinas, SP",
          imagem: "https://www.tuacarreira.com/wp-content/uploads/2019/09/portfolio-1200x900.jpg",
          descricao: '– Liderou o desenvolvimento e adoção do React para a dashboard de um web app. – Desenvolvimento Full Stack utilizando Node.js, Express, React, e MongoD'
        },
        {
          id: 2,
          titulo: "Desenvolvedor Web, Tech Consulting. — Campinas, SP",
          imagem: "https://www.tuacarreira.com/wp-content/uploads/2019/09/portfolio-1200x900.jpg",
          descricao: 'Desenvolvimento Full Stack utilizando Node.js, Express, React, e MongoD'
        },
        {
          id: 3,
          titulo: "Desenvolvedor Web, Tech Consulting. — Campinas, SP",
          imagem: "https://www.tuacarreira.com/wp-content/uploads/2019/09/portfolio-1200x900.jpg",
          descricao: 'Parte da equipe de desenvolvimento front-end (AngularJS web app)'
        },
        {
          id: 4,
          titulo: "Desenvolvedor Web, Tech Consulting. — Campinas, SP",
          imagem: "https://www.tuacarreira.com/wp-content/uploads/2019/09/portfolio-1200x900.jpg",
          descricao: 'Desenvolvido e mantido um repositório de componentes reutilizáveis'
        },
      ]
    }
  }

  render() {
    return (
      <section className="container-lg mx-auto d-flex justify-content-between flex-wrap my-4">
        {this.state.projetos.map(projeto => (
          <div key={projeto.id} className="card my-2" style={{width: '16rem'}}>
            <img src={projeto.imagem} className="card-img-top" alt="..."/>
            <h5 className="text-center mt-1">{projeto.titulo}</h5>
            <div className="card-body bg-dark text-light">
              <p className="card-text">{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}