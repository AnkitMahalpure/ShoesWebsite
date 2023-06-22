import axios from "axios";

const Base_URL="http://localhost:5000/api";
// const TOKEN="";
// //(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser).accessToken

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
console.log(TOKEN);
export const publicRequest=axios.create({
    baseURL:Base_URL,
});

export const userRequest=axios.create({
    baseURL:Base_URL,
    headers:{token:TOKEN},
});
//header:{token:`ankit ${TOKEN}`}
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// // const TOKEN =
// //   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
// //     .accessToken || "";


