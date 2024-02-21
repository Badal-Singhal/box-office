

export default function ShowDetail(props) {
  const {status,premiered, network}=props;
  return (
    <div>
      <p>status: {status}</p>
      <p>
        Premiered {premiered}{!!network && ` on ${network.name}`}
      </p>
    
    </div>
  )
}
