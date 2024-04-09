import { ButtonVariant, ButttonContainer } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}


export function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <ButttonContainer variant={variant}>Enviar</ButttonContainer>
  )
}