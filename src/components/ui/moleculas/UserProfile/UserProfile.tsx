import Button from "../../atomos/Button/Button";


const UserProfile = () => {
    return(
        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
              <img
                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-teal-500 dark:ring-teal-500"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="Bordered avatar"
              />

              <div className="flex flex-col space-y-5 sm:ml-8">
                <Button variant="primary" 
                className="py-3.5 px-7 text-base font-medium  rounded-lg">Change picture
                </Button>
                <Button variant="secondary"
                className="py-3.5 px-7 text-base font-medium  rounded-lg ">Delete picture
                </Button>
              </div>
            </div>
    )
}
export default UserProfile;