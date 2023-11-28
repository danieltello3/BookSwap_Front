import { useState, useEffect } from 'react';
import UserItem from '../../components/ui/atomos/UserItem/UserItem';
import ChatMenu from '../../components/ui/organismos/ChatMenu/ChatMenu';
import Search from '../../components/ui/atomos/Search/Search';
import Message from '../../components/ui/organismos/Message/Message';
import UserInput from '../../components/ui/organismos/UserInput/UserInput';
import { enviarMensaje } from '../../services/MensajeService';
import { MensajeService } from '../../services/MensajeService';
import UserImage from "../../components/ui/atomos/UserImage/UserImage";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageContent, setMessageContent] = useState('');
  const [user, setUser] = useState('Alex');

  useEffect(() => {
    // Cargar mensajes al montar el componente
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const mensajes = await MensajeService.mostrarMensajes();
      setMessages(mensajes);
    } catch (error) {
      console.error('Error al cargar mensajes:', error);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageContent(e.target.value);
  };

  const handleSendMessage = async () => {
    try {
      // Generar _id y timestamp
      const _id = Math.random().toString(36).substr(2, 9);
      const timestamp = new Date().toISOString();

      // Enviar el mensaje al servicio
      await enviarMensaje({ _id, content: messageContent, user: user, timestamp });
      console.log('Mensaje enviado:', messageContent);
      // Recargar los mensajes después de enviar
      loadMessages();

      // Limpiar el contenido del mensaje
      setMessageContent('');
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
    }
  };

  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <ChatMenu />
      <div className="flex flex-row justify-between bg-white"></div>
      <div className="flex flex-row bg-white">
        {/* User List */}
        <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
          {/* Search Component */}
          <div className="border-b-2 py-4 px-2">
            <Search placeholder="Buscar Chat" />
          </div>
          {/* User List */}
          <UserItem
            username="Luis1994"
            imageUrl="https://source.unsplash.com/_7LbC5J-jw4/600x600"
            message="Pick me at 9:00 AM"
          />
        </div>

        {/* Messages Section */}
        <div className="w-full px-5 flex flex-col justify-between">
          <div className="flex flex-col mt-5">
            {messages.map((message) => (
              <div
                key={message._id}
                className={`flex ${message.user === 'UsuarioActual' ? 'justify-end' : 'justify-start'
                  } mb-4`}
              >
                <UserImage />
                <Message
                  type={message.user === 'UsuarioActual' ? 'message' : 'response'}
                  content={message.content}
                />

              </div>
            ))}
          </div>
          <div className="py-5">
            <UserInput
              placeholder="Escribe tu mensaje aquí..."
              onSendMessage={handleSendMessage}
              onFileChange={() => { }}
              sendButtonText="Enviar"
              onChange={handleContentChange} // Usa handleContentChange aquí
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
