import { Conteiner,ConteinerForm,InputStyle,InputBTN,ConteinerBTNCreateUser,BtnCreateUse } from "./StyleCreateUser"



const LoginUser = () => {
    return (
        <Conteiner>
            <ConteinerForm >
                <label htmlFor="email">Email</label>
                <InputStyle type="text"  name="email" id="email"/>

                <label htmlFor="password">Senha</label>
                <InputStyle type="text" name="password" />

                <InputBTN type="submit" value="Login" />
            </ConteinerForm>
            <ConteinerBTNCreateUser>
                <BtnCreateUse>Cadastra</BtnCreateUse>
            </ConteinerBTNCreateUser>
        </Conteiner>
    )
}

export default LoginUser
