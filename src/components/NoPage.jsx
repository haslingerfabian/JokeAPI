import '../Layout.css';
import Fire from '../images/Fire.jpg'

function NoPage(props) {
    return(
        <div>
            <h1>404 Page not found</h1>
            <img src={Fire} alt="Fire" />
        </div>
    )
}

export default NoPage