import React from 'react'
import './pokemonCard.css'

const PokemonCard = ({ name, image, types }) => {

    const typeHandler = () => {
        if (types[1]) {
          return <>
                    <div className="tipo-1">
                        {types[0].type.name}
                    </div> 
          
                    <div className="tipo-2">
                        {types[1].type.name}
                    </div></>
        }
        return <div className="tipo-1">
                    {types[0].type.name}
                </div>
      };

    const corFundo = () => {
        if(types[0].type.name == 'fire') {
            return <div className="imagem-fogo"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'grass') {
            return <div className="imagem-grama"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'water') {
            return <div className="imagem-agua"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'bug') {
            return <div className="imagem-bug"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'normal') {
            return <div className="imagem-normal"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'poison') {
            return <div className="imagem-toxico"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'electric') {
            return <div className="imagem-eletrico"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'ground') {
            return <div className="imagem-terra"><img src={image} alt="pokemon" /></div>
        } else if (types[0].type.name == 'fairy') {
            return <div className="imagem-fada"><img src={image} alt="pokemon" /></div>
        }
    }


  return (
    <>
        <div className="container-card">
            {corFundo()}
            <div className="dados">
                <h2>{name}</h2>
                <div className="tipos">
                    {typeHandler()}
                </div>
            </div>
        </div>
    </>
  )
}

export default PokemonCard