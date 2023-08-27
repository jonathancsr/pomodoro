import * as S from "./styles";

export function History() {
  return (
    <S.HistoryContainer>
      <h1>My History</h1>
      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutes</td>
              <td>04/01/2023</td>
              <td>
                <S.Status statusColor="red">Done</S.Status>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutes</td>
              <td>04/01/2023</td>
              <td>
                <S.Status statusColor="yellow">Done</S.Status>
              </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutes</td>
              <td>04/01/2023</td>
              <td>
                <S.Status statusColor="green">Done</S.Status>
              </td>
            </tr>
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  );
}
