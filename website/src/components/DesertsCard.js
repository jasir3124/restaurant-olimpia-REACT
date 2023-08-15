export default function DesertsCard(props) {
    const { name } = props;
    return (
        <div className="DesertsCard">
            <h1>{name}</h1>
        </div>
    );
}