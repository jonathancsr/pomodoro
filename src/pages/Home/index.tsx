import { Play } from "phosphor-react";
import * as S from "./styles";

export function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">I will work on</label>
          <S.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Give a name for your project"
          />
          <datalist id="task-suggestions">
            <option value="Task 1" />
            <option value="Task 2" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder=""
            max={60}
            min={5}
            step={5}
          />

          <span>minutes.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.StartCountdownButton type="submit">
          <Play size={24} />
          Start
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  );
}
