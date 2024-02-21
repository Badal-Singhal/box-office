export default function Cast({ cast }) {
  return (
    <div>
      {cast.map(data => (
        <>
          <div key={data.person.id}>
            <img
              src={
                data.person && data.person.image
                  ? data.person.image.medium
                  : '/image-not-found.png'
              }
            />
          </div>
          <div key={data.person.id}>
            <p>{data.person?.name}</p>
          </div>
        </>
      ))}
    </div>
  );
}
