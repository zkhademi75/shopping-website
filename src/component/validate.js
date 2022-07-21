export const validate = data => {

    const errors = {}

    if(!data.name.trim()){
        errors.name = "Name is requierd"
    }else {
        delete errors.name
    }

    if(!data.email){
        errors.email = "email is required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email addres is invalid"
    }else {
        delete errors.email
    }

    if (!data.password){
        errors.password = "password is required"
    }else if (data.password.length < 6){
        errors.password = "Password need to bo 6 character or more"
    }else {
        delete errors.password
    }

    if(!data.confirmPassword){
        errors.confirmPassword = "Confirm the password"
    }else if (data.confirmPassword !== data.password){
        errors.confirmPassword = "Password do not match"
    }else {
        delete errors.confirmPassword
    }

    if(data.isAccepted){
        delete errors.isAccepted
    }else {
        errors.isAccepted = "Accept our regulation"
    }

    return errors;
}