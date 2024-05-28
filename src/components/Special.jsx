import { getJoke } from '../services/jokeapi.js'
import '../Layout.css';
import { useState } from 'react';

const Special = (props) => {

    const [nsfwActive, setnsfwActive] = useState(false);
    const [religiousActive, setreligiousActive] = useState(false);
    const [racismActive, setracismActive] = useState(false);
    const [sexismActive, setsexismActive] = useState(false);

    const generateJoke = () => {
        console.log("Function: " + buildFlags())
        
        getJoke("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=" + buildFlags() + "&type=single")
    }

    const nsfwChange = () =>
    {
        nsfwActive ? setnsfwActive(false) : setnsfwActive(true);
    }

    const religiousChange = () =>
    {
        religiousActive ? setreligiousActive(false) : setreligiousActive(true);
    }

    const racismChange = () =>
    {
         racismActive ? setracismActive(false) : setracismActive(true);
    }

    const sexismChange = () =>
    {
        sexismActive ? setsexismActive(false) : setsexismActive(true);
    }

    const buildFlags = () => {

        let flags = "";

        if(!nsfwActive)
            {
                flags += "nsfw,"
            }
        if(!religiousActive)
            {
                flags += "religious,"
            }
        
            flags +="political,"
        if(!racismActive)
            {
                flags += "racist,"
            }
        if(!sexismActive)
            {
                flags += "sexist,"
            }

            flags = flags.substring(0, flags.length-1)

            return flags

    }





    return(
        <>
            <div className='content'>
                <h1>"Special" Jokes</h1>
                <button className='btn' onClick={generateJoke}>Generate Joke</button>
                <div className='jokeContainer'>
                     <div className="joke">Press the "Generate" Button for a Joke!</div>
                </div>

                <div className='flags'>

                    <div>
                        <button className='btnflag' onClick={nsfwChange}>{nsfwActive ? "NSFW: Yes" : "NSFW: No"}</button>
                        
                    </div>

                    <div>
                        <button className='btnflag' onClick={religiousChange}>{religiousActive ? "Religious: Yes" : "Religious: No"}</button>
                    </div>

                    <div>
                        <button className='btnflag' onClick={racismChange}>{racismActive ? "Racist: Yes" : "Racist: No"}</button>
                    </div>

                    <div>
                        <button className='btnflag' onClick={sexismChange}>{sexismActive ? "Sexist: Yes" : "Sexist: No"}</button>
                    </div>


                </div>                
            </div>
        </>
    )

}

export default Special;