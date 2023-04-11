import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const orgData = {
  // Your JSON object
};

const generateTreeItems = (data, prefix) => {
  if (Array.isArray(data)) {
    return data.map((item, index) => generateTreeItems(item, `${prefix}-${index}`));
  }

  if (typeof data === 'object') {
    return Object.entries(data).map(([key, value], index) => (
      <TreeItem key={`${prefix}-${index}`} nodeId={`${prefix}-${index}`} label={`${key}`}>
        {generateTreeItems(value, `${prefix}-${index}`)}
      </TreeItem>
    ));
  }

  return <TreeItem key={prefix} nodeId={prefix} label={String(data)} />;
};

const ModalContent = ({ handleClose }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        overflowY: 'auto',
        maxHeight: '80%',
      }}
    >
      <Typography variant="h6" component="h2">
        Organization Structure
      </Typography>
      <TreeView
        sx={{ mt: 2 }}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {generateTreeItems(orgData, 'root')}
      </TreeView>
      <Button variant="contained" color="primary" onClick={handleClose} sx={{ mt: 2 }}>
        Close
      </Button>
    </Box>
  );
};

const Model = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="secondary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <ModalContent handleClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Model;
