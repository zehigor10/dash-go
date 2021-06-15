import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps{
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
              <Box mr="4" textAlign="right">
              <Text>José Higor</Text>
              <Text color="gray.300" fontSize="small">
                jhigorfoliveira@gmail.com
              </Text>
            </Box>
      ) }
      <Avatar
        size="md"
        name="José Higor"
        src="https://github.com/zehigor10.png"
      />
    </Flex>
  );
}
