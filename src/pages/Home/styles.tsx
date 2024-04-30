import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownSubmit = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  padding: 1rem;
  border-radius: 8px;

  gap: 0.5rem;
  font-weight: bold;

  color: ${(props) => props.theme['gray-100']};

  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`
export const StartCountdownSubmit = styled(BaseCountdownSubmit)`
  background-color: ${(props) => props.theme['green-500']};

  &:not(:disabeld):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StopCountdownSubmit = styled(BaseCountdownSubmit)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabeld):hover {
    background: ${(props) => props.theme['red-700']};
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
