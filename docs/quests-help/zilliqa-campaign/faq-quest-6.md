---
id: faq-quest-6
title: FAQ Quest 6
---

This is the FAQ of the ***Quest 4: Introduction to NFTs on Zilliqa***. If you can't solve your issue here you still can ask your doubt in the [discord server](https://discord.gg/3x3h2z6A63) (#zilliqa-helpdesk channel).

### (Step 7) Issue: Unable to verify transaction!
![error](https://media.discordapp.net/attachments/1004955384341090394/1008602603569033307/15.08.2022_12.45.25_REC.png?width=399&height=613)

- In your IDE, check the wallet that it's connected to. Is it the same wallet as the one in your ZilPay with the testnet ZILs?

### (Step 8) Issue: Where can I get Base16 address!

- You can ask fellow stackies.
- Create another zillqa wallet.
- Can use any of these address 0x8d5ed657c7116AdD2B3F3FfD367a011e2Ac97993, 0x3D5a99D1d7F38c1aD6646A3DbE982713C68dF2c7, 0x2Ddeae69E486AcA5194b035CD4646e39B7b3fdb8, 0xb8fE8b7E6335Fd739013C87E36A8E18c019ad975, 0xB3677053D4880a42949e998Ecd590059Aa7a2875 .

### (Step 9) Issue: I am stuck at batch minting! Don't know what code to add?

Have to add this code 
```
[{
 "constructor":"Pair",
 "argtypes": [
   "ByStr20",
   "String"
  ],
 "arguments": [
  "Wallet-A base16 address",
  "2"
 ]
}, {
 "constructor":"Pair",
 "argtypes": [
   "ByStr20",
   "String"
  ],
 "arguments": [
  "Wallet-B base16 address",
  "3"
 ]
}]

```

**If you, not find your question or you feel something is missing please feel free to add more questions.** 

### Comments
import Comment from '@site/src/components/Comments';

<Comment></Comment>