import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor'
    });
  }

  function handleChange(infosDoEvento) {
    // const { getAttribute, value } = infosDoEvento.target;
    // console.log('[getAttribute]:', infosDoEvento.target.getAttribute('name'));
    // console.log("[value]:",value);
    setValue(
      // getAttribute('name'),
      // value
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
    // setValues(infosDoEvento.target.value)
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
