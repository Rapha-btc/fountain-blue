import { Box, Button, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // import useNavigate hook
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import ConnectWallet from "./ConnectWallet";
import StandardE from "./StandardE";

const NavBar = () => {
  const navigate = useNavigate(); // initialize useNavigate hook

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Box>
        {/* <Image src={logo} boxSize="60px"></Image> */}
        <ColorModeSwitch />
        <StandardE />
      </Box>
      <Button onClick={() => navigate('/path')}>Connect Wallet</Button> // use navigate function instead of Redirect component
    </HStack>
  );
};

export default NavBar;