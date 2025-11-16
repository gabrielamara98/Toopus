import Card from "../components/Card";

function Search(){
    return(
        <>
            <h2>Pagina de busca</h2>
            <div className="grid grid-cols-3 w-fit place-content-center gap-15 justify-self-center">
                <Card></Card>
            </div>
        </>
        
    )
}
export default Search;