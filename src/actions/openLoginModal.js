export default (openClose,email)=>{
    return{
        type: "Open close login modal",
        payload: {
            openClose,
            email,
        }
    }
}