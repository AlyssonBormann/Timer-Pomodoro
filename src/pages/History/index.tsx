import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  // const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Statos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dale uma pimbada violenta</td>
              <td>50 minutos</td>
              <td>Há 2 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Dale uma pimbada violenta</td>
              <td>50 minutos</td>
              <td>Há 1 meses</td>
              <td>
                <Status statusColor="yellow">Em Andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Dale uma pimbada violenta</td>
              <td>50 minutos</td>
              <td>Há 2 semana</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Dale uma pimbada violenta</td>
              <td>50 minutos</td>
              <td>Há 2 dias</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Dale uma pimbada violenta</td>
              <td>50 minutos</td>
              <td>Há 1 minuto</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
