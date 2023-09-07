import { useState, useEffect } from 'react'
import {Card, CardBody, Image, Stack, Heading, Text,  Button, Divider, CardFooter} from '@chakra-ui/react'
import {BiCategory, BiWorld, BiHash} from 'react-icons/bi'
import {SlBadge} from 'react-icons/sl'


function Nav({user}){
    

   
    return(
            <Card maxW={'xl'} padding={'0'} m={'0rem'} align={'center'} width={'90%'}>
                <CardBody>
                    <Image
                        src='https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face-thumbnail.png'
                        alt={user.name}
                        objectFit='cover'
                        width='70px'
                        borderRadius='10%'
                        
                    />
                    <Stack mt={3} spacing={0}>
                        <Heading  fontSize={'md'}>{user.username}</Heading>
                        <Text fontSize={'xs'} color={'gray.500'}>Ranger</Text>
                        <Text fontSize={'xs'}>Nairobi, Kenya</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Stack>
                        <Button leftIcon={<SlBadge/>} variant={'ghost'}>Rewards</Button>
                        <Button leftIcon={<BiCategory />} variant={'ghost'}>Categories</Button>
                        <Button leftIcon={<BiWorld />} variant={'ghost'}>Communities</Button>
                        <Button leftIcon={<BiHash />} variant={'ghost'}>Trending</Button>
                    </Stack>

                </CardFooter>
            </Card>
    )
}


export default Nav;