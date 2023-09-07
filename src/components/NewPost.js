import { Flex, Textarea, Button,Input, Spacer, Box, Stack } from "@chakra-ui/react"
// import {AddIcon} from '@chakra-ui/icons'
import {HiPhotograph, HiUser, HiVideoCamera} from "react-icons/hi"
import {FaPoll} from 'react-icons/fa'
import { useState, useEffect } from "react"


function NewPost({onAddPost, userObject}){
const[user, setUser] = useState('')
const[image, setImage] = useState('')
const[caption, setCaption] = useState('')

    function handlePostSubmit(e){
        e.preventDefault()

        const newPost = {
            user: userObject.username,
            image:image,
            caption:caption,
            likes: 0,
            comments: []
        }

        fetch(' http://localhost:8000/posts', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPost)
        })
        .then(res=>res.json())
        .then(data => onAddPost(data))
        .catch(error => console.log(error));
    }

    
    
    return(
        <form onSubmit={handlePostSubmit} spacing={3} >
            <Stack spacing={3} >
            <Textarea required placeholder='What have you done today?' onChange={(e)=>setCaption(e.target.value)}/>
            <Input type="url" placeholder="Image address"  width='40%'onChange={(e)=>setImage(e.target.value)}/>
            </Stack>
            <Flex margin='10px' justifyContent="space-evenly">
               <Button type="submit">POST</Button>
               
            </Flex>
        </form>
    )
}

export default NewPost