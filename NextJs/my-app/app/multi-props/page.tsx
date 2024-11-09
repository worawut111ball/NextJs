'use client'
interface UserProfileProps {
    name: string
    age: number
    email: string
    isAdmin?: boolean
}

 function UserProfile({ name, age, email, isAdmin }: UserProfileProps) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            {isAdmin && <p>Admin</p>}
        </div>
    )
}
export default UserProfile;