import React, { useEffect, useState } from "react";
import { useConnect } from "@stacks/connect-react";
import { StacksMocknet } from "@stacks/network";
import {
  AnchorMode,
  PostConditionMode,
  stringUtf8CV,
  standardPrincipalCV,
  contractPrincipalCV,
} from "@stacks/transactions";
import { userSession } from "./ConnectWallet";
import { uint } from "@stacks/transactions/dist/cl";
import { Button } from "@chakra-ui/react";

const ContractCallVote: React.FC = () => {
  const { doContractCall } = useConnect();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  function vote2() {
    const userAddress = userSession.loadUserData().profile.stxAddress.testnet;
    const cpCV = contractPrincipalCV(
      "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      "sbtc"
    );

    doContractCall({
      network: new StacksMocknet(),
      anchorMode: AnchorMode.Any,
      contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      contractName: "bitcoin-call",
      functionName: "mint",
      functionArgs: [cpCV, uint(99000000), uint(1500)],
      postConditionMode: PostConditionMode.Allow,
      postConditions: [],
      onFinish: (data) => {
        console.log("onFinish:", data);
        if (typeof window !== "undefined" && data.txId) {
          window
            .open(
              `https://explorer.hiro.so/txid/${data.txId}?api=http://localhost:3999`,
              "_blank"
            )
            ?.focus();
        }
      },
      onCancel: () => {
        console.log("onCancel:", "Transaction was canceled");
      },
    });
  }

  if (!mounted || !userSession.isUserSignedIn()) {
    return null;
  }

  return <Button onClick={() => vote2()}>Create sBTC calls 🍎</Button>;
};

export default ContractCallVote;
