
import './card.css';


function Card(props){
    return (
        <div className="card">
            <img src={props.image} className="cardImg" />
            <h3 className="title">{props.title}</h3>
            <p>{props.desc}</p>
            <a href={props.link} target={'_blank'}> {props.linkText}</a>
        </div>
    )
}

export default Card;