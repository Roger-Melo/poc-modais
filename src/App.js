const services = [
  {
    id: '5dfhfs#d',
    name: 'LPF',
    description: 'LPF (Low Pressure Fitness) - popularmente mais conhecida por "barriga negativa". É um método de exercícios com baixa pressão no abdômen, fundamentados na técnica de respiração e posturas do RPG. Os exercícios envolvem correção postural, com vácuo abdominal e co-ativação de grupos musculares;',
    benefits: [
      'Conscientização e correção da postura global;',
      'Diminuição da circunferência abdominal, de até 12cm;',
      'Correção da diástase abdominal;',
      'Diminuição do escape (incontinência) urinária;',
      'Alívio do Estresse'
    ]
  },
  {
    id: '#ufjd5',
    name: 'Pilates',
    description: 'Não possui restrições, podendo praticar desde crianças, gestantes e idosos, com profissionais qualificadas!',
    benefits: [
      'Atua na melhora de flexibilidade, alongamentos, conscientização postural, concentração, equilíbrio e propriocepção;',
      'Melhora a disposição e fortalecimento e resistência muscular;',
      'Diminui dores pelo corpo, diminui o estresse;',
      'Ajuda no Condicionamento Físico e Respiratório;',
      'Melhora na qualidade do sono;',
      'Trata Patologias, doenças geradas ao longo da vida;',
      'Também é um ótimo aliado para quem ainda não tem nenhuma disfunção musculoesqueléticas, atuando de forma preventiva, e como uma escolha de atividade física.',
    ]
  },
  {
    id: '98jsujhdhs4hd$msd7',
    name: 'Treinamento funcional',
    description: 'O treinamento funcional é um método de exercícios que visa desenvolver a força, a estabilidade e a mobilidade do corpo, por meio de movimentos que replicam as atividades diárias e melhoram o desempenho funcional em diferentes contextos.',
    benefits: [
      'Melhora da funcionalidade',
      'Fortalecimento do corpo como um todo',
      'Aumento da estabilidade e equilíbrio',
      'Melhora da coordenação e agilidade',
      'Aumento do condicionamento físico',
    ]
  },
  {
    id: '#da6gxdap6sd',
    name: 'Fisioterapia',
    description: 'A fisioterapia é uma área da saúde que trata de problemas de movimento e função do corpo. Fisioterapeutas ajudam as pessoas a se recuperar de lesões, aliviar a dor e melhorar a mobilidade. Eles usam exercícios e técnicas terapêuticas para ajudar os pacientes a se sentirem melhor e terem uma vida mais saudável. O objetivo é melhorar a qualidade de vida e a independência das pessoas.',
    benefits: [
      'Recuperação de lesões',
      'Alívio da dor',
      'Melhora da mobilidade e função',
      'Prevenção de lesões',
      'Melhora da saúde respiratória',
    ]
  },
]

const Modal = () => (
  <div className="modal">
    <button>x</button>
    <h3>Título do modal</h3>
    <p>Parágrafo do modal</p>
    <ul>
      <li>li 1</li>
      <li>li 2</li>
      <li>li 3</li>
    </ul>
  </div>
)

const Service = ({ name, onClickService }) => {
  return (
    <li>
      <button className="button-service" onClick={onClickService}>
        <h3>{name}</h3>
        <span>Saiba mais {'->'}</span>
      </button>
    </li>
  )
}

const ListOfServices = ({ onClickService }) => (
  <>
    <h2>Serviços</h2>
    <ul className="list-of-services">
      {services.map(service => <Service key={service.id} name={service.name} onClickService={() => onClickService(service.name)} />)}
    </ul>
  </>
)

const App = () => {
  const handleClickService = name => console.log(`Clicou no botão ${name}`)

  return (
    <>
      <Modal />
      <ListOfServices onClickService={handleClickService} />
    </>
  )
}

export { App }