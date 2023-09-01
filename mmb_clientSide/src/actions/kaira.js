import axios from "axios"
const getResponse = async(api_type, messages) =>{
    if(api_type===1){
        axios
            .post(`http://127.0.0.1:5000/kaira/t1/`,{
                messages:messages,
                userID: 1,
            })
            .then((res) => {
                console.log(res);
                return res.body;

            })
            .catch((error) => {
                console.log("error.message", error.message);
            });
    }
    else {
        axios
            .post(`http://127.0.0.1:5000/kaira/t2/`, {
                messages:messages,
                userID: 1
            })
            .then((res) => {
                //console.log(res);
                return res.body;

            })
            .catch((error) => {
                console.log("error.message", error.message);
            });
    }
}

export default getResponse