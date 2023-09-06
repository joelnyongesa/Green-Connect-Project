import { Flex, IconButton, Textarea } from "@chakra-ui/react"
// import {AddIcon} from '@chakra-ui/icons'
import {HiPhotograph, HiUser, HiVideoCamera} from "react-icons/hi"
import {FaPoll} from 'react-icons/fa'

function NewPost(){
    return(
        <>
            <Flex>
                <IconButton isRound={true} aria-label='User' icon={<HiUser  />} />
                <Textarea placeholder='What have you done today?' />
            </Flex>
            <Flex margin='10px' justifyContent="space-evenly">
                <IconButton mr='5px' aria-label="photo" icon={<HiPhotograph/>}/> <span>Photo</span>
                <IconButton aria-label="video" icon={<HiVideoCamera/>}/> Video
                <IconButton aria-label="poll" icon={<FaPoll/>}/> Poll
            </Flex>
        </>
    )
}

export default NewPost