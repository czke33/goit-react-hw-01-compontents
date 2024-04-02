import style from './statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomColor } from './getRandomColor';




function Statistics({ title, stats }) {
    return (
        <>
        <section className={style.statistics}>
    <h2 className={style.title}>{ title}</h2>
    <ul className={style.statList}>
                
                    {stats.map((stat) => 
                    <>
                    
                            <li className={style.item}
                                key={stat.id}
                                style={{ backgroundColor: getRandomColor() }} >
                                                                    
                <span className={style.label}>{stat.label }</span>
                        <span className={style.percentage}>{stat.percentage}%</span> 
                        </li> 
                        </>)}
                      </ul>
</section>
    
    </>)
};


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics