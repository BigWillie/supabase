import { GripVertical } from 'lucide-react'
import { Draggable, DraggableProvided } from 'react-beautiful-dnd'
import { Button, IconTrash, Input } from 'ui'

interface EnumeratedTypeValueRowProps {
  index: number
  isDisabled?: boolean
  enumTypeValue: { id: string; value: string }
  onUpdateValue: (id: string, value: string) => void
  onRemoveValue: () => void
}

const EnumeratedTypeValueRow = ({
  index,
  isDisabled = false,
  enumTypeValue,
  onUpdateValue,
  onRemoveValue,
}: EnumeratedTypeValueRowProps) => {
  return (
    <Draggable draggableId={enumTypeValue.id} index={index} isDragDisabled={isDisabled}>
      {(draggableProvided: DraggableProvided) => (
        <div
          ref={draggableProvided.innerRef}
          {...draggableProvided.draggableProps}
          className="flex items-center space-x-2"
        >
          <div
            {...draggableProvided.dragHandleProps}
            className={isDisabled ? 'text-foreground-lighter !cursor-default' : 'text-foreground'}
          >
            <GripVertical size={16} strokeWidth={1.5} />
          </div>
          <Input
            className="w-full"
            value={enumTypeValue.value}
            onChange={(e) => onUpdateValue(enumTypeValue.id, e.target.value)}
          />
          <Button
            type="default"
            size="small"
            disabled={isDisabled}
            icon={<IconTrash strokeWidth={1.5} size={16} />}
            className="px-2"
            onClick={() => onRemoveValue()}
          />
        </div>
      )}
    </Draggable>
  )
}

export default EnumeratedTypeValueRow
