import Card from "./card";
import quotes from'./quotes.json'
let Body = () => {
    
    return (
        <div className="cont">
            {
                quotes.map((quote , index) => <Card quote = {quote.quote} author = {quote.author} key = {index}/> )      
            }
        </div>
    )
}

export default Body;