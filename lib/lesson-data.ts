export interface Lesson {
  id: number
  title: string
  description: string
  content: {
    introduction: string
    sections: {
      title: string
      content: string
      codeExample?: string
    }[]
    keyTakeaways: string[]
  }
  diagramPrompt: string
  quiz: {
    question: string
    options: string[]
    correctAnswer: number
  }[]
}

export const lessonData: Record<number, Lesson> = {
  1: {
    id: 1,
    title: "Encryption",
    description: "Learn how encryption locks data with keys and protects information.",
    content: {
      introduction:
        "Encryption is the process of converting plain, readable data into an encoded format that can only be read by someone who has the correct decryption key. Think of it as locking your data in a secure vault where only those with the right key can access it.",
      sections: [
        {
          title: "What is Encryption?",
          content:
            "Encryption transforms plaintext (readable data) into ciphertext (encoded data) using mathematical algorithms and keys. This ensures that even if someone intercepts your data, they cannot read it without the decryption key.",
        },
        {
          title: "Symmetric Encryption",
          content:
            "Symmetric encryption uses the same key for both encryption and decryption. It's fast and efficient, making it ideal for encrypting large amounts of data. However, both parties must securely share the secret key.",
          codeExample: `// Symmetric Encryption Example
const secretKey = "my-secret-key-123"

function encrypt(data, key) {
  // Encryption logic
  return encryptedData
}

function decrypt(encryptedData, key) {
  // Decryption logic
  return originalData
}`,
        },
        {
          title: "Asymmetric Encryption",
          content:
            "Asymmetric encryption uses a pair of keys: a public key for encryption and a private key for decryption. Anyone can encrypt data with your public key, but only you can decrypt it with your private key. This is the foundation of blockchain security.",
          codeExample: `// Asymmetric Encryption Example
const { publicKey, privateKey } = generateKeyPair()

// Anyone can encrypt with public key
const encrypted = encrypt(data, publicKey)

// Only private key holder can decrypt
const decrypted = decrypt(encrypted, privateKey)`,
        },
        {
          title: "Blockchain Application",
          content:
            "In blockchain, your wallet's private key encrypts transactions, proving you authorized them. The corresponding public key allows anyone to verify the transaction came from you, but only you can create valid signatures with your private key.",
        },
      ],
      keyTakeaways: [
        "Encryption converts readable data into encoded format using keys",
        "Symmetric encryption uses one key for both encryption and decryption",
        "Asymmetric encryption uses public/private key pairs",
        "Private keys must be kept secret to maintain security",
        "Blockchain wallets use asymmetric encryption for transaction security",
      ],
    },
    diagramPrompt: "Show a lock and key with arrows: plain text → encryption → cipher text → decryption → plain text.",
    quiz: [
      {
        question: "What is the main purpose of encryption?",
        options: [
          "To make data faster to transmit",
          "To convert readable data into an unreadable format",
          "To compress data",
          "To delete data permanently",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which type of encryption uses the same key for encryption and decryption?",
        options: ["Asymmetric encryption", "Public key encryption", "Symmetric encryption", "Hash encryption"],
        correctAnswer: 2,
      },
      {
        question: "In asymmetric encryption, which key is used to encrypt data?",
        options: ["Private key", "Public key", "Secret key", "Session key"],
        correctAnswer: 1,
      },
      {
        question: "What does a blockchain wallet's private key do?",
        options: [
          "Stores cryptocurrency",
          "Creates and signs transactions",
          "Receives cryptocurrency",
          "Displays your balance",
        ],
        correctAnswer: 1,
      },
      {
        question: "Why must private keys be kept secret?",
        options: [
          "To make transactions faster",
          "To reduce transaction fees",
          "To prevent unauthorized access and maintain security",
          "To increase wallet storage",
        ],
        correctAnswer: 2,
      },
    ],
  },
  2: {
    id: 2,
    title: "Confidentiality",
    description: "Understand how to hide transaction details from the public.",
    content: {
      introduction:
        "Confidentiality in blockchain refers to keeping transaction details private while still maintaining the integrity and verifiability of the network. Unlike traditional blockchains where all transaction amounts are visible, confidential transactions hide sensitive information from public view.",
      sections: [
        {
          title: "What is Confidentiality?",
          content:
            "Confidentiality means hiding transaction details such as amounts, balances, and asset types from the public while allowing the sender and receiver to see the full information. This is crucial for businesses and individuals who don't want their financial activities exposed.",
        },
        {
          title: "Confidentiality vs Transparency",
          content:
            "Traditional blockchains are fully transparent - anyone can see all transaction amounts and balances. While this ensures accountability, it creates privacy concerns. Confidential transactions solve this by encrypting sensitive data while maintaining cryptographic proof that transactions are valid.",
        },
        {
          title: "How Confidentiality Works",
          content:
            "Confidential transactions use cryptographic techniques like homomorphic encryption and zero-knowledge proofs. These allow the network to verify that a transaction is valid (e.g., you have enough funds) without revealing the actual amounts involved.",
          codeExample: `// Confidential Transaction Example
const transaction = {
  from: "0xAlice...",
  to: "0xBob...",
  amount: encrypt(100), // Encrypted amount
  proof: generateProof() // Proves validity without revealing amount
}

// Network can verify without seeing amount
verify(transaction.proof) // Returns true if valid`,
        },
        {
          title: "Real-World Use Cases",
          content:
            "Confidential transactions are essential for payroll systems (hiding employee salaries), business payments (protecting trade secrets), and personal finance (maintaining privacy). Companies can use blockchain without exposing sensitive financial data to competitors.",
        },
      ],
      keyTakeaways: [
        "Confidentiality hides transaction amounts and balances from public view",
        "Sender and receiver can still see full transaction details",
        "Cryptographic proofs ensure transactions are valid without revealing amounts",
        "Essential for business and enterprise blockchain adoption",
        "Different from privacy, which focuses on hiding identities",
      ],
    },
    diagramPrompt: "Transaction line with sender and receiver visible, but the amount blurred/hidden with a lock icon.",
    quiz: [
      {
        question: "What does confidentiality in blockchain primarily protect?",
        options: ["User identities", "Transaction amounts and balances", "Network speed", "Gas fees"],
        correctAnswer: 1,
      },
      {
        question: "Who can see the full details of a confidential transaction?",
        options: ["Everyone on the network", "Only the sender and receiver", "Only miners", "Only the government"],
        correctAnswer: 1,
      },
      {
        question: "What is the main difference between confidentiality and privacy?",
        options: [
          "There is no difference",
          "Confidentiality hides amounts, privacy hides identities",
          "Confidentiality is faster",
          "Privacy is more secure",
        ],
        correctAnswer: 1,
      },
      {
        question: "Why do businesses need confidential transactions?",
        options: [
          "To avoid paying taxes",
          "To hide illegal activities",
          "To protect sensitive financial data from competitors",
          "To make transactions faster",
        ],
        correctAnswer: 2,
      },
      {
        question: "What cryptographic technique helps achieve confidentiality?",
        options: ["Simple hashing", "Zero-knowledge proofs", "Plain text encryption", "Public key only"],
        correctAnswer: 1,
      },
    ],
  },
  3: {
    id: 3,
    title: "Privacy",
    description: "Discover techniques for keeping identities hidden on the blockchain.",
    content: {
      introduction:
        "Privacy in blockchain focuses on protecting user identities and unlinking transactions from real-world individuals. While blockchain addresses are pseudonymous, sophisticated analysis can often trace transactions back to their owners. Privacy techniques solve this problem.",
      sections: [
        {
          title: "What is Privacy?",
          content:
            "Privacy means keeping your identity hidden when making transactions. Even though blockchain addresses don't contain your name, they can be linked to your identity through various means like exchange KYC, IP addresses, or transaction patterns. Privacy techniques break these links.",
        },
        {
          title: "Privacy vs Confidentiality",
          content:
            "Privacy hides WHO is transacting (identities), while confidentiality hides WHAT is being transacted (amounts). Both are important but serve different purposes. You might want privacy to prevent tracking your activities, and confidentiality to hide your financial position.",
        },
        {
          title: "Privacy Techniques",
          content:
            "Several techniques enhance privacy: Mixers pool transactions together to break the link between sender and receiver. Stealth addresses generate unique, one-time addresses for each transaction. Ring signatures hide the true sender among a group of possible signers.",
          codeExample: `// Stealth Address Example
function generateStealthAddress(recipientPublicKey) {
  const randomKey = generateRandom()
  const stealthAddress = derive(recipientPublicKey, randomKey)
  return {
    address: stealthAddress,
    viewKey: randomKey // Only recipient can detect payment
  }
}

// Each transaction uses a new address
const payment1 = generateStealthAddress(bobPublicKey)
const payment2 = generateStealthAddress(bobPublicKey)
// payment1.address !== payment2.address`,
        },
        {
          title: "Privacy in Practice",
          content:
            "Privacy-focused blockchains like Monero use ring signatures and stealth addresses by default. Ethereum users can use tools like Tornado Cash (mixer) or privacy-focused Layer 2 solutions. The goal is to make it computationally infeasible to link transactions to real identities.",
        },
      ],
      keyTakeaways: [
        "Privacy protects user identities, not transaction amounts",
        "Blockchain addresses are pseudonymous but can be traced",
        "Mixers, stealth addresses, and ring signatures enhance privacy",
        "Privacy and confidentiality work together for complete protection",
        "Privacy is essential for fungibility and personal security",
      ],
    },
    diagramPrompt:
      "Wallet icons with question marks instead of names; arrows showing hidden sender and receiver identities.",
    quiz: [
      {
        question: "What is the primary goal of privacy in blockchain?",
        options: [
          "To hide transaction amounts",
          "To hide user identities",
          "To increase transaction speed",
          "To reduce fees",
        ],
        correctAnswer: 1,
      },
      {
        question: "Are blockchain addresses truly anonymous?",
        options: [
          "Yes, completely anonymous",
          "No, they are pseudonymous and can be traced",
          "Only for Bitcoin",
          "Only if you use a VPN",
        ],
        correctAnswer: 1,
      },
      {
        question: "What does a mixer do?",
        options: [
          "Increases transaction speed",
          "Pools transactions to break sender-receiver links",
          "Encrypts transaction amounts",
          "Generates new wallets",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is a stealth address?",
        options: [
          "A hidden wallet",
          "A one-time address generated for each transaction",
          "An encrypted private key",
          "A type of smart contract",
        ],
        correctAnswer: 1,
      },
      {
        question: "How do privacy and confidentiality differ?",
        options: [
          "They are the same thing",
          "Privacy hides identities, confidentiality hides amounts",
          "Privacy is illegal, confidentiality is not",
          "Confidentiality is faster than privacy",
        ],
        correctAnswer: 1,
      },
    ],
  },
  4: {
    id: 4,
    title: "Identity-Based Encryption (IBE)",
    description: "Explore encryption tied to specific identities and conditions.",
    content: {
      introduction:
        "Identity-Based Encryption (IBE) is a revolutionary cryptographic approach where encryption is tied to a specific identity or condition, such as an email address, block number, or timestamp. This eliminates the need for traditional public key infrastructure and enables time-locked or condition-based encryption.",
      sections: [
        {
          title: "What is Identity-Based Encryption?",
          content:
            "In IBE, any string can serve as a public key - an email address, a date, a block number, or any identifier. The corresponding private key is generated by a trusted authority only when certain conditions are met. This creates powerful use cases for conditional decryption.",
        },
        {
          title: "How IBE Works",
          content:
            "A master authority holds a master secret key. When you want to encrypt data for a specific identity (like 'block 1000'), you use that identity as the public key. The authority can generate the corresponding private key only when that condition is met, allowing decryption at the right time.",
          codeExample: `// IBE Example
const identity = "block-1000"

// Encrypt data using identity as public key
const encrypted = encryptIBE(data, identity, masterPublicKey)

// Private key can only be generated at block 1000
if (currentBlock >= 1000) {
  const privateKey = generateIBEKey(identity, masterSecretKey)
  const decrypted = decryptIBE(encrypted, privateKey)
}`,
        },
        {
          title: "Time-Locked Encryption",
          content:
            "One powerful application of IBE is time-locked encryption. You can encrypt data that can only be decrypted after a specific time or block height. This is useful for sealed-bid auctions, scheduled reveals, and future-dated messages.",
        },
        {
          title: "Blockchain Applications",
          content:
            "IBE enables sophisticated blockchain features: sealed-bid auctions where bids are encrypted until the auction ends, scheduled token releases, time-locked wills and inheritance, and MEV protection by hiding transaction details until execution.",
        },
      ],
      keyTakeaways: [
        "IBE ties encryption to identities or conditions, not traditional key pairs",
        "Any string can serve as a public key in IBE",
        "Private keys are generated by a trusted authority when conditions are met",
        "Enables time-locked and condition-based encryption",
        "Useful for auctions, scheduled reveals, and MEV protection",
      ],
    },
    diagramPrompt: "Show message locked with tag 'Block 1000'. Key appears only at Block 1000 to unlock.",
    quiz: [
      {
        question: "What makes Identity-Based Encryption unique?",
        options: [
          "It's faster than other encryption",
          "Any string can serve as a public key",
          "It doesn't require any keys",
          "It's only for blockchain",
        ],
        correctAnswer: 1,
      },
      {
        question: "Who generates the private key in IBE?",
        options: ["The user", "A trusted authority", "The blockchain", "Anyone with the public key"],
        correctAnswer: 1,
      },
      {
        question: "What is time-locked encryption?",
        options: [
          "Encryption that expires",
          "Encryption that can only be decrypted after a specific time",
          "Encryption that is very slow",
          "Encryption that uses timestamps",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is a valid use case for IBE?",
        options: ["Faster transactions", "Sealed-bid auctions", "Reducing gas fees", "Increasing block size"],
        correctAnswer: 1,
      },
      {
        question: "In IBE, when can the private key be generated?",
        options: ["Anytime", "Only when the specified condition is met", "Only by the sender", "Never"],
        correctAnswer: 1,
      },
    ],
  },
  5: {
    id: 5,
    title: "Threshold IBE (TIBE)",
    description: "Learn about multi-party decryption and threshold cryptography.",
    content: {
      introduction:
        "Threshold Identity-Based Encryption (TIBE) extends IBE by requiring multiple parties to cooperate for decryption. Instead of a single authority holding all power, decryption requires a threshold number of parties to contribute their shares. This provides enhanced security and decentralization.",
      sections: [
        {
          title: "What is Threshold Cryptography?",
          content:
            "Threshold cryptography splits a secret into multiple shares distributed among different parties. To decrypt data, a minimum threshold of parties (e.g., 2 out of 3) must cooperate. No single party can decrypt alone, preventing single points of failure and insider attacks.",
        },
        {
          title: "How TIBE Works",
          content:
            "In TIBE, the master secret key is split among multiple authorities. To generate a decryption key for an identity, a threshold number of authorities must each contribute their share. This combines the benefits of IBE (identity-based encryption) with the security of threshold cryptography.",
          codeExample: `// Threshold IBE Example
const authorities = [authority1, authority2, authority3]
const threshold = 2 // Need 2 out of 3

// Encrypt with identity
const encrypted = encryptTIBE(data, "block-1000", masterPublicKey)

// At block 1000, collect shares from authorities
const shares = []
shares.push(authority1.generateShare("block-1000"))
shares.push(authority2.generateShare("block-1000"))

// Combine threshold shares to decrypt
if (shares.length >= threshold) {
  const privateKey = combineShares(shares)
  const decrypted = decryptTIBE(encrypted, privateKey)
}`,
        },
        {
          title: "Benefits of TIBE",
          content:
            "TIBE provides enhanced security through decentralization - no single authority can decrypt alone. It offers resilience against authority compromise, enables democratic governance for decryption decisions, and prevents insider attacks while maintaining the flexibility of identity-based encryption.",
        },
        {
          title: "Real-World Applications",
          content:
            "TIBE is ideal for high-security scenarios: multi-signature wallets with time-locks, corporate governance requiring multiple approvals, decentralized key management systems, and secure voting systems where results are revealed only after multiple parties agree.",
        },
      ],
      keyTakeaways: [
        "TIBE requires multiple parties to cooperate for decryption",
        "Threshold cryptography splits secrets into shares",
        "No single authority can decrypt data alone",
        "Provides enhanced security and decentralization",
        "Ideal for governance and high-security applications",
      ],
    },
    diagramPrompt: "3 key holders, 2 keys inserted into a lock, lock opens.",
    quiz: [
      {
        question: "What does 'threshold' mean in TIBE?",
        options: [
          "The maximum number of parties",
          "The minimum number of parties needed to decrypt",
          "The time limit for decryption",
          "The encryption strength",
        ],
        correctAnswer: 1,
      },
      {
        question: "In a 2-of-3 threshold scheme, how many parties must cooperate?",
        options: ["1", "2", "3", "All of them"],
        correctAnswer: 1,
      },
      {
        question: "What is the main advantage of TIBE over regular IBE?",
        options: [
          "It's faster",
          "No single party can decrypt alone",
          "It uses less storage",
          "It's easier to implement",
        ],
        correctAnswer: 1,
      },
      {
        question: "What happens if only 1 authority provides a share in a 2-of-3 scheme?",
        options: ["Decryption succeeds", "Decryption fails", "Partial decryption occurs", "The system crashes"],
        correctAnswer: 1,
      },
      {
        question: "Which scenario benefits most from TIBE?",
        options: [
          "Personal email encryption",
          "Corporate governance requiring multiple approvals",
          "Public data storage",
          "Fast transactions",
        ],
        correctAnswer: 1,
      },
    ],
  },
  6: {
    id: 6,
    title: "Confidential Stablecoins",
    description: "Master private transactions with encrypted balances and amounts.",
    content: {
      introduction:
        "Confidential stablecoins combine the stability of fiat-backed tokens with the privacy of encrypted transactions. They enable businesses and individuals to transact on public blockchains while keeping sensitive financial information private, using advanced cryptography like Twisted ElGamal, zero-knowledge proofs, and IBE.",
      sections: [
        {
          title: "What are Confidential Stablecoins?",
          content:
            "Confidential stablecoins are stablecoins where transaction amounts and account balances are encrypted. Addresses remain visible for compliance, but the financial details are hidden from public view. Only the sender, receiver, and authorized auditors can see the actual amounts.",
        },
        {
          title: "The Technology Behind It",
          content:
            "Confidential stablecoins use multiple cryptographic techniques: Twisted ElGamal encryption for homomorphic properties (allowing encrypted arithmetic), zero-knowledge proofs to verify transactions without revealing amounts, multi-party computation (MPC) for secure key management, and IBE for selective disclosure to auditors.",
          codeExample: `// Confidential Stablecoin Transaction
const transaction = {
  from: "0xAlice...",
  to: "0xBob...",
  encryptedAmount: encryptTwistedElGamal(100),
  proof: generateZKProof({
    statement: "I have sufficient balance",
    witness: { balance: 500, amount: 100 }
  })
}

// Network verifies proof without seeing amounts
if (verifyProof(transaction.proof)) {
  processTransaction(transaction)
}

// Auditor can decrypt with special key
const actualAmount = auditorDecrypt(
  transaction.encryptedAmount,
  auditorKey
)`,
        },
        {
          title: "Selective Disclosure",
          content:
            "A key feature is selective disclosure - the ability to reveal transaction details to specific parties like auditors or regulators without making them public. This balances privacy with compliance requirements, making confidential stablecoins suitable for regulated industries.",
        },
        {
          title: "Use Cases",
          content:
            "Confidential stablecoins excel in business applications: payroll systems where employee salaries remain private, B2B payments protecting trade secrets, treasury management without exposing company finances, institutional DeFi maintaining competitive advantages, and cross-border payments with privacy.",
        },
        {
          title: "The Future of Private Finance",
          content:
            "Confidential stablecoins represent the future of blockchain finance, combining transparency where needed (addresses, compliance) with privacy where required (amounts, balances). They enable mainstream adoption by businesses that need blockchain benefits without sacrificing financial privacy.",
        },
      ],
      keyTakeaways: [
        "Confidential stablecoins encrypt amounts and balances, not addresses",
        "Use Twisted ElGamal, ZK proofs, MPC, and IBE for privacy",
        "Enable selective disclosure to auditors and regulators",
        "Ideal for payroll, B2B payments, and institutional finance",
        "Balance privacy with compliance requirements",
      ],
    },
    diagramPrompt:
      "Two wallets connected by an arrow. Arrow label = 'Amount: hidden'. Auditor icon on the side with a magnifying glass that reveals the number.",
    quiz: [
      {
        question: "What information is hidden in confidential stablecoin transactions?",
        options: [
          "Sender and receiver addresses",
          "Transaction amounts and balances",
          "Transaction timestamps",
          "All transaction data",
        ],
        correctAnswer: 1,
      },
      {
        question: "What is selective disclosure?",
        options: [
          "Hiding all transaction data",
          "Revealing details to specific authorized parties",
          "Making everything public",
          "Encrypting addresses",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which cryptographic technique is used in confidential stablecoins?",
        options: ["Simple hashing", "Twisted ElGamal encryption", "Plain text encryption", "No encryption"],
        correctAnswer: 1,
      },
      {
        question: "Why are confidential stablecoins important for businesses?",
        options: [
          "They are faster",
          "They protect sensitive financial data from competitors",
          "They have lower fees",
          "They are easier to use",
        ],
        correctAnswer: 1,
      },
      {
        question: "What remains visible in confidential stablecoin transactions?",
        options: ["Everything", "Nothing", "Addresses for compliance", "Only the timestamp"],
        correctAnswer: 2,
      },
    ],
  },
}
