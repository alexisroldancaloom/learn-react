export function Greeting({ title, name = "User", number }) {
  let edad = 2 + number;
  return (
    <h1>
      Componente de React {title} dice {name} edad: {edad}{" "}
      {edad > 2 ? "Mayor de edad" : "Menor de edad"}
    </h1>
  );
}
