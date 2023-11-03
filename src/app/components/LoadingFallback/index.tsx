import { PiCircleNotch } from 'react-icons/pi'

export function LoadingFallback() {
  return (
    <div className="flex w-full justify-center">
      <PiCircleNotch className="h-36 w-36 animate-[spin_900ms_ease-in-out_infinite] text-primary-400" />
    </div>
  )
}
