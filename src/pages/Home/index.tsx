import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from "./styles";

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1),
  minutesAmount: z.number().min(5).max(60),
});
type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });
  function handleCreateNewCycle(data: any) {
    console.log(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <S.HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <S.FormContainer>
          <label htmlFor="task">I will work on</label>
          <S.TaskInput
            id="task"
            {...register("task")}
            list="task-suggestions"
            placeholder="Give a name for your project"
          />
          <datalist id="task-suggestions">
            <option value="Task 1" />
            <option value="Task 2" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <S.MinutesAmountInput
            id="minutesAmount"
            {...register("minutesAmount", { valueAsNumber: true })}
            type="number"
            placeholder="00"
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

        <S.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Start
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  );
}
