import { getJoke } from '../services/jokeapi.js'
import '../Layout.css';

const Programmer = (props) => {
    
    const generateJoke = () => {
        getJoke("https://v2.jokeapi.dev/joke/Programming?type=single")
    }


    return(
        <>
            <div className='content'>
                <h1>Programmer Jokes</h1>
                <button className='btn' onClick={generateJoke}>Generate Joke</button>
                <div className='jokeContainer'>
                     <div className="joke">Press the "Generate" Button for a Joke!</div>
                </div>
            </div>
        </>
    )

}

export default Programmer;