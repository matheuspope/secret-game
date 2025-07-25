import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
      <h1>secret word</h1>
      <p>clique no botão abaixo para começar a jogar</p>
      <button onClick={startGame} >começar o jogo</button>
    </div>
  )
}

export default StartScreen
