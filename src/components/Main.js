import {Card, Button, CardHeader, CardBody, CardFooter,Image, Flex, Avatar, Box, Heading, Text, IconButton} from '@chakra-ui/react'
import {HiUser, HiDotsVertical} from "react-icons/hi"
import {BiLike, BiChat, BiShare} from 'react-icons/bi'

import { useEffect, useState } from "react";
import { isDisabled } from '@testing-library/user-event/dist/utils';

function Main({posts}){
    const [buttonActive, setButtonActive] = useState(false)

    function handleDisableBtn(){
        setButtonActive(!buttonActive)
        
    }

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
                        width={'100%'}
                        borderRadius={'0.5rem'}
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
                        <Button 
                        variant="ghost" 
                        leftIcon={<BiLike/>} 
                        onClick={handleDisableBtn}
                        isDisabled={buttonActive ? true : false}
                        >{post.likes} Likes</Button>
                        <Button variant="ghost" leftIcon={<BiChat/>}>{(post.comments.length)} Comments</Button>
                        <Button variant="ghost" leftIcon={<BiShare/>}> Share</Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}

export default Main;