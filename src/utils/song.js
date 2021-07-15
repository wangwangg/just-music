export function createSong(song) {
  const { id, name, img, artists, duration, ...rest } = song

  return {
    id,
    name,
    img,
    artists,
    duration,
    artistsText: genArtistis(artists),
    durationSecond: duration / 1000,
    ...rest
  }
}

export function genArtistisText(artists) {
  return (artists || []).map(({ name }) => name).join('/')
}
