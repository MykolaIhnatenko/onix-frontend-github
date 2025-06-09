import IList from '../../interfaces/IList';
import MenuItem from './MenuItem';
import LinkItem from './LinkItem';

function List({
  listTitle, links, activeGroup, setActiveGroup, children,
}: IList) {
  return (
    <div role="menubar">
      <MenuItem
        title={listTitle}
        activeGroup={activeGroup}
        setActiveGroup={setActiveGroup}
      >
        <ul>
          {links.map(({ id, url, title }) => (
            <LinkItem
              key={[id, url].join('-')}
              title={title}
              url={url}
            />
          ))}
        </ul>
      </MenuItem>
      {children}
    </div>
  );
}

export default List;
