import { Box, Heading, Text } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box
      bgImage="url('https://picsum.photos/1920/1080')"
      bgSize="cover"
      minH="100vh"
      d="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      px={6}
    >
      <Box
        bg="rgba(255, 255, 255, 0.5)"
        borderRadius="20"
        style={{
          display: ' flex',

          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Heading as="h1" fontSize="3xl" mb={6}>
          Phonebook
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Welcome to our Phonebook app! This app allows you to store and manage
          your contacts in one place. You can add new contacts, edit existing
          ones, and delete them if you no longer need them. With our app, you'll
          never lose track of your contacts again!
        </Text>
      </Box>
    </Box>
  );
};

export default HomePage;
