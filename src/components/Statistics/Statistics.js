const Statistics = ({title, stats}) => {
    
    return <section class="statistics">
        <h2 class="title">{title}</h2>

        <ul class="stat-list">

            {stats.map(el => (
                <li key={el.id} class="item">
                    <span class="label">{el.label}</span>
                    <span class="percentage">{el.percentage}%</span>
                </li>
            ))}
            
        </ul>
    </section>
};

export default Statistics;