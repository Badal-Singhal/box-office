export default function Seasons({seasons}) {
  return (
    <div>
      <p>Total number of Seasons: {seasons.length}</p>
      <div>
        {seasons.map(data=>(<>
            <p key={data.id}>Number of Episodes in Season{data.number}: {data.episodeOrder}</p>
            <p key={data.id}>Period: {data.premiereDate} to {data.endDate}</p>
            </>
        ))}
      </div>
      

    </div>
  )
}
