import React from 'react';

interface MessageProps {
  type?: 'message' | 'response';
  content?: string;
}

const Message: React.FC<MessageProps> = ({ type = 'message', content }) => {
  return (
    <div
      className={
        type === 'message'
          ? 'mr-2 py-3 px-4 bg-[#9DBEBB] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white'
          : 'ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white'
      }
    >
      {content && <p>{content}</p>}
    </div>
  );
};

export default Message;

