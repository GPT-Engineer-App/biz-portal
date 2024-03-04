import React from "react";
import { Box, Flex, Heading, Text, Button, Image, VStack, Stack, Container, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" p={4} bg={useColorModeValue("gray.100", "gray.900")}>
        <Heading as="h1" size="lg">
          Business Inc.
        </Heading>
        <HStack as="nav" spacing={4}>
          <Button colorScheme="blue">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Contact</Button>
        </HStack>
      </Flex>

      <Container maxW="container.xl" p={4} centerContent>
        <VStack spacing={8} align="stretch">
          <Box>
            <Image borderRadius="md" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG9mZmljZXxlbnwwfHx8fDE3MDk1NzkyNDN8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          </Box>
          <Box textAlign="center">
            <Heading as="h2" size="xl">
              Welcome to Business Inc.
            </Heading>
            <Text mt={4}>We are a leading firm in providing quality and value to our customers. Each member of our team has at least 5 years of legal experience. We love what we do.</Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg">
              Our Services
            </Heading>
            <Stack direction={["column", "row"]} spacing={4} align="center" justify="center" mt={4}>
              <ServiceCard title="Consulting" description="Expert advice to help you make the right decisions." icon={FaPhoneAlt} />
              <ServiceCard title="Marketing" description="Comprehensive marketing strategies that deliver results." icon={FaEnvelope} />
              <ServiceCard title="Development" description="Custom software solutions tailored to your needs." icon={FaPlus} />
            </Stack>
          </Box>
          <Box as="footer" p={4} bg={useColorModeValue("gray.200", "gray.800")}>
            <Flex align="center" justify="space-between">
              <Text>&copy; {new Date().getFullYear()} Business Inc. All rights reserved.</Text>
              <HStack spacing={4}>
                <Icon as={FaFacebookF} />
                <Icon as={FaTwitter} />
                <Icon as={FaLinkedinIn} />
                <Icon as={FaInstagram} />
              </HStack>
            </Flex>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <VStack p={4} bg={useColorModeValue("white", "gray.700")} boxShadow="lg" borderRadius="md" align="center" spacing={4}>
      <Icon as={icon} w={10} h={10} />
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
