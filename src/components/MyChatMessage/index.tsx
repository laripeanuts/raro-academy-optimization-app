import { formataHora } from "../../helpers/formatters";
import { ChatMessageProps } from "../../types/ChatMessageProps";

export const MyChatMessage: React.FC<ChatMessageProps> = ({ mensagem }) => {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
          <div className=" flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div>
              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-indigo-600 text-white text-base">
                { mensagem.texto }
                <p className="text-xs text-gray-300 flex justify-end">
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
