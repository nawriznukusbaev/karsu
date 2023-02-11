import './HeroBanner.scss'

function HeroBanner() {
    return (
        <div className="hero-banner" style={{backgroundImage: "url(/images/fon-800/city/group_184_5.png)"}}>
            <h1 className='hero-title' >
                Виды образовании в нашем университете
                <div className='share__btn'>
                    <img src="./images/share.svg" alt="share" />
                </div>
            </h1>
            <p className="hero-text">
                У нас можно учиться по очным, заочным  и программам дистанционного обучения
            </p>
            <div className="hero-info">
                <ul className='hero-stat'>
                    <li>Контракт от 10 млн сумов</li>
                    <li>от 4 лет</li>

                </ul>

            </div>
        </div>
    )
}

export default HeroBanner;