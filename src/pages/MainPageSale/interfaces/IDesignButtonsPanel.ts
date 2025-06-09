import { IDesignTagList } from 'interfaces/ITechnologies';

interface IDesignButtonsPanel {
  designTag: string;
  typeFilterHandle: (id: string) => void;
  designTagList?: IDesignTagList;
}

export default IDesignButtonsPanel;
