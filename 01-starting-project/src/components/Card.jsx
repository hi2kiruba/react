import "./Card.css";
export default function Card({ name, children, mail, description }) {
  return (
    <article className="card">
      <h2>{name}</h2>
      <p>{children}</p>
      <p>
        {" "}
        <a href="{mail}">{description}</a>
      </p>
    </article>
  );
}
