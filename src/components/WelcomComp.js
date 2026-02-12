import React, { useState } from "react";
import './WelcomeComp.css';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from "@mui/material/Button";


const WelcomeComp = (props) => {

    const [hasMoved, setHasMoved] = useState(false);
    const [noPos, setNoPos] = useState({ top: '0px', left: '0px' });

    const moveNoButton = () => {
        if (!hasMoved) setHasMoved(true);

        // Generate random coordinates within the box bounds
        const randomTop = Math.floor(Math.random() * 80 + 5) + '%';
        const randomLeft = Math.floor(Math.random() * 80 + 5) + '%';

        setNoPos({ top: randomTop, left: randomLeft });
    };

    return <div className="welcome-wrapper">
        <div className="welcome-card">
            <h1>Nicky,</h1>
            <h1>Will you be my valentine ?  <FavoriteBorderOutlinedIcon
                sx={{
                    color: "#ef1fcc",
                    fontSize: 36,
                    filter: "drop-shadow(0 4px 6px rgba(194,24,91,0.4))"
                }}
            /><FavoriteIcon
                    sx={{
                        color: "#ef1fcc",
                        fontSize: 36,
                        filter: "drop-shadow(0 4px 6px rgba(194,24,91,0.4))"
                    }}
                />
            </h1>
            <p className='hint'>Choose Wisely. (The "No" button is... Shy)</p>


            <div className="button-box">
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'rgba(203, 31, 66, 0.68)', // Dark Pink-Red (Crimson)
                        color: '#fff',
                        px: 5,
                        py: 1.5,
                        fontSize: '1.1rem',
                        borderRadius: '12px',
                        marginRight: '5px',
                        backdropFilter: 'blur(10px)', // The glass effect
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 4px 15px rgba(245, 44, 84, 0.3)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: 'rgba(220, 20, 60, 0.7)', // Brighter on hover
                            transform: 'scale(1.1)',
                            boxShadow: '0 0 25px rgba(220, 20, 60, 0.6)',
                        }
                    }}
                    onClick={() => props.accept()}>
                    Yes
                </Button>

                <Button
                    variant="outlined"
                    className="btn-no"
                    onMouseEnter={moveNoButton}
                    sx={{
                        px: 5,
                        py: 1.5,
                        position: hasMoved ? 'absolute' : 'relative',
                        top: hasMoved ? noPos.top : 'auto',
                        left: hasMoved ? noPos.left : 'auto',
                        transition: hasMoved ? 'all 0.2s ease-out' : 'none',
                        fontSize: '1.1rem',
                        border: '1px solid rgba(115, 102, 102, 0.96)',
                        borderRadius: '12px',
                        color: '#000',               // Black text
                        backgroundColor: 'transparent', // No background
                        fontWeight: '10px',
                        textTransform: 'none',
                    }}
                >
                    No
                </Button>
            </div>
        </div>
    </div >
}

export default WelcomeComp;