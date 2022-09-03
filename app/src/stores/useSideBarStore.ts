import { useStore } from "@nanostores/vue";
import { atom } from "nanostores";



const isShown = atom(false)

export default function useSideBarStore() {
    
    
    const getIsShown = useStore(isShown);

    return {

        
        getIsShown,
        
         setIsShownToTrue() {
            
            isShown.set(true)
        },
         setIsShownToFalse() {
            isShown.set(false)
            
        },
         toggleIsShown() {
            isShown.set(!isShown.get())
        },
        
    }
    
    
    

};