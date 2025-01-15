import React from 'react'
import './NotFoundPage.css'
import { Grid2, Card, TextField, Button } from '@mui/material'

const Profile = ()=>{
    return(
        <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid2 item component={Card} size={{ xs: 12, sm: 4 , md: 4}}>
                    Barra de opcoes???            
                </Grid2>
                <Grid2 item component={Card} size={{ xs: 12, sm: 8 , md: 8}}>
                    <form>
                        Edit Profile
                        <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="Name"
                        label="Name"
                        defaultValue=""
                        type="text"
                        fullWidth
                        variant="standard"
                        />
                        <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="link"
                        name="email"
                        label="email"
                        defaultValue=""
                        type="text"
                        fullWidth
                        variant="standard"
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="img"
                        name="change password"
                        label="password"
                        defaultValue=""
                        type="text"
                        fullWidth
                        variant="standard"
                        />
                        <TextField
                        autoFocus
                        margin="dense"
                        id="confirm_password"
                        name="confirm password"
                        label="confirm password"
                        defaultValue=""
                        type="text"
                        fullWidth
                        variant="standard"
                        />
                        <Button type="submit">Save Changes</Button>
                    </form>
                </Grid2>
        </Grid2>
    )

}

export default Profile