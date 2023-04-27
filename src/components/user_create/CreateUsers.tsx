
import { Conteiner,ConteinerForm,InputStyle,InputBTN } from "./StyleCreateUser"
import { useState,useEffect} from "react"


export const CreateUsers = () => {
   const[name,setName ] = useState<string>()
   const[email,setEmail] = useState<string|number>()
   const[password,setPassword] = useState<string|number|symbol>()
   const urlBD = 'http://localhost:3000/user'
 






 



  const postData = async(event:any)=>{
    const myObjsData = {
      name:name,
      email:email,
      password:password
    }
    event.preventDefault()
    const jsonData=  JSON.stringify(myObjsData)
    const requestOptions = {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:jsonData
  }
    
    await fetch(urlBD,requestOptions)
            console.log(event)
}              


  


    return (

        <Conteiner>
            <ConteinerForm onClick={postData}>
                <label htmlFor="name">Nome</label>
                <InputStyle type="text" name="name"  onChange={(event:any) => setName(event.target.value)}/>

                <label htmlFor="email">Email</label>
                <InputStyle type="text" name="email" onChange={(event:any) => setEmail(event.target.value)} />

                <label htmlFor="password">Senha</label>
                <InputStyle type="password" name="password" id="code" onChange={(event:any) => setPassword(event.target.value)}/>

                <label htmlFor="password2">Confirme a Senha</label>
                <InputStyle type="password" name="password2" id="code2" />

                <InputBTN type="submit" value="Cadastrar"  />
            </ConteinerForm>
        </Conteiner>
    )
}
