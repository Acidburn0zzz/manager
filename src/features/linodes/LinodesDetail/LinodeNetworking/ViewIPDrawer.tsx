import * as React from 'react';
import {
  withStyles,
  StyleRulesCallback,
  Theme,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Drawer from 'src/components/Drawer';
import ActionsPanel from 'src/components/ActionsPanel';

type ClassNames = 'root'
  | 'section';

const styles: StyleRulesCallback<ClassNames> = (theme: Theme) => ({
  root: {},
  section: {
    marginBottom: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
});

interface Props {
  open: boolean;
  ip?: Linode.IPAddress;
  onClose: () => void;
}

type CombinedProps = Props & WithStyles<ClassNames>;

const ViewIPDrawer: React.StatelessComponent<CombinedProps> = (props) => {
  const { classes } = props;

  return (
    <Drawer
      open={props.open}
      onClose={props.onClose}
      title={`Details for IP`}
    >
      {props.ip &&
        <React.Fragment>
          <div className={classes.section} data-qa-ip-address-heading>
            <Typography variant="subheading">Address</Typography>
            <Typography variant="body1" data-qa-ip-address>
              {props.ip.address}
            </Typography>
          </div>

          <div className={classes.section} data-qa-gateway-heading>
            <Typography variant="subheading">Gateway</Typography>
            <Typography variant="body1" data-qa-gateway>
              {props.ip.gateway}
            </Typography>
          </div>

          <div className={classes.section} data-qa-subnet-heading>
            <Typography variant="subheading">Subnet Mask</Typography>
            <Typography variant="body1" data-qa-subnet>
              {props.ip.subnet_mask}
            </Typography>
          </div>

          <div className={classes.section} data-qa-type-heading>
            <Typography variant="subheading">Type</Typography>
            <Typography variant="body1" data-qa-type>
              {props.ip.type}
            </Typography>
          </div>

          <div className={classes.section} data-qa-public-heading>
            <Typography variant="subheading">Public</Typography>
            <Typography variant="body1" data-qa-public>
              {props.ip.public ? 'Yes' : 'No'}
            </Typography>
          </div>

          {props.ip.rdns &&
            <div className={classes.section} data-qa-rdns-heading>
              <Typography variant="subheading">RDNS</Typography>
              <Typography variant="body1" data-qa-rdns>
                {props.ip.rdns}
              </Typography>
            </div>
          }

          <div
            className={classes.section}
            style={{ border: 0, paddingBottom: 0 }}
            data-qa-region-heading
          >
            <Typography variant="subheading">Region</Typography>
            <Typography variant="body1" data-qa-region>
              {props.ip.region}
            </Typography>
          </div>

          <ActionsPanel>
            <Button
              variant="raised"
              color="secondary"
              onClick={props.onClose}
              data-qa-cancel
            >
              Close
            </Button>
          </ActionsPanel>
        </React.Fragment>
      }
    </Drawer>
  );
};

const styled = withStyles(styles, { withTheme: true });

export default styled<Props>(ViewIPDrawer);
