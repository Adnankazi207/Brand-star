import { Flex, Text } from '@chakra-ui/react';

const Footer =()=>{
    return(
        <Flex 
          as='footer'
          justifyContent='center'
          py='5'>
            <Text>
                © Copyright 2023. RST store. All Right Reserved
            </Text>
        </Flex>
    );
};

export default Footer;