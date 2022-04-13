import { ChatMessageProps } from "../../types/ChatMessageProps";
import { formataHora } from "../../helpers/formatters";

export const ChatMessage: React.FC<ChatMessageProps> = ({ mensagem }) => {
  return (
    <div className="chat-message">
      <div className="flex items-end">
          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-200 text-gray-600 text-base">
                { mensagem.texto }
                <p className="text-xs text-gray-400 flex justify-end">
                  { formataHora(mensagem.data) }
                </p>
              </span>
            </div>
          </div>
          <img
            src={ mensagem.autor.foto! }
            alt={ mensagem.autor.nome }
            className="w-8 h-8 rounded-full order-1"
          />
      </div>
    </div>
  );
};