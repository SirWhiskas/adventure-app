import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Flex, Spacer, Box, Heading, Button, IconButton } from "@chakra-ui/react"
import { RiMoonLine, RiSunLine } from 'react-icons/Ri'

export const siteTitle = 'Appventure'

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box p="4">
            <Flex>
                <Box p="2">
                    <Heading size="md">{siteTitle}</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Button colorScheme="teal" mr="4">
                    Sign Up
                    </Button>
                    <Button colorScheme="teal" mr="4">Log in</Button>
                    <IconButton onClick={toggleColorMode} icon={colorMode === "light" ? <RiMoonLine /> : <RiSunLine />} />
                </Box>
            </Flex> 
        </Box>
    )
}

export default Header
