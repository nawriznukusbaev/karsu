import Information from '../../Components/Information';
import './InformationSection.scss';

const bigPost = {
    type: 'big',
    title: 'Новости',
    heading: '«Встреча трёх поколений» на факультете Инностранных языков',
    text: '22 декабря 2022 года на факультете иностранных языков по инициативе советника декана по делам женщин М.Аметовой была проведена «Встреча трёх поколений». На мероприятии выступили со вступительной речью проректор по международным отношениям Т.Нурымбетов и декан факультета иностранных языков Дж.Курбанбаев с докладом об истории и достижениях факультета. На мероприятии приняли участие ветераны, проработавшие на протяжении многих лет на факультете, и студенты, окончившие факультет иностранных языков и ныне работающие в различных сферах нашей страны и студенты, обучающиеся в данное время.',
    imgSrc: './images/posts/big.jpg',
    date: '12 ноября 2020'
}

const smallPost = {
    type: 'small',
    title: 'абитуриенту',
    heading: 'Создан антибиотик на основе яда азиатской осы',
    text: 'Ключевым элементом яда  залежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементовзалежи редкоземельных элементов окружающую залежи редкоземельных элементовv окружающую залежи редкоземельных элементов',
    imgSrc: './images/posts/small.png',
    date: '12 ноября 2020'
}

function InformationSection() {
    return (
        <div className="container">
            <div className='information-section'>
                <h2 className='title'>НОВОСТИ</h2>
                <div className="information__block">
                    <ul className="information__types">
                        <li className='active'>Все <span>36</span></li>
                        <li>Абитуриенту <span>14</span></li>
                        <li>Переводнику <span>5</span></li>
                        <li>Новости <span>10</span></li>
                    </ul>
                </div>
                <div className="posts">
                    <div className="post-block">
                        <Information data={bigPost} />
                        <Information data={bigPost} />
                        <Information data={bigPost} />

                    </div>
                    <div className="post-block">
                        <Information data={bigPost} />
                        <Information data={bigPost} />
                        <Information data={bigPost} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InformationSection;

