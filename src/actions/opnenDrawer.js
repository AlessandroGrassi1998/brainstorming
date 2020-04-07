export default (open)=>{
    return{
        type: "TOGGLE DRAWER",
        payload: {
            open,
        }
    }
}