import{Link} from 'react-router-dom'
function Logo(){
    return(
        <Link to='/' className="header__logo-link header__logo-link--active">
            <img className="header__logo-link" src="img/logo.svg" alt="6 cities logo" width ="81"/>
        </Link>
    );
}
export {Logo};