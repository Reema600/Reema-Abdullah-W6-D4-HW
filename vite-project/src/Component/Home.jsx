
import { Box, Flex, HStack, Image, Text, chakra } from "@chakra-ui/react";
import { FaEnvelope, FaMapPin, FaSuitcase } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Footer from "./Footer.Jsx";
export default function Home() {
  return (
    <div>
        {/* <NavBar></NavBar> */}
        {/* <Link to='/'>{props.home}</Link>  */}
 <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        shadow="lg"
        rounded="lg"
        bg="#edf3f8"
        _dark={{ bg: "gray.800" }}
        mb={8}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          bg="#edf3f8"
          _dark={{ bg: "#3e3e3e" }}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4ODA0Mzk5fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          height="100%"
          width="100%"
          borderRadius="lg"
          p={8}
          display="flex"
          alignItems="left"
        >
          <Image
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="Profile Picture"
            borderRadius="full"
            boxSize="150px"
            shadow="lg"
            border="5px solid"
            mb={-20}
            borderColor="gray.800"
            _dark={{ borderColor: "gray.200" }}
          />
        </Box>
        <Box
          gridColumn="span 8"
          p={8}
          width="full"
          height="full"
          borderRadius="lg"
          textAlign="left"
          mt={10}
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{ color: "white" }}
          >
            Reema Abdullah
          </Text>
          <HStack spacing={3} color="gray.800" _dark={{ color: "gray.200" }}>
            <FaSuitcase size={24} />
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{ color: "gray.200" }}
            >
              Web Developer
            </Text>
          </HStack>
          <HStack spacing={3} color="gray.700" _dark={{ color: "gray.200" }}>
            <FaMapPin size={20} />
            <Text fontSize="lg">Riyadh</Text>
          </HStack>
          <HStack spacing={3} color="gray.700" _dark={{ color: "gray.200" }}>
            <FaEnvelope size={20} />
            <Text fontSize="lg">Reema@hotmail.com</Text>
          </HStack>
        </Box>
      </Flex>
    </Flex>
    {/* ========================================================== */}
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        px={8}
        py={4}
        rounded="lg"
        shadow="lg"
        bg="white"
        _dark={{ bg: "gray.800" }}
        maxW="2xl"
      >
        <Flex justifyContent="space-between" alignItems="center">
          <chakra.span
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >
           Start: April 30, 2023
          </chakra.span>
          {/* <Link
            px={3}
            py={1}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            Design
          </Link> */}
        </Flex>

        <Box mt={2}>
          <Link
            fontSize="2xl"
            color="gray.700"
            _dark={{ color: "white" }}
            fontWeight="700"
            _hover={{
              color: "gray.600",
              _dark: {
                color: "gray.200",
              },
              textDecor: "underline",
            }}
          >
            Student at Tuwaiq Academy
          </Link>
          <chakra.p mt={2} color="gray.600" _dark={{ color: "gray.300" }}>
          Student in JavaScript camp
An intensive camp that offers a unique experience with deep expertise in building and testing web applications using JavaScript.
          </chakra.p>
        </Box>

        <Flex justifyContent="space-between" alignItems="center" mt={4}>
          <Link 
            color="brand.600"
            _dark={{ color: "brand.400" }}
            _hover={{ textDecor: "underline" }}
            
          >
            Read more
          </Link>

          <Flex alignItems="center">
            <Image
              mx={4}
              w={10}
              h={10}
              rounded="full"
              fit="cover"
              display={{ base: "none", sm: "block" }}
              src="https://bootcamp.sa/static/media/tuwaiq-logo-header.38424b35.svg"
              alt="avatar"
            />
            <Link
              color="gray.700"
              _dark={{ color: "gray.200" }}
              fontWeight="700"
              cursor="pointer"
            >
              Tuwaiq Academy
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      
    <Link to='/about'
   
            px={10}
            py={5}
            bg="gray.600"
            color="gray.100"
            fontSize="sm"
            fontWeight="700"
            rounded="md"
            _hover={{ bg: "gray.500" }}
          >
            About Me
          </Link>
          </Flex>
        <Footer></Footer>
    </div>
  )
}
