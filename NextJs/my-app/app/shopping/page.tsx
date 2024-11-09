import ServerComponent from "../server-component/page";
import ClientComponent from "../client-component/page";
import HeaderProps from "../props/page";
import UserProfile from "../multi-props/page";
export default function Shopping() {
    return (
<>
<div>Header</div>
<HeaderProps title="Shopping"/>

<br />

<div> my Server</div>
<ServerComponent/>

<br />

<div> my client</div>
<ClientComponent/> 

<br />

<div>User Profile</div>
<UserProfile name="ball" age={21} email="a@a"isAdmin={true}/>
</>
    );
}