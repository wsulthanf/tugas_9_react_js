import { Popover, OverlayTrigger, Button  } from 'react-bootstrap'

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Informasi Website</Popover.Title>
    <Popover.Content>
      Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olaraga
    </Popover.Content>
  </Popover>
);

const popButton = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="primary">Informasi</Button>
  </OverlayTrigger>
);

export default popButton