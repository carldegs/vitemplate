import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <Box as="nav">
        <Flex justify="space-between" align="center" maxW="1800px" px={8}>
          <Link to="/">
            <Text fontWeight="bold">Vitemplate</Text>
          </Link>
          <HStack gap={8} py={4}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </HStack>
        </Flex>
      </Box>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
