import React from 'react';

function Home() {
    const backgroundImageStyle = {
        backgroundImage: `url('./src/images/givemegold-10.jpg')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center center',
        // You can add more background properties or styles here as needed
    };

    return (
        <div className="flex justify-center items-center" style={backgroundImageStyle}>
            <img src="./src/images/gmg_metal_logo.png" />
        </div>
    );
}

export default Home;
