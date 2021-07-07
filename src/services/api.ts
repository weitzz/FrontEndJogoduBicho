import axios from 'axios';

const api = axios.create({
  baseURL: ` https://o-jogo-do-bicho-back-end-v2.herokuapp.com/jogodobixo`,
});

export default api;


const result = [
  {
    id: 1,
    jogoManha:{

    },
    jogoTarde:{

    },
    jogoNoite:{

    },
    jogoCorujao:{

    }
  },{},{},{},{},{},{}
]
