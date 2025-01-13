export default function CardComponent({ data }) {
    return (
        <>
            <div className="card m-4">
                <img src={data.thumbnail} className="card-img-top" alt="img libro" />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description.substring(0, 50) + "..."}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}