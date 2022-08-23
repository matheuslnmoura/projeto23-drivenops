import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [student, setStudent] = useState(null);
  console.log('chamou o app')
    
  useEffect(async () => {
    console.log('entrou no use effect')

    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
      console.log('entrou no try')

      const response = await axios.get(`${API_URL}/students/random`);
      const student = response.data;
      if(!student){
        alert("Putz! Não há estudantes cadastrados para o sorteio!");
      } else {
        console.log('entrou no else')

        setStudent(student);
      }
    } catch (error) {
      console.log('entrou no catch')
      alert("Não foi possível realizar o sorteio!");
    }
  }, []);
  
  return (
    
    student ? <h1>{student.name}</h1> : "Carregando..."
  )
}

export default App;