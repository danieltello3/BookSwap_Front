import UserInput from "../../components/ui/organismos/UserInput/UserInput";
import BlogNavbar from "../../components/ui/organismos/BlogNavbar/BlogNavbar";
import Post from "../../components/ui/organismos/Post/Post";




const Blog = () => {
    return (
        <div className="w-full flex flex-row flex-wrap">
            <div className="w-full bg-teal-50 h-screen flex flex-row flex-wrap justify-center ">
                <BlogNavbar />
                <div className="w-full md:w-3/4 lg:w-4/5 p-5 md:px-64 lg:24 h-full overflow-x-scroll antialiased">
                    <div className="bg-white w-full shadow rounded-lg p-5">
                        <UserInput
                            placeholder="Ingresa una publicación"
                            numberOfLines={4}
                            sendButtonText="Publicar"
                            onSendMessage={() => console.log('Mensaje enviado')}
                            onFileChange={(file) => console.log('Archivo cambiado:', file)}
                        >

                        </UserInput>
                    </div>

                    <div className="mt-3 flex flex-col">
                        <Post />
                        <Post />
                        <Post />                        
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Blog;