// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const reorderItemMap = ({ itemMap, source, destination }) => {
  const levels = Object.keys(itemMap).map(k => parseInt(k, 10))

  if (destination.droppableId === '+') {
    destination.droppableId = Math.max.apply(null, levels) + 1
  }

  if (destination.droppableId === '-') {
    destination.droppableId = Math.min.apply(null, levels) - 1
  }

  const current = [...itemMap[source.droppableId]]
  const next = [...(itemMap[destination.droppableId] || [])]
  const target = current[source.index]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(current, source.index, destination.index)
    const result = {
      ...itemMap,
      [source.droppableId]: reordered
    }
    return {
      itemMap: result,
      // not auto focusing in own list
      autoFocusItemId: null
    }
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1)
  // insert into next
  next.splice(destination.index, 0, target)

  const result = {
    ...itemMap,
    [source.droppableId]: current,
    [destination.droppableId]: next
  }

  return {
    itemMap: result,
    autoFocusItemId: target.email
  }
}
