
interface MessageProps {
  type?: 'message' | 'response';
}

const Message: React.FC<MessageProps> = ({ type = 'message' }) => {
  return (
    <div className={type === 'message' ? 'mr-2 py-3 px-4 bg-[#9DBEBB] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white' : 'ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white'}>
      {type === 'message' && (
        <>Welcome to group everyone !</>
      )}
      {type === 'response' && (
        <>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at praesentium</>
      )}
    </div>
  );
};

export default Message;
