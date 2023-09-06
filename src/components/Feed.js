import {Grid, GridItem, Flex} from '@chakra-ui/react'
import NewPost from './NewPost';
import Main from './Main';
import Nav from './Nav';

function Feed(){
    return (
        <Grid
        templateAreas={`"nav new-post"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'auto 1fr 1.875rem'}
        gridTemplateColumns={'1fr 70%'}
        h='100vh'
        gap='1'
        color='black'
        fontWeight='normal'
        margin='1.25rem'
        >
            <GridItem p='10px' bg='#1D3C34' area={'new-post'} color={'#ffffff'} borderRadius={'0.5rem'}>
                <NewPost />
            </GridItem>
            <GridItem pl='2' bg='#1D3C34' area={'nav'} position={'fixed'} height={'80vh'} width={'25%'} borderRadius={'0.4rem'} mt={'4rem'} >
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
            >
                <Nav />
            </Flex>
                
            </GridItem>
            <GridItem pl='2' bg='#1D3C34' area={'main'} borderRadius={'0.5rem'}>
                <Main />
            </GridItem>
            <GridItem pl='2' bg='#ffffff' area={'footer'}>
                <Flex justifyContent={'center'} m={'10px'}>
                    &copy; 2023
                </Flex>
                
            </GridItem>
        </Grid>
    )
}


export default Feed;