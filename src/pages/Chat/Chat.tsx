import UserItem from "../../components/ui/atomos/UserItem/UserItem";
import ChatMenu from "../../components/ui/organismos/ChatMenu/ChatMenu";
import Search from "../../components/ui/atomos/Search/Search";
import UserImage from "../../components/ui/atomos/UserImage/UserImage";
import Message from "../../components/ui/organismos/Message/Message";
import UserInput from "../../components/ui/organismos/UserInput/UserInput";


const Chat = () => {
    return (
      <div className="container mx-auto shadow-lg rounded-lg">
        <ChatMenu />
        <div className="flex flex-row justify-between bg-white">
        </div>
        <div className="flex flex-row bg-white">
          {/* User List */}
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* Search Component */}
            <div className="border-b-2 py-4 px-2">
              <Search />
            </div>
            {/* User List */}
            <UserItem
              username="Luis1994"
              imageUrl="https://source.unsplash.com/_7LbC5J-jw4/600x600"
              message="Pick me at 9:00 AM"
            />
            <UserItem
              username="Everest Trip 2021"
              imageUrl="https://source.unsplash.com/otT2199XwI8/600x600"
              message="Hi Sam, Welcome"
            />
            <UserItem
              username="Everest Trip 2021"
              imageUrl="https://source.unsplash.com/otT2199XwI8/600x600"
              message="Hi Sam, Welcome"
            />
            <UserItem
              username="Everest Trip 2021"
              imageUrl="https://source.unsplash.com/otT2199XwI8/600x600"
              message="Hi Sam, Welcome"
            />
            <UserItem
              username="Everest Trip 2021"
              imageUrl="https://source.unsplash.com/otT2199XwI8/600x600"
              message="Hi Sam, Welcome"
            />
            <UserItem
              username="Everest Trip 2021"
              imageUrl="https://source.unsplash.com/otT2199XwI8/600x600"
              message="Hi Sam, Welcome"
            />
          </div>
  
          {/* Messages Section */}
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              <div className="flex justify-end mb-4">
                <Message />
                <UserImage />
              </div>
              <div className="flex justify-start mb-4">
                <UserImage />
                <Message />
              </div>
              <div className="flex justify-end mb-4">
                <Message />
                <UserImage />
              </div>
              <div className="flex justify-start mb-4">
                <UserImage />
                <Message />
              </div>
              <div className="flex justify-end mb-4">
                <Message />
                <UserImage />
              </div>
              <div className="flex justify-start mb-4">
                <UserImage />
                <Message />
              </div>
              {/* Otros elementos de mensajes */}
            </div>
            <div className="py-5">
              <UserInput />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Chat