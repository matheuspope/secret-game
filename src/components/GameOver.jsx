import './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Você falhou!</h1>
      <h2>a sua pontuação foi: <span>{score}</span> </h2>
      <button onClick={retry} >Tente Novamente</button>
      
    </div>
  )
}

export default GameOver
