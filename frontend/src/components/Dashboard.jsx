import { EditIcon, ViewIcon } from "@chakra-ui/icons"

import { 
  SimpleGrid,
  Text,
  Card,
  Link,
  Image,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Box
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
  const mangas = useLoaderData()
  return (
    <SimpleGrid spacing={2} minChildWidth={200}>
      {mangas && mangas.map(manga => (
        <Card borderTop="8px" borderColor="blue.400" bg="white">
          <CardHeader color="gray.700">
            <Text>{manga.title}</Text>
          </CardHeader>

          <CardBody color="gray.500">
            { manga.image != null ? <Link href={manga.link}><Image width='200px' height='356px' objectFit='cover' src={manga.image} alt={manga.title}/></Link>
              : <Link href={manga.link}><Image width='200px' height='356px' objectFit='cover' src="\images\missing_image.png" alt={manga.title}/></Link>
            }
            <Box>
              <Text as="span">Chapter:</Text>
              <Text as="span">{manga.chapter}</Text>
            </Box>
          </CardBody>

          <CardFooter>
            <Button variant="ghost" leftIcon={<ViewIcon />}>            
              <Link href={manga.link}>
                Read
              </Link>
            </Button>
            <Button variant="ghost" leftIcon={<EditIcon />}>Edit</Button>
          </CardFooter>

        </Card>
      ))}
    </SimpleGrid>
  )
}

export const mangasLoader = async () => {
  const res = await fetch('http://localhost:3000/mangas')

  return res.json()
}