import { getJoke } from '../services/jokeapi.js'
import '../Layout.css';

const Pun = (props) => {
    
    const generateJoke = () => {
        getJoke("https://v2.jokeapi.dev/joke/Pun?type=single")
    }


    return(
        <>
            <div className='content'>
                <h1>Pun Jokes</h1>
                <button className='btn' onClick={generateJoke}>Generate Joke</button>
                <div className='jokeContainer'>
                     <div className="joke">Press the "Generate" Button for a Joke!</div>
                </div>
                
            </div>
        </>
    )

}

export default Pun;