import * as React from 'react'
import SideBar from "../components/SideBar.tsx"
import { Outlet } from 'react-router-dom';
import { Grid, GridItem } from "@chakra-ui/react"

function RootLayout() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        colSpan={{ base: 6, lg: 2, xl: 1 }} 
      >
        <SideBar />
      </GridItem>

      {/* main content & navbar */}
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }} 
        p="40px"
      >
        <Outlet />
      </GridItem>
    </Grid>
  )
}

export default RootLayout;
