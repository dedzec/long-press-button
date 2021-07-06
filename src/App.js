import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import logo from './logo.svg';
import './App.css';

import useLongPress from './useLongPress';

const App = () => {
  const [desc, setDesc] = useState('');
  const [open, setOpen] = useState(false);

  const longPressProps = useLongPress();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Button Long Press</p>
        <Button
          variant="contained"
          color="primary"
          {...longPressProps(
            () => {
              const text = 'click is triggered';
              console.log(text);
              setDesc(text);
              setOpen(true);
            },
            () => {
              const text = 'longpress is triggered';
              console.log(text);
              setDesc(text);
              setOpen(true);
            }
          )}
        >
          LongPress
        </Button>
      </header>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        autoHideDuration={3000}
        open={open}
        onClose={handleClose}
        message={desc}
        action={
          <>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default App;
