import { AudioFileOutlined, DeleteOutline } from '@mui/icons-material';
import {
  ButtonGroup,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

type FileListingProps = {
  files?: File[];
  onChange?: (files?: File[]) => void;
};

const FileListing: FC<FileListingProps> = ({ files, onChange }) => {
  if (!files) {
    return null;
  }

  const deleteFile = (index: number) => {
    onChange && onChange(files.filter((_f, i) => i !== index));
  };

  return (
    <Card>
      <Box p={2}>
        <List style={{ maxHeight: 150, overflow: 'auto' }}>
          {files.map((file, key) => (
            <ListItem
              key={key}
              disablePadding
              dense
              secondaryAction={
                <ButtonGroup>
                  <IconButton onClick={() => deleteFile(key)}>
                    <DeleteOutline color="error" />
                  </IconButton>
                </ButtonGroup>
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <AudioFileOutlined />
                </ListItemIcon>
                <ListItemText primary={file.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};

export default FileListing;
