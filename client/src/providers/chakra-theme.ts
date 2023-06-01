import { extendTheme } from "@chakra-ui/react";
import { CardHeader } from "@chakra-ui/react";
CardHeader.defaultProps = {
  padding: 0,
};
const theme = extendTheme({
  fonts: {
    body: `'Lexand', sans-serif`,
  },
  components: {
    Card: {},
  },
});

export default theme;
