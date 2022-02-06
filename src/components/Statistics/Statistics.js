import PropTypes from 'prop-types';
import GetRandomHexColor from './GetRandomHexColor';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    
    return <section className={s.statistics}>
        <h2 className={s.title}>{title}</h2>

        <ul className={s.list}>

            {stats.map(el => (
                <li key={el.id} className={s.item} style={{background: GetRandomHexColor()}}>
                    <span className={s.label}>{el.label}</span>
                    <span className={s.percentage}>{el.percentage}%</span>
                </li>
            ))}
            
        </ul>
    </section>
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
};


export default Statistics;