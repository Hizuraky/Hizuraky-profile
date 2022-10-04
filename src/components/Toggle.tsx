import * as React from "react"

/***
 * トグルボタン
 */

type Props = {
  id: string
  className?: string
  isChecked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  buttonElement?: JSX.Element
}

export const Toggle = ({ id, className, isChecked, setChecked, buttonElement }: Props) => (
  <button
    onClick={() => setChecked(!isChecked)}
    className={`${className} w-16 sm:w-20 h-8 sm:h-10 rounded-full p-1 relative transition-colors duration-500 ease-in focus:outline-none focus:border-transparent shadow-toggle ${
      isChecked ? "bg-primary shadow-blue-active" : "bg-[#F0F1F3] dark:bg-dark-bg dark:shadow-dark-toggle-isset"
    }`}
  >
    <div
      id={id}
      className={`rounded-full w-6 h-6 sm:w-8 sm:h-8 p-1 bg-[#F0F1F3] relative ml-0 pointer-events-none transition-all duration-300 ease-out shadow-toggle-button dark:shadow-dark-toggle-button flex center dark:bg-gray-300 ${
        isChecked && "ml-8 sm:ml-10 shadow-dark-toggle-button"
      }`}
    >
      {buttonElement}
    </div>
  </button>
)
