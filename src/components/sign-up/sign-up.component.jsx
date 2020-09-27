import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.util';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user, {displayName});
            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        } catch(error) {
            console.log(error);
        }
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name ='displayName'
                        onChange ={this.handleChange}
                        value={displayName}
                        label="Display Name"
                        required
                    />
                    <FormInput
                        type="email"
                        name ='email'
                        onChange ={this.handleChange}
                        value={email}
                        label="Email"
                        required
                    />
                    <FormInput
                        type="password"
                        name ='password'
                        onChange ={this.handleChange}
                        value={password}
                        label="Password"
                        required
                    />
                    <FormInput
                        type="password"
                        name ='confirmPassword'
                        onChange ={this.handleChange}
                        value={confirmPassword}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignUp;