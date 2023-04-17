import { Conteiner,ConteinerForm,InputStyle,InputBTN } from "./StyleCreateUser"
export const CreateUsers = () => {
    return (
        <Conteiner>
            <ConteinerForm>
                <label htmlFor="name">Nome</label>
                <InputStyle type="text" name="name" />

                <label htmlFor="email">Email</label>
                <InputStyle type="text" name="email" />

                <label htmlFor="password">Senha</label>
                <InputStyle type="password" name="password" id="code" />

                <label htmlFor="password2">Confirme a Senha</label>
                <InputStyle type="password" name="password2" id="code2" />

                <InputBTN type="submit" value="Cadastrar" />
            </ConteinerForm>
        </Conteiner>
    )
}
