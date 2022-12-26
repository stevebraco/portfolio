import { Buttons, Button, ButtonSelected } from './ButtonFilterStyles'

type Props = {
  filterButton: string[]
  handleSelectedButton: (name: string) => () => void
  selectedButton: string
}

const ButtonFilter = ({
  filterButton,
  handleSelectedButton,
  selectedButton,
}: Props) => {
  return (
    <Buttons>
      {filterButton.map((name: string) => {
        const isSelected = selectedButton === name
        return (
          <Button
            key={name}
            isSelected={isSelected}
            onClick={handleSelectedButton(name)}
            type="button"
          >
            {name}{' '}
          </Button>
        )
      })}
      <ButtonSelected selectedButton={selectedButton} />
    </Buttons>
  )
}
export default ButtonFilter
