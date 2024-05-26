
export default function Header({user}){
    if(user){
      return <h1>Hallo, {user}!</h1>
    }
    return <h1>Tanpa Nama</h1>
  }