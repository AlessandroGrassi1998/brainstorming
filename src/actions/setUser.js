export default (userInfo)=>{
    return{
        type: "SET_USER",
        payload: {
            userInfo,
        }
    }
}