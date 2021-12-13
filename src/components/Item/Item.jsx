export default function Item({title,status,description}) {
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{status}</p>
            <p>{description}</p>
        </div>
    )
}
