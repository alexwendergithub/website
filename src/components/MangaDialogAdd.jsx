import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { Grid2, Card} from '@mui/material';
import Image from 'mui-image';
export default function MangaDialogAdd() {
  const [open, setOpen] = React.useState(false);
  const url = 'http://159.112.183.190:8080/mangas'
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
          onSubmit: async (event) => {
            event.preventDefault()
            console.log(url)
            console.log({
              "title":event.currentTarget.elements.title.value,
              "chapter":event.currentTarget.elements.chapter.value,
              "img":event.currentTarget.elements.img.value,
              "link":event.currentTarget.elements.link.value
            })
            fetch(url,{ method:"POST",
              body: JSON.stringify({
                "title":event.currentTarget.elements.title.value,                
                "chapter":event.currentTarget.elements.chapter.value,
                "link":event.currentTarget.elements.link.value,
                "img":event.currentTarget.elements.img.value
              }),
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
              },
            })
            handleClose();
          },
        }}
      >
        <DialogTitle>Insert Manga</DialogTitle>
        <DialogContent>
          <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid2 item component={Card} size={{ xs: 12, sm: 12 , md: 6}}>
            </Grid2>
            <Grid2 size={{xs: 12, sm: 12 , md: 6}}>
              <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="Title"
              defaultValue=""
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
              name="link"
              label="Link"
              defaultValue=""
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
              defaultValue=""
              type="text"
              fullWidth
              variant="standard"
            />
            </Grid2>
          </Grid2>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}