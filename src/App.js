// Componente controlado, debes pasarle el valor que va a mostrar (con value)
import { useState } from "react";
// Guardar multiples valores del formulario con un solo useState
const App = () => {
  const [ value, setValue ] = useState({ 
    normal: 'por defecto normal', 
    texto: 'por defecto texto', 
    select: '',
    check: false,
    estado: 'feliz',
  })
  
  const handleChange = ({ target }) => {
    // console.log( e.target.type, e.target.checked )
    setValue(( state ) => ({
      ...state,
      [ target.name ]: target.type === 'checkbox' 
        ? target.checked 
        : target.value
    }))
  }

  console.log( value )

  return(
    <div>
      { value.length < 5 ? <span>Longitud mínima de 5</span> : null }
      <input 
        type="text" name="normal" 
        value={ value.normal } onChange={ handleChange }
      />
      <textarea name="texto" value={ value.texto } onChange={ handleChange }/>
      
      <select name="select" value={ value.select } onChange={ handleChange }>
        <option value="">-- Seleccione --</option>
        <option value="chanchofeliz">Chancho feliz</option>
        <option value="chanchitofeliz">Chanchito feliz</option>
        <option value="chanchitotriste">Chanchito triste</option>
        <option value="felipe">felipe</option>
      </select>

      <input 
        type="checkbox" name="check"
        onChange={ handleChange } checked={ value.check } 
      />

      <div>
        <label>Chancho</label>
        <input 
          onChange={ handleChange } type="radio" 
          value="feliz" name="estado" 
          checked={ value.estado === 'feliz'}
        /> Feliz

        <input 
          onChange={ handleChange } type="radio" 
          value="triste" name="estado"
          checked={ value.estado === 'triste'}
        /> Triste

        <input 
          onChange={ handleChange } type="radio" 
          value="felipe" name="estado"
          checked={ value.estado === 'felipe'}
        /> Felipe
      </div>
    </div>
  )
}

export default App;