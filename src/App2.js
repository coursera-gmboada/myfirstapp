function App(props) {
  const currDate = new Date();
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}</h2>
      <h2>The Date now is {currDate.toLocaleDateString()}</h2>
      <h1>Hola, Mundito!</h1>
      <h2>La fecha de hoy es: {currDate.toLocaleDateString()}</h2>
      <h2>La hora actual es:  {currDate.toLocaleTimeString()}</h2>
    </div>
  );
}
export default App;