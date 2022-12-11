import { Trans } from '@lingui/macro';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Localization from './components/context/Localization';
import FileSelector from './components/FileSelector';

function App(): JSX.Element {
  return (
    <Localization>
      <Container maxWidth="sm">
        <Box p={4}>
          <Typography variant="h4" align="center">
            <Trans>Split files into songs</Trans>
          </Typography>
        </Box>
        <Box p={4}>
          <FileSelector />
        </Box>
      </Container>
    </Localization>
  );
}

export default App;
