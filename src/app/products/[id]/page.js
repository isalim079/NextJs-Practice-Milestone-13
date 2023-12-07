

const BoxPage = ({params, searchParams}) => {
    console.log(searchParams);
    return (
        <div>
            <h1>This is a box page : {params.id}</h1>
            <h1>Search Params : {searchParams?.proce}</h1>
        </div>
    );
};

export default BoxPage;