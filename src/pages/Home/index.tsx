import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { createContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import {
  HomeContainer,
  StartCountdownSubmit,
  StopCountdownSubmit,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrruptCycle?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  setSecondsPassed: (seconds: number) => void
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interrruptCycle: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((states) => [...states, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interrruptCycle: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <CyclesContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            setSecondsPassed,
            amountSecondsPassed,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <StopCountdownSubmit type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownSubmit>
        ) : (
          <StartCountdownSubmit disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownSubmit>
        )}
      </form>
    </HomeContainer>
  )
}
