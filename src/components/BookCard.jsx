export default function BookCard(props) {
  
  return (
    <div data-testid="book-card" id="book" className="book-card">
      <img src={props.img} alt={""} />
      <b>
        <div data-testid="book-card-title" id="title">
          {props.title}
          <span>{props.year}</span>
        </div>
      </b>
      <div data-testid="book-card-author" id="author">{props.author}</div>
      <div data-testid="book-card-price" id="price">{props.price}</div>
    </div>
  );
}
