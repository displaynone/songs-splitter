import { Card } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import DragDrop from './DragDrop';
import FileListing from './FileListing';

const FileSelector: FC = () => {
  const [files, setFiles] = useState<File[]>();

  const addFiles = (newFiles: FileList) => {
    const filesArray = Array.from(newFiles);
    if (!files) {
      setFiles(filesArray);
    } else {
      setFiles([...files, ...filesArray]);
    }
  };
  return (
    <Card>
      <Box p={4}>
        <DragDrop onUpload={addFiles} />
        <FileListing files={files} onChange={setFiles} />
      </Box>
    </Card>
  );
};

export default FileSelector;
