import { Table, Wrapper } from './style';
import React, { useState, useEffect } from 'react';
import api from 'services/api';

const results = [
  {
    id: 1,
    data: 'Domingo, 4 de Julho de 2021',
    sessionName: {
      name1: 'PTM',
      name2: 'PT',
      name3: '-',
      name4: '-',
      name5: '-',
    },
    primeiro: {
      session1: {
        bicho: 'Leão',
        resultado: '3362-16',
      },
      session2: {
        bicho: 'Águia',
        resultado: '3006-2',
      },
      session3: {
        bicho: '-',
        resultado: '-',
      },
      session4: {
        bicho: '-',
        resultado: '-',
      },
      session5: {
        bicho: '-',
        resultado: '-',
      },
    },
    segundo: {
      session1: {
        bicho: 'Perú',
        resultado: '7979-20',
      },
      session2: {
        bicho: 'Burro',
        resultado: '9812-3',
      },
      session3: {
        bicho: '-',
        resultado: '-',
      },
      session4: {
        bicho: '-',
        resultado: '-',
      },
      session5: {
        bicho: '-',
        resultado: '-',
      },
    },
    terceiro: {
      session1: {
        bicho: 'Cobra',
        resultado: '9633-9',
      },
      session2: {
        bicho: 'Cabra',
        resultado: '0022-6',
      },
      session3: {
        bicho: '-',
        resultado: '-',
      },
      session4: {
        bicho: '-',
        resultado: '-',
      },
      session5: {
        bicho: '-',
        resultado: '-',
      },
    },
    quarto: {
      session1: {
        bicho: 'Avestruz',
        resultado: '4704-1',
      },
      session2: {
        bicho: 'Galo',
        resultado: '0049-13',
      },
      session3: {
        bicho: '-',
        resultado: '-',
      },
      session4: {
        bicho: '-',
        resultado: '-',
      },
      session5: {
        bicho: '-',
        resultado: '-',
      },
    },
    quinto: {
      session1: {
        bicho: 'Jacaré',
        resultado: '7960-15',
      },
      session2: {
        bicho: 'Coelho',
        resultado: '5837-10',
      },
      session3: {
        bicho: '-',
        resultado: '-',
      },
      session4: {
        bicho: '-',
        resultado: '-',
      },
      session5: {
        bicho: '-',
        resultado: '-',
      },
    },
    sexto: {
      session1: {
        bicho: 'Coelho',
        resultado: '3638-10',
      },
      session2: {
        bicho: 'Carneiro',
        resultado: '8726-7',
      },
      session3: {
        bicho: '-',
        resultado: '-',
      },
      session4: {
        bicho: '-',
        resultado: '-',
      },
      session5: {
        bicho: '-',
        resultado: '-',
      },
    },
    setimo: {
      session1: {
        bicho: 'Carneiro',
        resultado: '825-7',
      },
      session2: {
        bicho: 'Veado',
        resultado: '494-24',
      },
      session3: {
        bicho: '-',
        resultado: '-',
      },
      session4: {
        bicho: '-',
        resultado: '-',
      },
      session5: {
        bicho: '-',
        resultado: '-',
      },
    },
  },
  {
    id: 2,

    data: 'Sábado, 3 de Julho de 2021',
    sessionName: {
      name1: 'PTM',
      name2: 'PT',
      name3: 'PTV',
      name4: 'FED',
      name5: 'COR',
    },
    primeiro: {
      session1: {
        bicho: 'Urso',
        resultado: '1289-23',
      },
      session2: {
        bicho: 'Galo',
        resultado: '3652-13',
      },
      session3: {
        bicho: 'Vaca',
        resultado: '7998-25',
      },
      session4: {
        bicho: 'Avestruz',
        resultado: '1004-1',
      },
      session5: {
        bicho: 'Coelho',
        resultado: '5837-10',
      },
    },
    segundo: {
      session1: {
        bicho: 'Macaco',
        resultado: '6465-17',
      },
      session2: {
        bicho: 'Cachorro',
        resultado: '2420-5',
      },
      session3: {
        bicho: 'Urso',
        resultado: '1692-23',
      },
      session4: {
        bicho: 'Carneiro',
        resultado: '4926-7',
      },
      session5: {
        bicho: 'Tigre',
        resultado: '7586-22',
      },
    },
    terceiro: {
      session1: {
        bicho: 'Tigre',
        resultado: '5388-22',
      },
      session2: {
        bicho: 'Gato',
        resultado: '6053-14',
      },
      session3: {
        bicho: 'Tigre',
        resultado: '4688-22',
      },
      session4: {
        bicho: 'Elefante',
        resultado: '3047-12',
      },
      session5: {
        bicho: 'Vaca',
        resultado: '3098-25',
      },
    },
    quarto: {
      session1: {
        bicho: 'Veado',
        resultado: '9893-24',
      },
      session2: {
        bicho: 'Burro',
        resultado: '2211-3',
      },
      session3: {
        bicho: 'Macaco',
        resultado: '9066-17',
      },
      session4: {
        bicho: 'Águia',
        resultado: '5007-2',
      },
      session5: {
        bicho: 'Leão',
        resultado: '4662-16',
      },
    },
    quinto: {
      session1: {
        bicho: 'Leão',
        resultado: '9063-16',
      },
      session2: {
        bicho: 'Cabra',
        resultado: '1521-6',
      },
      session3: {
        bicho: 'Borboleta',
        resultado: '6613-4',
      },
      session4: {
        bicho: 'Vaca',
        resultado: '3098-25',
      },
      session5: {
        bicho: 'Cabra',
        resultado: '7221-6',
      },
    },
    sexto: {
      session1: {
        bicho: 'Vaca',
        resultado: '2098-25',
      },
      session2: {
        bicho: 'Jacaré',
        resultado: '5857-15',
      },
      session3: {
        bicho: 'Jacaré',
        resultado: '0057-15',
      },
      session4: {
        bicho: 'Touro',
        resultado: '7082-21',
      },
      session5: {
        bicho: 'Avestruz',
        resultado: '8404-1',
      },
    },
    setimo: {
      session1: {
        bicho: 'Cobra',
        resultado: '333-9',
      },
      session2: {
        bicho: 'Coelho',
        resultado: '837-10',
      },
      session3: {
        bicho: 'Camelo',
        resultado: '532-8',
      },
      session4: {
        bicho: 'Águia',
        resultado: '405-2',
      },
      session5: {
        bicho: 'Perú',
        resultado: '279-20',
      },
    },
  },
  {
    id: 3,
    data: 'Sexta-Feira, 2 de Julho de 2021',
    sessionName: {
      name1: 'PTM',
      name2: 'PT',
      name3: 'PTV',
      name4: 'PTN',
      name5: 'COR',
    },
    primeiro: {
      session1: {
        bicho: 'Avestruz',
        resultado: '1601-1',
      },
      session2: {
        bicho: 'Gato',
        resultado: '2053-14',
      },
      session3: {
        bicho: 'Águia',
        resultado: '6705-2',
      },
      session4: {
        bicho: 'Burro',
        resultado: '7812-3',
      },
      session5: {
        bicho: 'Cachorro',
        resultado: '5320-5',
      },
    },
    segundo: {
      session1: {
        bicho: 'Touro',
        resultado: '6383-21',
      },
      session2: {
        bicho: 'Águia',
        resultado: '3806-2',
      },
      session3: {
        bicho: 'Carneiro',
        resultado: '9027-7',
      },
      session4: {
        bicho: 'Carneiro',
        resultado: '2626-7',
      },
      session5: {
        bicho: 'Perú',
        resultado: '9977-20',
      },
    },
    terceiro: {
      session1: {
        bicho: 'Carneiro',
        resultado: '4828-7',
      },
      session2: {
        bicho: 'Cobra',
        resultado: '3233-9',
      },
      session3: {
        bicho: 'Vaca',
        resultado: '0000-25',
      },
      session4: {
        bicho: 'Borboleta',
        resultado: '1315-4',
      },
      session5: {
        bicho: 'Borboleta',
        resultado: '9816-4',
      },
    },
    quarto: {
      session1: {
        bicho: 'Jacaré',
        resultado: '9557-15',
      },
      session2: {
        bicho: 'Leão',
        resultado: '1661-16',
      },
      session3: {
        bicho: 'Gato',
        resultado: '0053-14',
      },
      session4: {
        bicho: 'Carneiro',
        resultado: '3326-7',
      },
      session5: {
        bicho: 'Cavalo',
        resultado: '3141-11',
      },
    },
    quinto: {
      session1: {
        bicho: 'Gato',
        resultado: '8354-14',
      },
      session2: {
        bicho: 'Cavalo',
        resultado: '8541-11',
      },
      session3: {
        bicho: 'Galo',
        resultado: '0550-13',
      },
      session4: {
        bicho: 'Macaco',
        resultado: '6866-17',
      },
      session5: {
        bicho: 'Leão',
        resultado: '8961-16',
      },
    },
    sexto: {
      session1: {
        bicho: 'Cabra',
        resultado: '0723-6',
      },
      session2: {
        bicho: 'Veado',
        resultado: '9294-24',
      },
      session3: {
        bicho: 'Cobra',
        resultado: '6335-9',
      },
      session4: {
        bicho: 'Elefante',
        resultado: '1945-12',
      },
      session5: {
        bicho: 'Borboleta',
        resultado: '7215-4',
      },
    },
    setimo: {
      session1: {
        bicho: 'Cachorro',
        resultado: '219-5',
      },
      session2: {
        bicho: 'Borboleta',
        resultado: '813-4',
      },
      session3: {
        bicho: 'Carneiro',
        resultado: '526-7',
      },
      session4: {
        bicho: 'Borboleta',
        resultado: '514-4',
      },
      session5: {
        bicho: 'Perú',
        resultado: '077-20',
      },
    },
  },
];

