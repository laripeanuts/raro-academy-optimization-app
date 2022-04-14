import { ChevronDownIcon } from "@heroicons/react/solid"

export type ChatMessageListBottomScrollButtonProps = {
  onClick: () => void,
  naoLidos: number
}
export const ChatMessageListBottomScrollButton: React.FC<ChatMessageListBottomScrollButtonProps> = ({
  onClick,
  naoLidos
}) => {
  return (
    <div className="absolute right-10 bottom-20 items-end inset-y-0 flex">
      <button
        onClick={ onClick }
        className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        {
          naoLidos ?
          (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {naoLidos}
            </span>
          ) : <></>
        }
      </button>
    </div>
  )
}
