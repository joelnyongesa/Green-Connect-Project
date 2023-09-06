import {Card, Button, CardHeader, CardBody, CardFooter,Image, Flex, Avatar, Box, Heading, Text, IconButton} from '@chakra-ui/react'
import {HiUser, HiDotsVertical} from "react-icons/hi"
import {BiLike, BiChat, BiShare} from 'react-icons/bi'

import { useEffect, useState } from "react";

function Main(){
    const [posts, setPosts] = useState([])

    // fetching the posts
    useEffect(()=>{
        fetch('http://localhost:8000/posts')
        .then(r=>r.json())
        .then(data => setPosts(data))
        .catch(e=>console.log(e))
    }, [])
    console.log(posts)

    return(
        <>
            {posts.map((post)=>(
                <Card margin='1em'>
                    <CardHeader>
                        <Flex spacing='4' justifyContent='space-between'>
                            <Flex lex='1' gap='4' alignItems='center' flexWrap='wrap'>
                            <Avatar name="name" src={<HiUser/>}/>
                            <Box>
                                <Heading size='sm'>
                                    {post.user}
                                </Heading>
                            </Box>
                            </Flex>
                            <IconButton
                                variant="ghost"
                                colorscheme="gray"
                                aria-label="See menu"
                                icon={<HiDotsVertical />}
                            />
                        </Flex>
                    </CardHeader>
                    <CardBody>
                        <Text align='left' m='5px'>
                            {post.caption}
                        </Text>
                        <Image
                        objectFit='cover'
                        src={post.image}
                        alt='post'
                        />
                    </CardBody>
                    <CardFooter
                    justify='space-between'
                    flexWrap='wrap'
                    sx={{
                        '& > button':{
                            minW: '136px',
                        },
                    }}
                    >
                        <Button variant="ghost" leftIcon={<BiLike/>}>{post.likes} Likes</Button>
                        <Button variant="ghost" leftIcon={<BiChat/>}>{(post.comments.length)} Comments</Button>
                        <Button variant="ghost" leftIcon={<BiShare/>}> Share</Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}

export default Main;