import React, {useEffect, useState} from 'react'
import './styles.css';
import backend from '../services/backend'
import 'antd/dist/antd.css';
import { Table } from 'antd';

function HomeComponent() {

const [valueCode, setValueCode] = useState()
const [dados, setDados] = useState([]) 
const [tableDados, setTableDados] = useState([])

useEffect(() => {
  
  localStorage.clear()
  localStorage.setItem('@id', parseInt(1))

},[])

const columns = [
  {
    title: 'Periodo',
    dataIndex: 'periodo',
    key: 'periodo', 
  },
  {
    title: 'Entrada',
    dataIndex: 'entrada',
    key: 'entrada', 
  },
  {
    title: 'Principal',
    dataIndex: 'principal',
    key: 'principal', 
  },
  {
    title: 'Bebida',
    dataIndex: 'bebida',
    key: 'bebida', 
  },
  {
    title: 'Sobremesa',
    dataIndex: 'sobremesa',
    key: 'sobremesa', 
  },
];

function setId(value){

  const valueId = localStorage.getItem('@id')
  const idAtual = localStorage.setItem(valueId, value)
  localStorage.setItem('@id', parseInt(localStorage.getItem('@id')) + 1)

  return idAtual
 
 }

 async function ValidateDates(event) {
    
     const requestApi = await backend.post(`/order`, 
     {
      dados: valueCode
     })

     const newData = requestApi.data

     if(requestApi){

      setId(JSON.stringify(newData))

      const teste = JSON.stringify(newData)
      
      setDados([...dados, JSON.parse(teste)])
      
      for(let i = 1; i < localStorage.getItem('@id') ; i++){

          var dadosAtual = JSON.parse(localStorage.getItem(i))
          setTableDados([...tableDados , localStorage.getItem(i)])

      }

     }
  }


  return (
    <div>

      <span> Entrada:  </span> <input onChange={(values) => setValueCode(values.target.value)} type='text'/>
      <span> Saida:  </span> <input value={tableDados[tableDados.length - 1]} readOnly type='text'/>
      <button onClick={ValidateDates}> Enviar Pedidos </button>
      <Table columns={columns} dataSource={dados.map((values) => {
                            
      return ({
      
        periodo: values.periodo,
        entrada: values.entrada,
        principal: values.principal,
        bebida: values.bebida,
        sobremesa: values.sobremesa
      }
      )


      })}>


      </Table>
      
    </div>
  );
}

export default HomeComponent;
