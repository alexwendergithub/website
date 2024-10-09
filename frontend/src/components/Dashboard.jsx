import { 
  SimpleGrid,
  Text,
  Card,
  Link,
  Image,
  CardHeader,
  CardBody,
  CardFooter
} from "@chakra-ui/react"
import { useLoaderData } from "react-router-dom"

export default function Dashboard() {
  const mangas = useLoaderData()
  return (
    <SimpleGrid spacing={2} minChildWidth={300}>
      {mangas && mangas.map(manga => (
        <Card borderTop="8px" borderColor="blue.400" bg="white">
          { manga.image != null ? <Image boxSize='150px' objectFit='cover' src={manga.image} alt={manga.title}/>
            : <Image boxSize='150px' objectFit='cover' src="\images\missing_image.png" alt={manga.title}/>
          }
          <CardHeader color="gray.700">
            <Text>{manga.title}</Text>
          </CardHeader>

          <CardBody color="gray.500">
            <Link href={manga.link}>
              <Text width="center">{manga.link}</Text>
            </Link>
              <Text width="center" >{manga.chapter}</Text>
          </CardBody>

          <CardFooter>
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