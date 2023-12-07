import Image from "next/image";

import footballImage from "@/app/assets/football.jpg"

const AlbumPage = () => {
    return (
        <div className="p-10">
            <h1>This is album page</h1>
            <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMnrIqijITvbwU1ekkEJhGhoZs7Oj9XwYn5kSF-GpEWw&s"
                alt="Pickachu"
                width={150}
                height={200}
            />
            <Image className="mt-10" alt="football" src={footballImage} width={150} height={200}/>
        </div>
    );
};

export default AlbumPage;
