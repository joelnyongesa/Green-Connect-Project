import {Card, Button, CardHeader, CardBody, CardFooter,Image, Flex, Avatar, Box, Heading, Text, IconButton} from '@chakra-ui/react'
import {HiUser, HiDotsVertical} from "react-icons/hi"
import {BiLike, BiChat, BiShare} from 'react-icons/bi'
// import {africastalking} from 'africastalking';

import { useEffect, useState, useRef } from "react";

const sendAirtime = ({apiKey, username, amount, phoneNumber}) => {
    return new Promise((resolve, reject)=>{
 
        console.log({
            apiKey, username, amount, phoneNumber
        })

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("apiKey", apiKey);
        myHeaders.append("User-Agent","PostmanRuntime/7.32.3")

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("recipients", `[{\"phoneNumber\":\"${phoneNumber}\",\"amount\":\"KES ${amount || 5 }\"}]`);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow',
        // mode:'no-cors'
        
        "Access-Control-Allow-Origin": "https://api.africastalking.com"

        };

        fetch("https://api.africastalking.com/version1/airtime/send", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    })
}

function Main({posts}){
    const [buttonActive, setButtonActive] = useState(false)
    const [noOfLikes, setNoOfLikes] = useState({})

     // credentials
    const credentials = {
        apiKey: '2bdd0aae2b6decddbd9218f8f4dc93b4c8a2402ea99a18a10c52e7848dbdad6c',
        username: 'Vicvestar1'
    }

     

    function handleDisableBtn(postId, noOfLikes, post) {
        const newLikes = noOfLikes + 1
        setButtonActive({ ...buttonActive, [postId]: !buttonActive[postId] });
        setNoOfLikes({ ...noOfLikes, [postId]: newLikes });
        // console.log(likes)
        fetch(`https://greenapp-api.onrender.com/${postId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                likes: newLikes
            })
        })
        .then(r=>r.json())
 


        if(newLikes === 100){
            alert("100 Likes!")
            sendAirtime({
                ...credentials,
                phoneNumber: '+254705669144',//post.phoneNumber,
                amount: "5"
            });
    

        }
      }
      

    const out = (
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
                        leftIcon={<BiLike />}
                        onClick={() => {
                            handleDisableBtn(post.id, post.likes, post); 
                            }
                        }
                        isDisabled={buttonActive[post.id] ? true : false}
                        >{noOfLikes[post.id] || post.likes} Likes</Button>
                        <Button variant="ghost" leftIcon={<BiChat/>}>{(post.comments.length)} Comments</Button>
                        <Button variant="ghost" leftIcon={<BiShare/>}> Share</Button>
                    </CardFooter>
                </Card>
            ))}
        </>
    )

    return out
}

export default Main;