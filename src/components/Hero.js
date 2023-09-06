import { Flex, Image, Text } from "@chakra-ui/react";


const Hero = () => {
    return ( 

        <Flex >
            <Image 
            src="https://images.pexels.com/photos/17330682/pexels-photo-17330682/free-photo-of-reforestation.png?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            objectFit={'contain'}
            borderRadius={'1em'}
            />
            <Flex flexDirection={'column'} align={'center'} alignItems={'center'} justifyContent={'center'} margin={'2.5em'}>
                <Text fontSize={'2xl'} fontStyle={'italic'} color={'#1D3C34'}>
                    Green Connect: Connecting the world for a greener future. Join us in inspiring change, sharing ideas, and taking action for a sustainable planet. Together, we make a difference. Welcome to the green revolution</Text>
            </Flex>

        </Flex>
        // <div className="hero">
        //     <img src = "https://images.pexels.com/photos/17330682/pexels-photo-17330682/free-photo-of-reforestation.png?auto=compress&cs=tinysrgb&w=1600&lazy=load" className="hero-img" alt="Go green"/>
        //     <div className="hero-txt">
        //         <p >Green Connect: Connecting the world for a greener future. Join us in inspiring change, sharing ideas, and taking action for a sustainable planet. Together, we make a difference. Welcome to the green revolution</p>
        //     </div>
        // </div>
     );
}
 
export default Hero;