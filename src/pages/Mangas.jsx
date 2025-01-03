import React from 'react'
import './RandomPage.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid2,Link,Typography, Card } from '@mui/material';
import Image from 'mui-image'

import { useLoaderData } from "react-router-dom"

const Mangas = ()=>{
    const mangas = useLoaderData()
    return(
        <Box sx={{ flexGrow: 1 }}>
          <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {mangas && mangas.map(manga => (
                <Grid2 item component={Card} size={{ xs: 12, sm: 6 , md: 2}}>
                  <Box>
                    <Image src={manga.img}/>
                    <Typography  as="span">Chapter:</Typography >
                    <Typography  as="span">{manga.chapter}</Typography >
                    <Grid2 container spacing={{xs:2,md:3}}>
                      <Grid2  size={6}>
                        <Link href={manga.link}>
                            Read  
                        </Link>
                      </Grid2>
                      <Grid2 size={6}>
                        <Link href={manga.link}>
                            Edit
                        </Link>
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