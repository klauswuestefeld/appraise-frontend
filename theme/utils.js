export const flexGroup = (
  justifyContent = 'flex-start',
  orientation = 'row',
  alignItems = 'stretch',
  display = 'flex'
) => {
  return `
    align-items: ${alignItems};
    display: ${display};
    flex-direction: ${orientation};
    justify-content: ${justifyContent};`
}

export const hexToRgba = (hex, opacity = 1) => {
  hex = hex.replace('#', '')
  hex = hex.length === 3 ? `${hex}${hex}` : hex
  let red = parseInt(hex.substring(0, 2), 16)
  let green = parseInt(hex.substring(2, 4), 16)
  let blue = parseInt(hex.substring(4, 6), 16)
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}
