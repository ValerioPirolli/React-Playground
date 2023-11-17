import { useBearStore } from "../stores/bearStrore";

export const BearBox = () => {

    //const bears = useBearStore(state => state.bears)
    //const increasePopulation = useBearStore(state => state.increasePopulation)
    //const decreasePopulation = useBearStore(state => state.decreasePopulation)
    //const removeAllBears = useBearStore(state => state.removeAllBears)
    const {bears, increasePopulation, decreasePopulation, removeAllBears} = useBearStore();
    
    return(
        <div className="box">
            <h1>Bear Box</h1>
            <p>Bear : {bears}</p>
            <div>
                <button onClick={increasePopulation}>Aggiungi Bear</button>
                <button onClick={decreasePopulation}>Rimuovi Bear</button>
                <button onClick={removeAllBears}>Rimuovi Tutti i Bear</button>
            </div>
        </div>
    )
}