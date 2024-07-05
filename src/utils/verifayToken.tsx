import { jwtDecode } from "jwt-decode";


const verifayToken = (token: string) => {
    const decordedToken = jwtDecode(token)
    return decordedToken
};

export default verifayToken;