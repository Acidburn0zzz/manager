import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Button from 'src/components/Button';

import { default as MDivider } from '@material-ui/core/Divider';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

import ThemeDecorator from '../../utilities/storybookDecorators';

const Divider = () => <MDivider style={{ marginBottom: '8px', marginTop: '8px' }} />;

storiesOf('Button', module)
  .addDecorator(ThemeDecorator)
  .add('Types', () => (
    <React.Fragment>
      <Button type="primary" data-qa-button="primary">Primary</Button>
      <Divider />
      <Button type="secondary" data-qa-button="secondary">Secondary</Button>
      <Divider />
      <Button type="cancel" data-qa-button="cancel">Cancel</Button>
      <Divider />
    </React.Fragment>
  ))
  .add('Disabled', () => (
    <React.Fragment>
      <Button disabled type="primary" data-qa-button="primary">Primary</Button>
      <Divider />
      <Button disabled type="secondary" data-qa-button="secondary">Secondary</Button>
      <Divider />
      <Button disabled type="cancel" data-qa-button="cancel">Cancel</Button>
      <Divider />
    </React.Fragment>
  ))
  .add('Loading', () => (
    <React.Fragment>
      <Button loading type="primary" data-qa-button="primary">Primary</Button>
      <Divider />
      <Button loading type="secondary" data-qa-button="secondary">Secondary</Button>
      <Divider />
      <Button loading type="cancel" data-qa-button="cancel">Cancel</Button>
      <Divider />
    </React.Fragment>
  ))
  .add('Destructive', () => (
    <React.Fragment>
      <Button destructive type="primary" data-qa-button="primary">Primary</Button>
      <Divider />
      <Button destructive type="secondary" data-qa-button="secondary">Secondary</Button>
      <Divider />
    </React.Fragment>
  ))
  .add('Loading Destructive', () => (
    <React.Fragment>
      <Button loading destructive type="primary" data-qa-button="primary">Primary</Button>
      <Divider />
      <Button loading destructive type="secondary" data-qa-button="secondary">Secondary</Button>
      <Divider />
    </React.Fragment>
  ))
  .add('Primary Dropdown', () => (
    <React.Fragment>
      <Button
        type="primary"
        className="button-dropdown"
        data-qa-button="dropdown"
      >
        Primary Dropdown
      <KeyboardArrowDown className="caret"></KeyboardArrowDown>
      </Button>
      <Divider />
      <Button
        type="primary"
        className="button-dropdown"
        data-qa-button="dropdown"
      >
        Primary Dropdown Active
      <KeyboardArrowUp className="caret"></KeyboardArrowUp>
      </Button>
      <Divider />
      <Button
        type="primary"
        disabled
        className="button-dropdown"
        data-qa-button="dropdown"
      >
        Primary Dropdown
      <KeyboardArrowDown className="caret"></KeyboardArrowDown>
      </Button>
    </React.Fragment>
  ))
  .add('Secondary Dropdown', () => (
    <React.Fragment>
      <Button
        type="secondary"
        className="button-dropdown"
        data-qa-button="dropdown-secondary"
      >
        Secondary Dropdown
    <KeyboardArrowDown className="caret"></KeyboardArrowDown>
      </Button>
      <Divider />
      <Button
        type="secondary"
        className="button-dropdown"
        data-qa-button="dropdown-secondary"
      >
        Secondary Dropdown Active
    <KeyboardArrowUp className="caret"></KeyboardArrowUp>
      </Button>
      <Divider />
      <Button
        type="secondary"
        disabled
        className="button-dropdown"
        data-qa-button="dropdown-secondary"
      >
        Secondary Dropdown
    <KeyboardArrowDown className="caret"></KeyboardArrowDown>
      </Button>
    </React.Fragment>
  ));
