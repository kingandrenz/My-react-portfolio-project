export default function Suggestion({ data, handleClick}) {
  return (
    <ul className="suggestions">
      {data.map((item, index) => (
        <li key={index} onClick={handleClick}>{item}</li>
      ))}
    </ul>
  );
}
