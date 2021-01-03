import { Button, Collapse} from 'react-bootstrap'
import React, { useState } from 'react'

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="button"
      >
        Versi Website
      </Button>
      <Collapse in={open} className="collapse">
        <div id="example-collapse-text">
          Akses Sport V1.0
        </div>
      </Collapse>
    </>
  );
}

export default Example