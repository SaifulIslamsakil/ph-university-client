import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { TLoginFiledData } from "../../interface";
import verifayToken from "../../utils/verifayToken";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import {  useNavigate } from "react-router-dom";


const Login = () => {
    const dispatch = useAppDispatch()
    const [login, { error }] = useLoginMutation()
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: '0001',
            password: 'admin12345',
        },
    });


    const onSubmit = async (data: TLoginFiledData) => {
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        try {
            const res = await login(userInfo).unwrap()
            if (res) {
                const user = verifayToken(res.data.accessToken)
                dispatch(setUser({ user: user, token: res.data.accessToken }))
                navigate("/", { replace: true })
            }

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <form onClick={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="id" >ID: </label>
                <input type="text" id="id" {...register("userId")} />
            </div>
            <div>
                <label htmlFor="id" >password: </label>
                <input type="text" id="password" {...register("password")} />
            </div>
            <Button htmlType="submit">Login</Button>
        </form>
    );
};

export default Login;