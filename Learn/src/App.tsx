export default function App() {
  const planet = [
    { name: "mars", isGasPlanet: true },
    { name: "jupiter", isGasPlanet: false }
  ];
  return (
    <div>
      {planet.map((planet, key) => {
        return <h1 className="block"> {planet.isGasPlanet && planet.name}</h1>;
      })}
    </div>
  );
}
