import * as React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from 'src/components/Grid';
import RenderGuard from 'src/components/RenderGuard';
import TextField from 'src/components/TextField';
import Toggle from 'src/components/Toggle';

import {
    Divider,
    StyleRulesCallback,
    Theme,
    Typography,
    WithStyles,
    withStyles,
  } from '@material-ui/core';

type ClassNames = 'root'
  | 'switch'
  | 'copy'
  | 'usage'
  | 'percentage';

const styles: StyleRulesCallback<ClassNames> = (theme: Theme) => ({
  '@keyframes fadeIn': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  root: {
    minHeight: 130,
    position: 'relative',
    padding: `${theme.spacing.unit * 3}px 0`,
    '&:last-of-type + hr': {
      display: 'none',
    },
    '& .toggleLabel > span:last-child': {
      position: 'absolute',
      left: 90,
      top: 40,
      ...theme.typography.subheading,
    },
  },
  switch: {
    width: 50,
    padding: '2px 0 !important',
  },
  copy: {
    [theme.breakpoints.down('sm')]: {
      flexBasis: '100%',
    },
    [theme.breakpoints.up('md')]: {
      margin: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 4}px 0`,
      width: 300,
    },
    [theme.breakpoints.up('lg')]: {
      width: 600,
    },
  },
  usage: {
    animation: 'fadeIn .3s ease-in-out forwards',
    marginTop: 0,
    width: 200,
  },
  percentage: {
    fontSize: '.9rem',
    marginRight: 10,
  },
});

interface Props {
  title: string;
  textTitle: string;
  radioInputLabel: string;
  textInputLabel: string;
  copy: string;
  state: boolean;
  value: number;
  onStateChange: (e: React.ChangeEvent<{}>, checked: boolean) => void;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  endAdornment: string;
}

type CombinedProps = Props & WithStyles<ClassNames>;

class AlertSection extends React.Component<CombinedProps> {

  render () {
    const { classes } = this.props;

    return (
        <React.Fragment>
            <Grid
            container
            alignItems="flex-start"
            className={classes.root}
            data-qa-alerts-panel
            >
            <Grid item className={classes.switch}>
                <FormControlLabel
                className="toggleLabel"
                control={<Toggle checked={this.props.state} onChange={this.props.onStateChange} />}
                label={this.props.title}
                data-qa-alert={this.props.title}
                />
            </Grid>
            <Grid item className={classes.copy}>
                <Typography>{this.props.copy}</Typography>
            </Grid>
            <Grid item>
                <TextField
                label={this.props.textTitle}
                type="number"
                value={this.props.value}
                disabled={!this.props.state}
                InputProps={{
                  endAdornment: <span className={classes.percentage}>
                  {this.props.endAdornment}</span>,
                }}
                error={Boolean(this.props.error)}
                errorText={this.props.error}
                /**
                 * input type of NUMBER and maxlength do not work well together.
                 * https://github.com/mui-org/material-ui/issues/5309#issuecomment-355462588
                 */
                inputProps={{
                  maxLength: 2,
                }}
                onChange={this.props.onValueChange}
                className={classes.usage}
                />
            </Grid>
            </Grid>
            <Divider />
        </React.Fragment>
    );
  }
}

const styled = withStyles(styles, { withTheme: true });

export default styled(RenderGuard<CombinedProps>(AlertSection));
