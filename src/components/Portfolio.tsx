   import React, { useEffect, useState } from 'react';
   import { Table, Button } from '@chakra-ui/react';
   import { useConnect } from '@stacks/connect-react';
   import { userSession } from './ConnectWallet';

   const Portfolio = () => {
     const { doContractCall } = useConnect();
     const [tokens, setTokens] = useState([]);

     useEffect(() => {
       // Fetch the user's tokens from the smart contract and organize them into batches
       // ...
     }, []);

     const transferTokens = (tokenId) => {
       // Trigger the transfer of tokens
       // ...
     };

     const transferSameStrikes = (tokenId) => {
       // Trigger the 'transfer-same-strikes' function
       // ...
     };

     return (
       <Table>
         <thead>
           <tr>
             <th>Strike Price</th>
             <th>Expiration Block</th>
             <th>Quantity</th>
             <th>Actions</th>
           </tr>
         </thead>
         <tbody>
           {tokens.map((token) => (
             <tr key={token.id}>
               <td>{token.strikePrice}</td>
               <td>{token.expirationBlock}</td>
               <td>{token.quantity}</td>
               <td>
                 <Button onClick={() => transferTokens(token.id)}>Transfer</Button>
                 <Button onClick={() => transferSameStrikes(token.id)}>Transfer Same Strikes</Button>
               </td>
             </tr>
           ))}
         </tbody>
       </Table>
     );
   };

   export default Portfolio;