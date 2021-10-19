// Ejemplo 1 de formulario NO controlados
const App = () => {

  const submit = (e) => {
    e.preventDefault();
    const data = Array.from(new FormData(e.target))
    // Object.fromEntries toma a un arreglo y toma al primer valor 
    // como key del objeto y el resto en sus valores
    console.log(Object.fromEntries(data))
  }
  return (
    <form onSubmit={ submit }>
      <div>
        <span>
          lala
        </span>
        <input type="text" name='campo' />
      </div>
      <input type="text" name='campo2' />
      <input type="file" name='archivo' />
      <input type="submit" value='Enviar' />
    </form>
  )
}

export default App;
