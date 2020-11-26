import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text
} from "@chakra-ui/react"

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
                    Dungeon Master - Chris Pickens
                    Current Location - Blood of the Vine Tavern
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
                    Tiefling Bard - John McKay
                    Tiefling Bard - John McKay
                    Tiefling Bard - John McKay
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
                    Spell-lookup
                    Monster-lookup
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default SideBar
