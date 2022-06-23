import { Heading, ListItem, OrderedList, StackProps, Text, VStack } from "@chakra-ui/react"
import { Token } from "@uniswap/sdk-core"

interface HowItWorksProps extends StackProps {
  inputToken: Token
  outputToken: Token
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ inputToken, outputToken, ...props }) => (
  <>
    <VStack align="start" {...props}>
      <Heading as="h3" size="xs">
        How does it work?
      </Heading>
      <OrderedList fontSize="lg" spacing={2} pl={7}>
        <ListItem>
          Wrap 1 stETH for 1 {outputToken.symbol}
          <Text fontSize="md" color="purple.400" fontFamily="cursive">
            Secure ETH &amp; pledge your yield to permanent carbon removal.
          </Text>
        </ListItem>
        <ListItem>
          We try to join Frontier or run it ourselves
          <Text fontSize="md" color="purple.400" fontFamily="cursive">
            Front run oil companies for vegan wagyu carbon.
          </Text>
          {/* <IconButton
            ml={4}
            opacity={0.5}
            _hover={{ opacity: 1 }}
            transition="opacity 200ms ease-in-out"
            aria-label="learn more"
            icon={<HiExternalLink />}
            size="sm"
            variant="outline"
          /> */}
        </ListItem>
        <ListItem>
          Receive Proof of Impact certificates (w/ Toucan Protocol)
          <Text fontSize="md" color="purple.400" fontFamily="cursive">
            Now we have a carbon-bearing asset!
          </Text>
        </ListItem>
        <ListItem>
          Redeem certificates to go climate positive
          <Text fontSize="md" color="purple.400" fontFamily="cursive">
            Corporations are buying carbon assets at record levels!
          </Text>
        </ListItem>
      </OrderedList>
    </VStack>
    <Text fontSize="sm" color="purple.400">
      By depositing into Eden Dao&rsquo;s Vault contract at Ethereum address ({outputToken.address})
      you, the Contributor, donate the yield on your {inputToken.name} ({inputToken.symbol}) in
      order to receive {outputToken.symbol} tokens solely for the Contributor’s own benefit and
      account, for the purposes of personal consumption and utilization of {outputToken.symbol}{" "}
      tokens on Ethereum and not for any speculative purpose or with an expectation of profit, and
      not with a view to, or for resale in connection with, a public offering or other distribution
      of {outputToken.symbol} tokens, whether in exchange for other any other digital asset, any
      currency, any security or otherwise, and all of the foregoing remains true, accurate and
      complete on and as of the date of the contribution.
    </Text>
  </>
)
