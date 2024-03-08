import './body_card.css';
let Card = (props) => {
    let obj = {...props}
    console.log(obj);
    return (
        <div className="card">
            <h2 className='quote'>{obj.quote}</h2>
            <p className='author'>{obj.author}</p>
        </div>
    )
}

export default Card;