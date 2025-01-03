import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { Grid2, Card, Box, Link} from '@mui/material';
import Image from 'mui-image';
export default function MangaDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}>
        <EditIcon/>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>{props.manga.title}</DialogTitle>
        <DialogContent>
          <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid2 item component={Card} size={{ xs: 12, sm: 12 , md: 6}}>
              <Image src={props.manga.img}/>
            </Grid2>
            <Grid2 size={{xs: 12, sm: 12 , md: 6}}>
              <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="Title"
              defaultValue={props.manga.title}
              type="text"
              fullWidth
              variant="standard"
              />
              <TextField
              autoFocus
              required
              margin="dense"
              id="chapter"
              name="chapter"
              label="Chapter"
              defaultValue={props.manga.chapter}
              type="text"
              fullWidth
              variant="standard"
              />
              <TextField
              autoFocus
              required
              margin="dense"
              id="link"
              name="link"
              label="Link"
              defaultValue={props.manga.link}
              type="text"
              fullWidth
              variant="standard"
            />
              <TextField
              autoFocus
              required
              margin="dense"
              id="img"
              name="img"
              label="Image Link"
              defaultValue={props.manga.img}
              type="text"
              fullWidth
              variant="standard"
            />
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Update</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}