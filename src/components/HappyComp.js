import './HappyComp.css';
import logo from '../boo_image.gif';
import FavoriteIcon from "@mui/icons-material/Favorite";

const HappyComp = (props) => {

    return <div className='welcome-wrapper'>
        <div className="welcome-card">
            <h1><FavoriteIcon
                sx={{
                    color: "#ef1fcc",
                    fontSize: 36,
                    filter: "drop-shadow(0 4px 6px rgba(194,24,91,0.4))"
                }}
            />YAY..!!<FavoriteIcon
                    sx={{
                        color: "#ef1fcc",
                        fontSize: 36,
                        filter: "drop-shadow(0 4px 6px rgba(194,24,91,0.4))"
                    }}
                />
            </h1>
            <p className='matter'>Best Descsion Ever</p>
            <div className="happy-card">
                <img src={logo} alt="happy" className='booImg' />
            </div>
            <h1>Love You Bujji</h1>
        </div>
    </div>
}

export default HappyComp;