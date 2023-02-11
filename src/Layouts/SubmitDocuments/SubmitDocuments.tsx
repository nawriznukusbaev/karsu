import './SubmitDocuments.scss';


function SubmitDocuments() {
    return (
        <div className='submit-documents'>
            <div className="container">
                <div className="documents__info">
                    <h2 className="title">ФАКУЛЬТЕТЫ</h2>
                    <h3 className="alert">У нас имеется 16 факультетов и 57 кафедры</h3>
                    <div className="input-group">
                        <input type="search" name="search" id="search" placeholder='Поиск' />
                        <p className="result">Найдено 6 факультетов</p>
                    </div>
                </div>

                <div className="departures">
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <h2 className="departure__title">Факультет иностранных языков</h2>
                            <p className="departure__extra">Факультет создан в 1978 год</p>
                            <a href="#" className="departure__link">5 кафедры</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <h2 className="departure__title">Факультет иностранных языков</h2>
                            <p className="departure__extra">Факультет создан в 1978 год</p>
                            <a href="#" className="departure__link">5 кафедры</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div><div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                    <div className="departure__info">
                        <h2 className="departure__title">Факультет иностранных языков</h2>
                        <p className="departure__extra">Факультет создан в 1978 год</p>
                        <a href="#" className="departure__link">5 кафедры</a>
                    </div>
                    <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                </div><div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                    <div className="departure__info">
                        <h2 className="departure__title">Факультет иностранных языков</h2>
                        <p className="departure__extra">Факультет создан в 1978 год</p>
                        <a href="#" className="departure__link">5 кафедры</a>
                    </div>
                    <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                </div><div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                    <div className="departure__info">
                        <h2 className="departure__title">Факультет иностранных языков</h2>
                        <p className="departure__extra">Факультет создан в 1978 год</p>
                        <a href="#" className="departure__link">5 кафедры</a>
                    </div>
                    <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                </div>
                    <div className="departure" style={{ backgroundImage: 'url(./images/fon_departure/1.png)' }}>
                        <div className="departure__info">
                            <h2 className="departure__title">Факультет иностранных языков</h2>
                            <p className="departure__extra">Факультет создан в 1978 год</p>
                            <a href="#" className="departure__link">5 кафедры</a>
                        </div>
                        <img src='./images/hero-avatar.svg' alt='univ' className="departure__univ" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SubmitDocuments;