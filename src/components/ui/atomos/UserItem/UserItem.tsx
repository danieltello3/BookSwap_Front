interface UserItemProps {
    username: string;
    imageUrl: string;
    message: string;
}

const UserItem: React.FC<UserItemProps> = ({ username, imageUrl, message }) => {
    return (
        <div className="flex flex-row py-4 px-2 items-center border-b-2">
            <div className="w-1/4">
                <img
                    src={imageUrl}
                    className="object-cover h-12 w-12 rounded-full"
                    alt=""
                />
            </div>
            <div className="w-full">
                <div className="text-lg font-semibold">{username}</div>
                <span className="text-gray-500">{message}</span>
            </div>
        </div>
    );
};

export default UserItem;