import DetalleMovie from "../components/DetalleMovie/DetalleMovie";


const DetallePagina =({match})=>{
    const {id} = match.params;
    
    return(
     <DetalleMovie id = {id}/>
    )
}
export default DetallePagina