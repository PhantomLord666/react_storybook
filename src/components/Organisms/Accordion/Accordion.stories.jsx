import Reacr from "react"
import { DefaultAccordion, FilledAccordionWithTable } from "../../Navigation/Accordion/Accordion.stories.jsx" 
import { FaInfoCircle, FaFolderOpen } from 'react-icons/fa';
import { DefaultBadge } from '../../Notifications/Badge/Badge.stories.jsx'
import { DefaultBadgeOnImage} from '../../Notifications/Badge/BadgeWrapper.stories.jsx'

export default {
  title: "Organisms/Accordion" 
};

const defaultArgs = {
  title: 'Default Accordion',
  icon: FaInfoCircle,
  children: <p>This is the content of the accordion.</p>,
  variant: 'default',
  rightContent: { showIcon: true },
};

const badgeArgs = {
  text: '7 New',
  variant: 'default',
  color: 'danger',
  position: 'center',
  small: false,
}

const tableArgs = {
  title: 'Accordion with Table',
  icon: FaFolderOpen,
  variant: 'default',
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
  rightContent: { showIcon: true, badge: {...badgeArgs}  },
};

const badgeWrapperArgs = {
  badgeText: 'New',
  badgeVariant: 'default',
  badgeColor: 'primary',
  badgePosition: 'top-right',
  children: <DefaultAccordion {...defaultArgs}/>,
};

export const AccordionMultiple = () => (
    <>
      <DefaultBadgeOnImage {...badgeWrapperArgs}/>
      <DefaultAccordion {...defaultArgs}/>
      <DefaultAccordion {...defaultArgs} />
      <FilledAccordionWithTable {...tableArgs}/>
      <DefaultAccordion {...defaultArgs}/>
      <FilledAccordionWithTable {...tableArgs}/>
    </>
)
