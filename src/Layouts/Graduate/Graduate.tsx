import './Graduate.scss';
import { useState } from 'react';

function Graduate() {
    const [activeTab, setActiveTab] = useState(1);

    const handleClick = (e: React.MouseEvent) => {
        const value = (e.target as HTMLLIElement).value;
        setActiveTab(value);
    }

    return (
        <div className="container">
            <div className='graduate'>
                <div className="graduate__info">
                    <h2 className='graduate__title'>Вы получите — диплом гособразца</h2>
                    <p className="graduate__text">У нас можно получить двойную диплом по программу Double degree</p>
                    <ul className="graduate__types">
                        <li value={1} onClick={handleClick} className={`${activeTab === 1 ? 'active' : null}`}>Высшее</li>
                        <li value={2} onClick={handleClick} className={`${activeTab === 2 ? 'active' : null}`}>Магистр</li>
                        <li value={3} onClick={handleClick} className={`${activeTab === 3 ? 'active' : null}`}>Double degree</li>
                    </ul>
                </div>
                <div className="graduate__img">
                    <img src="./images/diplom.jpg" alt="diplom" />
                </div>
            </div>
        </div>
    )
}

export default Graduate;