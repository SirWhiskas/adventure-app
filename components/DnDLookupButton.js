import React from 'react';
import {
    Input,
    Box,
    List, 
    ListItem, 
    ListIcon,
    Heading,
    Text,
    Stack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Divider,
    useDisclosure
  } from "@chakra-ui/react"


function DnDItem({ title, desc, ...rest }) {
    return (
        <Box p={5} shadow="md" borderWidth="1px" {...rest}>
            <Heading fontSize="xl">{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

const DnDLookupButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Live search
        </Button>
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay>
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Search D&amp;D things</DrawerHeader>

                <DrawerBody>
                <Input placeholder="Type monster, spell, item, etc." />

                <Divider />

                <Box overflow="hidden">
                    <Stack spacing={8}>
                        <DnDItem
                            title="Plan Money"
                            desc="The future can be even brighter but a goal without a plan is just a wish"
                        />
                        <DnDItem
                            title="Save Money"
                            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                        />
                        <DnDItem
                            title="Plan Money"
                            desc="The future can be even brighter but a goal without a plan is just a wish"
                        />
                        <DnDItem
                            title="Save Money"
                            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                        />
                        <DnDItem
                            title="Plan Money"
                            desc="The future can be even brighter but a goal without a plan is just a wish"
                        />
                        <DnDItem
                            title="Save Money"
                            desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                        />
                    </Stack>
                </Box>

                </DrawerBody>

                <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                </Button>
                </DrawerFooter>
            </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        </>
    )
};

export default DnDLookupButton;