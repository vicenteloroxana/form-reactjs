import React, {Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';
const Formulario = () => {
    const {register, errors, handleSubmit} = useForm();

    const [password,setPassword] =useState('');
    const [password2,setPassword2] =useState('');
    const [mostrar, setMostrar] = useState(false);
    const [mostrar2, setMostrar2] = useState(false);
    
    const onChange = ({ currentTarget },e) => setPassword(currentTarget.value);   
    const onChange2 = ({ currentTarget }) => setPassword2(currentTarget.value);
    const switchMostrar = () => setMostrar(!mostrar);
    const switchMostrar2 = () => setMostrar2(!mostrar2);

    const onSubmit= (data,e) => {
        console.log('enviando');
        console.log(data);
        e.target.reset();

    }

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}  >
                
                    <div className="form-group ">
                    <label for="Nombre">Nombre</label>
                        <input
                            name="Nombre"
                            id="Nombre"
                            className="form-control my-2"
                            ref={register({
                                required:{
                                    value:true,
                                    message:"Nombre es requerido"
                                }
                            })}
                        />
                    </div>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.Nombre?.message}
                    </span>
                    <div className="form-group ">
                        <label for="Apellido">Apellido</label>
                        <input
                            name="Apellido"
                            id="Apellido"
                            className="form-control my-2"
                            ref={register({
                                required:{
                                    value:true,
                                    message:"Apellido es requerido"
                                }
                            })}
                        />
                    </div>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.Apellido?.message}
                    </span>
                    <div className="form-group ">
                        <label for="Email">Email</label>
                        <input
                            name="Email"
                            id="Email"
                            className="form-control my-2"
                            ref={register({
                                required:{
                                    value:true,
                                    message:"Email es requerido"
                                },
                                pattern: { value: /^\S+@\S+$/i, message: 'El e-mail no es valido'}
                            })}
                        />
                    </div>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.Email?.message}
                    </span>
                    
                    <div className="form-check form-check-inline form-group">
                        <input 
                        className="form-check-input" 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio1" 
                        value="option1"
                        ref={register({
                            required:{
                                value:true,
                                message:"Opcion requerida"
                            }
                        })}
                        
                        />
                        <label className="form-check-label" for="inlineRadio1"> Femenino</label>
                    </div>
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.inlineRadioOptions?.message}
                    </span>
                    
                    <div className="form-check form-check-inline form-group" >
                        <input 
                        className="form-check-input" 
                        type="radio" 
                        name="inlineRadioOptions" 
                        id="inlineRadio2" 
                        value="option2"
                        ref={register({
                            required:{
                                value:true,
                                message:"Opcion requerida"
                            }
                        })}
                        />
                        
                        <label className="form-check-label" for="inlineRadio2"> Masculino</label>
                    </div>  
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.inlineRadioOptions?.message}
                    </span>
                    <div className="form-row  " >                        
                        <div className="row contra ">
                            <div className="form-group col-md-4 ">
                                    <label for="Contraseña">Contraseña</label>
                                    <input
                                        name="Contraseña1"
                                        id="Contraseña"
                                        className="form-control my-2 "
                                        onChange={onChange}
                                        type={mostrar ? 'text' : 'password'}
                                        // value={password}
                                        ref={register({
                                            required:{
                                                value:true,
                                                message:"Contraseña es requerido"
                                            }
                                        })}
                                    />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.Contraseña1?.message}
                            </span>        
                            <div className=" form-group col-md-2">
                                <label  id="cambio">Password</label><br></br>
                                <a onClick={switchMostrar} className=" btn-primary btn-sm">
                                    {mostrar ? 'Ocultar' : 'Mostrar'}
                                </a>
                            </div>
                            <div className="form-group col-md-4 contra">
                                <label for="Contraseña2">Confirmar contraseña</label>
                                <input
                                    name="Contraseña2"
                                    id="Contraseña2"
                                    className="form-control my-2 "
                                    onChange={onChange2}
                                    type={mostrar2 ? 'text' : 'password'}
                                    // value={password2}
                                    ref={register({
                                        required:{
                                            value:true,
                                            message:"Contraseña es requerido"
                                        }
                                    })}
                                />
                                
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.Contraseña2?.message}
                            </span>    
                            <div className=" form-group col-md-2">
                                <label  id="cambio">Password</label><br></br>
                                <a onClick={switchMostrar2} className=" btn-primary btn-sm">
                                    {mostrar ? 'Ocultar' : 'Mostrar'}
                                </a>
                            </div>
                        </div> 
                        
                    </div> 
                    <button type="submit" className="btn btn-primary">Enviar</button>      
            </form>   
        </Fragment>
        
    );
}

export default Formulario;