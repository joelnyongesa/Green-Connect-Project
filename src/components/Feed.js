import {Grid, GridItem} from '@chakra-ui/react'
import NewPost from './NewPost';
import Main from './Main';

function Feed(){
    return (
        <Grid
        templateAreas={`"nav new-post"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'auto 1fr 1.875rem'}
        gridTemplateColumns={'30% 1fr'}
        h='100vh'
        gap='1'
        color='white'
        fontWeight='bold'
        margin='1.25rem'
        >
            <GridItem p='10px' bg='#1D3C34' area={'new-post'}>
                <NewPost />
            </GridItem>
            <GridItem pl='2' bg='#1D3C34' area={'nav'}>
                Nav
            </GridItem>
            <GridItem pl='2' bg='#1D3C34' area={'main'}>
                <Main />
            </GridItem>
            <GridItem pl='2' bg='#1D3C34' area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    )
}


export default Feed;