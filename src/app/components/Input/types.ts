import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type: string
  placeholder: string
  label: string
  name: string
  icon: IconType
}
