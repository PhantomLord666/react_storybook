// Accordion.stories.js
import React from 'react';
import { FaInfoCircle, FaFolderOpen } from 'react-icons/fa';
import Accordion from './Accordion';

export default {
  title: 'Components/Navigation/Accordion',
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const DefaultAccordion = Template.bind({});
DefaultAccordion.args = {
  title: 'Default Accordion',
  icon: FaInfoCircle,
  children: <p>This is the content of the accordion.</p>,
  variant: 'default',
  rightContent: {
    showIcon: true,
    badge: null,
  },
};

export const OutlinedAccordion = Template.bind({});
OutlinedAccordion.args = {
  title: 'Outlined Accordion',
  icon: FaFolderOpen,
  children: <p>This is the content of the accordion.</p>,
  variant: 'outlined',
  rightContent: {
    showIcon: true,
    badge: null,
  },
};

export const FilledAccordionWithTable = Template.bind({});
FilledAccordionWithTable.args = {
  title: 'Accordion with Table',
  icon: FaFolderOpen,
  variant: 'filled',
  isTable: true,
  children: (
    <>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>30</td>
          <td>New York</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>25</td>
          <td>Los Angeles</td>
        </tr>
        <tr>
          <td>Michael Brown</td>
          <td>28</td>
          <td>Chicago</td>
        </tr>
      </tbody>
    </>
  ),
  rightContent: {
    showIcon: true,
    badge: null,
  },
};

