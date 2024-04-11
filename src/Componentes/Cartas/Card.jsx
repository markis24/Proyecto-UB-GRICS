import './Card.css'

function Card({title}) {

    return (
        <div className="item">
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium deserunt quidem, aliquid deleniti
                voluptatibus debitis?</p>
        </div>
    )
}

export default Card