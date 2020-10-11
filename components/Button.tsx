import styled from '@emotion/styled'
import tw from '@tailwindcssinjs/macro'

const ButtonStyled = styled.button(tw`
  relative
  flex justify-center
  py-2 px-4
  border border-transparent
  text-sm leading-5 font-medium
  rounded-sm
  bg-indigo-500
  text-white
  focus[outline-none border-indigo-700 shadow-outline-indigo]
  active:bg-indigo-900
  transition duration-150 ease-in-out
`)

type ButtonProps = {
  className?: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children, ...props }): JSX.Element => (
  <ButtonStyled {...props} className={className} onClick={onClick}>
    {children}
  </ButtonStyled>
)

export default Button
