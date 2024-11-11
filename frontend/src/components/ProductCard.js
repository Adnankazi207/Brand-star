import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ product }) => {
	return (
		<Link
			as={RouterLink}
			to={`/product/${product._id}`}
			_hover={{ textDecor: 'none' }}  
			>
			<Box borderRadius='lg' bgColor='white' _hover={{ shadow: 'md' }} height={{base:'340px', sm: '430px',md:'480px', lg:'490px'}}>
				<Image
					src={product.image}
					alt={product.name}
					w='full'
					h={{base: '200px', sm:'300px', md:'350px'}}
					objectFit='cover'
					borderTopLeftRadius='lg'
					borderTopRightRadius='lg'
				/>
				<Flex py='5' px='4' direction='column' justifyContent='space-between'>
					<Heading as='h4' fontSize={{base: 'md', sm:'lg', md:'lg'}} mb='3'>
						{product.name}
					</Heading>

					<Flex alignItems='center' justifyContent='space-between' fontSize={{base:'sm'}}>
						<Rating value={product.rating} color='yellow.500' fontSize={{base:'sm', sm:'sm', md:'lg'}}/>

						<Text fontSize={{base:'sm', sm:'sm', md:'lg'}} fontWeight='bold' color='blue.600'>
							₹{product.price}
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Link>
	);
};

export default ProductCard;
