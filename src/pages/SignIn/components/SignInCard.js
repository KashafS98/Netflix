import { Button, Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core'
import React from 'react'
import { Card, FormActions, Subcard2 } from './SignInCard.style'
import TextFieldComponent from '../../../BasicComponents/TextField'
import { FaFacebookSquare } from 'react-icons/fa';

export default function SignInCard() {
    return (
        <Card>
            <h1>Sign In</h1>
            <form noValidate autoComplete="off">
                <div>
                    <TextFieldComponent label="Email or Phone Number" variant='filled' />
                </div>
                <div>
                    <TextFieldComponent label="Password" variant='filled' />
                </div>
                <div>
                    <Button variant='contained' centerRipple color="primary" size="large">Sign In</Button>
                </div>
            </form>
            <FormActions>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={true}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <a>Need Help?</a>
            </FormActions>
            <Subcard2>
                <FaFacebookSquare color='#4D66A6' size={30}/>
                Login With Facebook
            </Subcard2>
            <span>New to Netflix? <b><a>Sign up now.</a></b></span>
            <p> 
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </p>
        </Card>
    )
}
