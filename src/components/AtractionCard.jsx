function AttractionCard({ name, category, description, rating }) {
    return (
        <div className="attraction-card">
            <div className="attraction-card__badge">{category}</div>
            <h3>{name}</h3>
            <p>{description}</p>
            <span className="attraction-card__rating">⭐ {rating}</span>
        </div>
    );
}
export default AttractionCard;