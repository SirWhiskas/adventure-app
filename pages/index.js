import Head from 'next/head'
import Header from '../components/Header'
import { Center, Container, Flex, Spacer, Text, Box, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <>
      <Header />
      <SimpleGrid columns={2} spacing={5}>
        <Box borderWidth="1px" maxW="sm">
          <SideBar />
        </Box>
        <Box colSpan={4}>
          <Center>
            <Text align="center">Video Here</Text>
          </Center>
        </Box>
      </SimpleGrid>
    </>
  )
}
