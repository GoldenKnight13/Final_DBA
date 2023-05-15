import { useState, useCallback } from "react"

const OpenController = ( initialState ) => {
    const [open, setOpen] = useState( initialState )
    const toggle = useCallback( () => { setOpen( (state)=> !state ) }, [ setOpen ])
    
    return { open, toggle }
}

export default OpenController
