import Link from 'next/link'
import A from '../components/A.js'
import MainContainer from '../components/MainContainer.js';
const Index = () => {
  return (
    <MainContainer>
      <div>
        <ul>
          <li>
            <A href="/users" text="Users" />
          </li>
        </ul>
        <h1>This App highlights main features of Next.js</h1>
      </div>
    </MainContainer>
  );
}
export default Index