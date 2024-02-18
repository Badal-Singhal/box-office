import { Link } from 'react-router-dom';
import Apptitle from './Apptitle';

export default function Nav() {
  const LINK = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Starred',
      to: '/starred',
    },
  ];
  return (
    <>
    <div>
      <ul>
        {LINK.map(item => (<li key={LINK.to}>
          <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
    <Apptitle/>
    </>
  );
}
