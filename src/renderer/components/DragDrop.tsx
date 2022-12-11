import { t } from '@lingui/macro';
import { FC } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes: string[] = ['WAV', 'MP3'];

type DragDropProps = {
  onUpload: (files: FileList) => void;
}

const DragDrop: FC<DragDropProps> = ({onUpload}) => {
  const handleChange = (files: FileList) => {
    onUpload(files)
  };
  return (
    <FileUploader
      handleChange={handleChange}
      name="file"
      types={fileTypes}
      multiple
      label={t`Upload the sound files`}
    />
  );
};

export default DragDrop;