const TableWeek = () => {
  const [visible,setVisible] = useState(1)

  const showMore = () =>{
    setVisible(prevValue => prevValue + 1)
}
  const [resutlToday, setResultToday] = useState([]);
  useEffect(() => {
    api.get('result/today').then(({ data }) => {
      setResultToday(data);
    });
    //console.log(resutlToday);
  }, []);

  return (
    <>
      <Wrapper>
        <h2>Resultados da semana</h2>
      </Wrapper>
      {results.slice(0,visible).map((item) => (
        <Wrapper>
          <p>{item.data}</p>
          <Table key={item.id}>
            <thead>
              <tr>
                <th>PREMIO</th>

                <th>{item.sessionName.name1}</th>
                <th>{item.sessionName.name2}</th>
                <th>{item.sessionName.name3}</th>
                <th>{item.sessionName.name4}</th>
                <th>{item.sessionName.name5}</th>
              </tr>
              <tr>
                <td>1</td>

                <td>{item.primeiro.session1.bicho}-{item.primeiro.session1.resultado}</td>
                <td>{item.primeiro.session2.bicho}-{item.primeiro.session2.resultado}</td>
                <td>{item.primeiro.session3.bicho}-{item.primeiro.session3.resultado}</td>
                <td>{item.primeiro.session4.bicho}-{item.primeiro.session4.resultado}</td>
                <td>{item.primeiro.session5.bicho}-{item.primeiro.session5.resultado}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{item.segundo.session1.bicho}-{item.segundo.session1.resultado}</td>
                <td>{item.segundo.session2.bicho}-{item.segundo.session2.resultado}</td>
                <td>{item.segundo.session3.bicho}-{item.segundo.session3.resultado}</td>
                <td>{item.segundo.session4.bicho}-{item.segundo.session4.resultado}</td>
                <td>{item.segundo.session5.bicho}-{item.segundo.session5.resultado}</td>
              </tr>
              <tr>
                <td>3</td>

                <td>{item.terceiro.session1.bicho}-{item.terceiro.session1.resultado}</td>
                <td>{item.terceiro.session2.bicho}-{item.terceiro.session2.resultado}</td>
                <td>{item.terceiro.session3.bicho}-{item.terceiro.session3.resultado}</td>
                <td>{item.terceiro.session4.bicho}-{item.terceiro.session4.resultado}</td>
                <td>{item.terceiro.session5.bicho}-{item.terceiro.session5.resultado}</td>
              </tr>
              <tr>
                <td>4</td>

                <td>{item.quarto.session1.bicho}-{item.quarto.session1.resultado}</td>
                <td>{item.quarto.session2.bicho}-{item.quarto.session2.resultado}</td>
                <td>{item.quarto.session3.bicho}-{item.quarto.session3.resultado}</td>
                <td>{item.quarto.session4.bicho}-{item.quarto.session4.resultado}</td>
                <td>{item.quarto.session5.bicho}-{item.quarto.session5.resultado}</td>
              </tr>
              <tr>
                <td>5</td>

                <td>{item.quinto.session1.bicho}-{item.quinto.session1.resultado}</td>
                <td>{item.quinto.session2.bicho}-{item.quinto.session2.resultado}</td>
                <td>{item.quinto.session3.bicho}-{item.quinto.session3.resultado}</td>
                <td>{item.quinto.session4.bicho}-{item.quinto.session4.resultado}</td>
                <td>{item.quinto.session5.bicho}-{item.quinto.session5.resultado}</td>
              </tr>
              <tr>
                <td>6</td>

                <td>{item.sexto.session1.bicho}-{item.sexto.session1.resultado}</td>
                <td>{item.sexto.session2.bicho}-{item.sexto.session2.resultado}</td>
                <td>{item.sexto.session3.bicho}-{item.sexto.session3.resultado}</td>
                <td>{item.sexto.session4.bicho}-{item.sexto.session4.resultado}</td>
                <td>{item.sexto.session5.bicho}-{item.sexto.session5.resultado}</td>
              </tr>
              <tr>
                <td>7</td>

                <td>{item.setimo.session1.bicho}-{item.setimo.session1.resultado}</td>
                <td>{item.setimo.session2.bicho}-{item.setimo.session2.resultado}</td>
                <td>{item.setimo.session3.bicho}-{item.setimo.session3.resultado}</td>
                <td>{item.setimo.session4.bicho}-{item.setimo.session4.resultado}</td>
                <td>{item.setimo.session5.bicho}-{item.setimo.session5.resultado}</td>
              </tr>
            </thead>
          </Table>
        </Wrapper>
      ))}
      <Wrapper>
      <button onClick={showMore}>Mostrar mais</button>
      </Wrapper>
    </>
  );
};

export default TableWeek;
