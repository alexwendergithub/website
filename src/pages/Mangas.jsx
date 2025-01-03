import React from 'react'
import './RandomPage.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid2,Link,Typography, Card, Button } from '@mui/material';
import Image from 'mui-image'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MangaDialog from '../components/MangaDialog';
import { useLoaderData } from "react-router-dom"

const Mangas = ()=>{
    const mangas = useLoaderData()

    const openInPopup = item => {

    }

    return(
        <Box sx={{ flexGrow: 1 }}>
          <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {mangas && mangas.map(manga => (
                <Grid2 item component={Card} size={{ xs: 12, sm: 6 , md: 2}}>
                  <Box>
                    <Link href={manga.link}>
                      <Image src={manga.img}/>
                    </Link>
                    <Typography  as="span">Chapter:</Typography >
                    <Typography  as="span">{manga.chapter}</Typography >
                    <Grid2 container spacing={{xs:2,md:3}}>
                      <Grid2  size={6}>
                        <Link href={manga.link}>
                          <Button>
                              <MenuBookIcon fontSize="small" />
                              Read
                          </Button>
                        </Link>
                      </Grid2>
                      <Grid2 size={6}>
                          <MangaDialog manga={manga}/>
                      </Grid2>
                    </Grid2>
                    <Box>{manga.title}</Box>
                  </Box>
                </Grid2>
            ))}
          </Grid2>
      </Box>
    )

}

export default Mangas

export const mangasLoader = async () => {
    const res = await fetch('http://localhost:5173/api/backup')
    return res.json()
}