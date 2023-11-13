import cn from 'classnames';
import { Link, Outlet, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === tabId })}
              key={tab.id}
              data-cy="Tab"
            >
              <Link
                to={tab.id}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {tabId
        ? <Outlet />
        : (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        )}

    </>
  );
};