import Text from './components/text';

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Text variant="body-md-bold"> Levar o dog pra passear </Text>
      <Text variant="body-md"> Tirar o lixo </Text>
      <Text variant="body-sm-bold"> Ir ao supermercado </Text>
    </div>
  )
}