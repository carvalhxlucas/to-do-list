import Text from './components/text';
import TrashIcon from './assets/icons/trash.svg?react';
import CheckIcon from './assets/icons/check.svg?react';
import CircleIcon from './assets/icons/circle.svg?react';
import PlusIcon from './assets/icons/plus.svg?react';
import PencilIcon from './assets/icons/pencil.svg?react';
import XIcon from './assets/icons/x.svg?react';
import Icon from './components/icon';
import Badge from './components/badge';
import Button from './components/button';

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-4">
        <Text variant="body-md-bold"> Levar o dog pra passear </Text>
        <Text variant="body-md"> Tirar o lixo </Text>
        <Text variant="body-sm-bold"> Ir ao supermercado </Text>
      </div>

      <div className="flex gap-4">
        <Icon svg={TrashIcon} />
        <Icon svg={CheckIcon} />
        <Icon svg={CircleIcon} />
        <Icon svg={PlusIcon} />
        <Icon svg={PencilIcon} />
        <Icon svg={XIcon} />
      </div>

      <div className="flex gap-4">
        <Badge variant="primary" size="sm">
          <Text variant="body-sm-bold"> 10 </Text>
        </Badge>

        <Badge variant="secondary" size="sm">
          <Text variant="body-sm-bold"> 10 </Text>
        </Badge>
      </div>

      <div className="flex gap-4">
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>
    </div>
  )
}