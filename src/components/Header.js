import { Flex,Heading, Text } from "@chakra-ui/react";


const Header = () => {
    return (
        <Flex flexDirection={'column'} align={'center'} justifyContent={'center'}>
            <Heading>GREEN CONNECT</Heading>
            <Text fontSize={'md'} m={'0.4em'}>Connecting Minds, Changing Climates</Text>
        </Flex>
        // <div className="header">
        //     <h2 className="header-title">GREEN CONNECT</h2>
        //     <h4 className="header-txt">Connecting Minds, Changing Climates</h4>
        // </div>
      );
}
 
export default Header ;