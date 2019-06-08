export default getTextCard = deck => {

  if ( !deck.questions || deck.questions.length === 0) {
    return 'No cards available'
  }

  if (deck.questions.length === 1) {
    return '1 Card'
  }

  return `${deck.questions.length} Cards`

}