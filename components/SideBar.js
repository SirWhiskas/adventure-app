import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  VStack,
  StackDivider
} from "@chakra-ui/react"
import { GiDaemonSkull, GiTreasureMap, GiMusicSpell, GiCrossShield, GiMagicSwirl } from 'react-icons/Gi'
import DnDLookupButton from './DnDLookupButton'

const expandedColor = "tomato"
const collapsedColor = "white"

const SideBar = () => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
                <AccordionButton _expanded={{ bg: expandedColor, color: collapsedColor }}>
                <Box flex="1" textAlign="left">
                    <Text fontSize="lg">
                        Campaign - Curse of Strahd
                    </Text>
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={GiDaemonSkull} color="green.500" />
                            Dungeon Master - Chris Pickens
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiTreasureMap} color="green.500" />
                            Current Location - Blood of the Vine Tavern
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton _expanded={{ bg: expandedColor, color: collapsedColor }}>
                <Box flex="1" textAlign="left">
                    <Text fontSize="lg">
                        Party members
                    </Text>
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    <List spacing={3}>
                        <ListItem>
                            <ListIcon as={GiMusicSpell} color="green.500" />
                            Tiefling Bard - John McKay
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiCrossShield} color="green.500" />
                            Dwarf Cleric - Megan Lewis
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiMagicSwirl} color="green.500" />
                            Half-Elf Sorcerrer - Andrew Lewis
                        </ListItem>
                    </List>
                </AccordionPanel>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionButton _expanded={{ bg: expandedColor, color: collapsedColor }}>
                <Box flex="1" textAlign="left">
                    Character - Udaarji (Khajiit - Cleric)
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    HP
                    Character stats
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton _expanded={{ bg: expandedColor, color: collapsedColor }}>
                <Box flex="1" textAlign="left">
                    Abilities
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    Class abilities and spells
                    Race abilities
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton _expanded={{ bg: expandedColor, color: collapsedColor }}>
                <Box flex="1" textAlign="left">
                    Inventory
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    Current items and descriptions
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton _expanded={{ bg: expandedColor, color: collapsedColor }}>
                <Box flex="1" textAlign="left">
                    Adventure Log
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                    Previous location - link to details
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <AccordionButton _expanded={{ bg: expandedColor, color: collapsedColor }}>
                <Box flex="1" textAlign="left">
                    Resources
                </Box>
                <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <Box p={2}>
                    <VStack
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={4}
                    align="stretch"
                    >
                        <Box h="40px">
                            <DnDLookupButton />
                        </Box>
                        <Box h="40px">
                            Links to D&amp;D resources
                        </Box>
                    </VStack>
                </Box>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default SideBar
